const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  greeting: {
    type: String,
    required: true,
  },
  messageButtons: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
      nextStage: { type: String, required: true },
      pageUrl: { type: String, default: null },
    },
  ],
  options: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
      nextStage: { type: String, default: null },
      action: { type: String, default: null },
      color: { type: String, required: true },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Stage", stageSchema);
