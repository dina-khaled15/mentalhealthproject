const mongoose = require("mongoose");

const patternSchema = new mongoose.Schema(
  {
    score: { type: Number, required: true },
    player: { type: String, required: true },
  },
  { timestamps: true }
);

const Score = mongoose.model("pattern", patternSchema);

module.exports = Score;
