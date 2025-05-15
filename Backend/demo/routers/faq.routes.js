const express = require('express');
const { getAllFAQs, addFAQ, deleteFAQ } = require('../controllers/faq.controller');

const router = express.Router();

// Route لعرض كل الأسئلة
router.get('/', getAllFAQs);

// Route لإضافة سؤال جديد
router.post('/', addFAQ);

// Route لحذف سؤال
router.delete('/:id', deleteFAQ);

module.exports = router;
