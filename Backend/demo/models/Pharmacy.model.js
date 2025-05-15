const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,  
  },
  city: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;
