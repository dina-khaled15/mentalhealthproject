const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Location", locationSchema);
