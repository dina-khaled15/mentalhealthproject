const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    required: true,
  }
}, { timestamps: true });


const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
