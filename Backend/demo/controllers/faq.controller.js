const FAQ = require('../models/faq.model');

// جلب جميع الأسئلة
const getAllFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find(); // جلب كل الأسئلة من قاعدة البيانات
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching FAQs", error });
  }
};

// إضافة سؤال جديد
const addFAQ = async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newFAQ = new FAQ({ question, answer });
    await newFAQ.save();
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ message: "Error adding FAQ", error });
  }
};

// حذف سؤال
const deleteFAQ = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFAQ = await FAQ.findByIdAndDelete(id);
    if (!deletedFAQ) {
      return res.status(404).json({ message: "FAQ not found" });
    }
    res.status(200).json({ message: "FAQ deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting FAQ", error });
  }
};

module.exports = { getAllFAQs, addFAQ, deleteFAQ };
