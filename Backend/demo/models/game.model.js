// models/Game.js
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String, // رابط الصورة أو اسم الملف
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Game", gameSchema);
