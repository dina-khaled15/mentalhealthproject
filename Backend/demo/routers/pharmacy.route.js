const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacy.Controller');

// Get all pharmacies
router.get('/', pharmacyController.getPharmacies);

// Get all cities
router.get('/cities', pharmacyController.getCities);

// Add a new pharmacy (admin only)
router.post('/', pharmacyController.addPharmacy);

module.exports = router;
