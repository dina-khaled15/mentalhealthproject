const mongoose = require('mongoose');

const serviceBookingSchema = new mongoose.Schema({
  doctor: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
});

const ServiceBooking = mongoose.model('ServiceBooking', serviceBookingSchema);

module.exports = ServiceBooking;
