const express = require('express');
const router = express.Router();
const { getAllBookings, createBooking, updateBooking, deleteBooking, searchBooking } = require('../controllers/Bookingdb.controller');

router.get('/', getAllBookings);
router.post('/', createBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);
router.get('/search', searchBooking);

module.exports = router;