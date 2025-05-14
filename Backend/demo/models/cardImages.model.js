const mongoose = require('mongoose');

const cardImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
}, { timestamps: true });

const CardImage = mongoose.model('CardImage', cardImageSchema);

module.exports = CardImage;
