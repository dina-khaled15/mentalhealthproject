const Message = require('../models/Message.model');
const User = require('../models/UserCommunity.model');
const path = require('path');
const fs = require('fs').promises;

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find()
            .sort({ createdAt: 1 })
            .limit(100);
        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

const uploadAudioMessage = async (req, res) => {
    try {
        if (!req.files || !req.files.audio) {
            return res.status(400).json({ error: 'No audio file uploaded' });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const audio = req.files.audio;
        const audioName = `audio_${Date.now()}_${user._id}.mp3`;
        const uploadPath = path.join(__dirname, '../Uploads/audios', audioName);

        await fs.mkdir(path.dirname(uploadPath), { recursive: true });

        await audio.mv(uploadPath);

        const message = new Message({
            type: 'audio',
            user: req.user.id,
            username: user.name,
            audioUrl: `http://localhost:4000/uploads/audios/${audioName}`,
            duration: req.body.duration ? parseInt(req.body.duration) : null,
        });

        await message.save();
        res.status(201).json(message);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getMessages,
    uploadAudioMessage,
};