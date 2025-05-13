const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  mainImage: String,
  category: String,
  aloneImage: String,
  groupImg: String,
  description: String,
  whatIsIt: String,
  benefits: [
    {
      title: String,
      description: String,
      icon: String
    },
    {
      title: String,
      description: String,
      icon: String
    },
    {
      title: String,
      description: String,
      icon: String
    },
    {
      title: String,
      description: String,
      icon: String
    }
  ],
  testimonial: {
    text: String,
    name: String,
    role: String
  },
  statistic: { type: String },
  resources: {
    youtube: [
      {
        title: String,
        url: String
      },
      {
        title: String,
        url: String
      },
      {
        title: String,
        url: String
      }
    ],
    articles: [
      {
        title: String,
        url: String
      },
      {
        title: String,
        url: String
      }
    ]
  }
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;
