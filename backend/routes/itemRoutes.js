// Routes for item-related operations
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/register', itemController.registerItem);
router.get('/search', itemController.searchItems);
router.post('/items/:id/purchase', itemController.purchaseItem);

module.exports = router;