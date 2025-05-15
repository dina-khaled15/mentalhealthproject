const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  chatRoom: {
    type: String,
    required: true,
  },
  sender: {
    type: String, // Just a string for sender name (e.g., "Guest123")
    required: true,
  },
  text: {
    type: String,
  },
  type: {
    type: String,
    enum: ['text', 'audio', 'attachment'],
    default: 'text',
  },
  attachmentUrl: {
    type: String,
  },
  duration: {
    type: Number, // For audio duration in seconds
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);