const mongoose = require("mongoose");

const cardImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CardImage", cardImageSchema);