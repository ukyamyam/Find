// Mongoose schema for coin balance and history
const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  total: { type: Number, default: 0 },
  history: [
    {
      reason: String,
      amount: Number,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Coin', coinSchema);
