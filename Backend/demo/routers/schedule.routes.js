const express = require('express');
const router = express.Router();
const { getAllSchedule, createSchedule, updateSchedule, deleteSchedule, searchSchedule } = require('../controllers/Scheduledb.controller');
router.get('/', getAllSchedule);

router.post('/', createSchedule);

router.put('/:id', updateSchedule);

router.delete('/:id', deleteSchedule);

router.get('/search', searchSchedule);

module.exports = router;