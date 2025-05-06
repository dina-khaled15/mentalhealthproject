const mongoose = require('mongoose');

const emotionSchema = new mongoose.Schema({
  emoji: { type: String, required: true },  // The emoji for the emotion
  description: { type: String, required: true },  // The description of the emotion
  questions: [
    {
      q: { type: String, required: true },  // The question associated with the emotion
      options: [{ type: String, required: true }],  // The answer options for the question
      correct: { type: Number, required: true },  // The index of the correct answer
    }
  ]
});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;
