const express = require('express');
const router = express.Router();
const { getMessages, uploadAudioMessage } = require('../controllers/messageController.controller');
const { protectCommunity } = require('../middlewares/protectCommunity.middleware');

// Get all messages
router.get('/', protectCommunity, getMessages);

// Upload audio message
router.post('/audio', protectCommunity, uploadAudioMessage);

module.exports = router;