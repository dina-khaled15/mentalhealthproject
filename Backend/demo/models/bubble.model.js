const mongoose = require("mongoose");

const bubbleSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  player: {
    type: String,
    default: "Anonymous",
  },
}, { timestamps: true });

module.exports = mongoose.model("bubble", bubbleSchema);
