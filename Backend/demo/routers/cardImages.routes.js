const express = require('express');
const router = express.Router();
const { getAllCardImages } = require('../controllers/cardImage.controller');

router.get('/', getAllCardImages);

module.exports = router;
