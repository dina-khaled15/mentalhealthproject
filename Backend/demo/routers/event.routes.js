const express = require('express');
const router = express.Router();
const {
  getAllEvents,
  createEvent,
  deleteEvent,
} = require('../controllers/event.controller');

router.get('/', getAllEvents);
router.post('/', createEvent);
router.delete('/:id', deleteEvent);

module.exports = router;