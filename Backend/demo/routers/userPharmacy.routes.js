const express = require('express');
const router = express.Router();
const { getAllPharmacies, createPharmacy, updatePharmacy, deletePharmacy, searchPharmacy } = require('../controllers/Pharmacydb.controller');

router.get('/', getAllPharmacies);

router.post('/', createPharmacy);

router.put('/:id', updatePharmacy);

router.delete('/:id', deletePharmacy);

router.get('/search', searchPharmacy);

module.exports = router;
