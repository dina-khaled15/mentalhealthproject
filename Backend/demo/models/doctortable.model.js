const mongoose = require('mongoose');

const doctortableSchema = new mongoose.Schema({
  registrarId: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return !isNaN(value) && value > 0;
      },
      message: props => `${props.value} ليس رقمًا صالحًا!`
    }
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const Doctor = mongoose.model('doctortable', doctortableSchema);

module.exports = Doctor;