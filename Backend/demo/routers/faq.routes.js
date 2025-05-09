const express = require('express');
const { getAllFAQs, addFAQ, deleteFAQ } = require('../controllers/faq.controller');

const router = express.Router();

// Route لعرض كل الأسئلة
router.get('/faqs', getAllFAQs);

// Route لإضافة سؤال جديد
router.post('/faqs', addFAQ);

// Route لحذف سؤال
router.delete('/faqs/:id', deleteFAQ);

module.exports = router;
