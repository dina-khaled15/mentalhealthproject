const express = require('express');
const router = express.Router();
const chartController = require('../controllers/chart.Controller');

router.get('/', chartController.getChartData);
router.post('/', chartController.createChartData);

module.exports = router;