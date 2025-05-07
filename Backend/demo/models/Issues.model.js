const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }, // تحقق من التكرار في العنوان
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
      },
  
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
        },
  
  
      ],
      articles: [
        {
          title: String,
          url: String
        },
   {
          title: String,
          url: String
        },
    
      ]
    }
  });
  
  const Issue = mongoose.model('Issue', issueSchema);
  
  module.exports = Issue;