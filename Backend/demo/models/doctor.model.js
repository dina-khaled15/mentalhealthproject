const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  title: String,
  avatar: String, 
  description: String,
  contact: {
    phone: String,
    email: String,
  },
  socialMedia: [String],
  education: [
    {
      year: String,
      degree: String,
      school: String,
    },
    {
        year: String,
        degree: String,
        school: String,
    },
  ],
  experience: [
    {
      year: String,
      role: String,
      place: String,
    },
    {
        year: String,
        role: String,
        place: String,
    },
    {
        year: String,
        role: String,
        place: String,
    },
  ],
  certificates: [String],
  expertise: [String],
});

const doctor = mongoose.model('Doctor', doctorSchema);
module.exports = doctor;