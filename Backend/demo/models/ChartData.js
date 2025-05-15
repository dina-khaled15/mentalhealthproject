const mongoose = require('mongoose');

const chartDataSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['expenses', 'profit'],
  },
  month: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: 'black',
  },
});

module.exports = mongoose.model('ChartData', chartDataSchema);