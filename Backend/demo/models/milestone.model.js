const mongoose = require('mongoose');

const milestoneSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Milestone = mongoose.model('Milestone', milestoneSchema);

module.exports = Milestone;
