// Handles coin balance retrieval
const Coin = require('../models/Coin');

exports.getCoinBalance = async (req, res) => {
  try {
    const coinDoc = await Coin.findOne();
    if (!coinDoc) return res.json({ total: 0, history: [] });
    res.json({ total: coinDoc.total, history: coinDoc.history });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
