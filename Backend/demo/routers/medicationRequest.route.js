const express = require('express');
const router = express.Router();
const medicationRequestController = require('../controllers/medicationRequest.Controller');

// Create a new medication request
router.post('/', medicationRequestController.createRequest);

module.exports = router;
