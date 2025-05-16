const mongoose = require('mongoose');

const emotionSchema = new mongoose.Schema({
  emoji: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true }, 
  questions: [
    {
      q: { type: String, required: true }, 
      options: [{ type: String, required: true }], 
      correct: { type: Number, required: true },
    }
  ]
});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;