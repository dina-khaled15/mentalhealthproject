const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  moves: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
