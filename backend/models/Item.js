// Mongoose schema for lost/found items
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  location: String,
  imageUrl: String,
  tags: [String],
  tokensEarned: { type: Number, default: 10 },
  status: { type: String, enum: ['listed', 'claimed', 'auction'], default: 'listed' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);
