const mongoose = require('mongoose');

const serviceBookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  doctor: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: String,
    required: true,
    trim: true
  },
  session: {
    type: String,
    required: true,
    trim: true
  },
  bookingDate: {
    type: Date,
    default: Date.now
  }
});

const ServiceBooking = mongoose.model('ServiceBooking', serviceBookingSchema);

module.exports = ServiceBooking;