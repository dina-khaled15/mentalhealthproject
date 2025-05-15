const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  booked: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
  slots: {
    type: [String], // مصفوفة من السلاسل النصية
    required: true,
  },
}, { timestamps: true });

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;