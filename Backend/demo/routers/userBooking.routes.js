const express = require('express');
const router = express.Router();
const { getAllBookings, createBooking, updateBooking, deleteBooking, searchBooking } = require('../controllers/Bookingdb.controller');

// الحصول على كل الحجوزات
router.get('/', getAllBookings);

// إضافة حجز جديد
router.post('/', createBooking);

// تعديل حجز
router.put('/:id', updateBooking);

// حذف حجز
router.delete('/:id', deleteBooking);

// البحث عن حجز
router.get("/search", searchBooking);

module.exports = router;
