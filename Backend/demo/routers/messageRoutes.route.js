const express = require('express');
const router = express.Router();
const { getMessages, uploadAudioMessage } = require('../controllers/messageController.controller');
const { protectCommunity } = require('../middlewares/protectCommunity.middleware');

router.get('/', protectCommunity, getMessages);

router.post('/audio', protectCommunity, uploadAudioMessage);

module.exports = router;