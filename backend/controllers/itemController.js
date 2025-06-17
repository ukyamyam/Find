// Handles item registration, search, and purchase logic
const Item = require('../models/Item');
const Coin = require('../models/Coin');

exports.registerItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();

    let coinDoc = await Coin.findOne();
    if (!coinDoc) {
      coinDoc = new Coin({ total: item.tokensEarned });
    } else {
      coinDoc.total += item.tokensEarned;
    }
    coinDoc.history.push({ reason: 'found_item_registration', amount: item.tokensEarned });
    await coinDoc.save();

    res.json({ success: true, tokensEarned: item.tokensEarned });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.searchItems = async (req, res) => {
  try {
    const query = req.query.query || '';
    const regex = new RegExp(query, 'i');
    const items = await Item.find({
      $or: [
        { name: regex },
        { description: regex },
        { tags: regex }
      ]
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.purchaseItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findById(itemId);
    if (!item || item.status !== 'auction') return res.status(404).json({ success: false, message: 'Item not found or not for auction' });

    const coinDoc = await Coin.findOne();
    const cost = 50;
    if (!coinDoc || coinDoc.total < cost) return res.status(400).json({ success: false, message: 'Not enough coins' });

    coinDoc.total -= cost;
    coinDoc.history.push({ reason: 'auction_purchase', amount: -cost });
    await coinDoc.save();

    item.status = 'claimed';
    await item.save();

    res.json({ success: true, cost });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
