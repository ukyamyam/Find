// Routes for coin-related operations
const express = require('express');
const router = express.Router();
const coinController = require('../controllers/coinController');

router.get('/coins', coinController.getCoinBalance);

module.exports = router;
