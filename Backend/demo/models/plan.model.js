const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    period: { type: String, required: true },
    description: { type: String, required: true },
    features: [String],
    sessions: { type: String, required: true },
    buttonText: { type: String, required: true },
    highlighted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
