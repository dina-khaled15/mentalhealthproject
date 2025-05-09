const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        enum: ['text', 'audio'],
        default: 'text',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    audioUrl: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Message', messageSchema);


