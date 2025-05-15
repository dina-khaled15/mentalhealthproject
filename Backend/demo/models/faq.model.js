const mongoose = require('mongoose');

// إنشاء سكيمة للـ FAQ
const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // عشان نسجل الوقت اللي اتضاف فيه السؤال والجواب
);

// إنشاء الموديل
const Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;
