const express = require('express');
const router = express.Router();
const { createPharmacy, getAllPharmacies, deletePharmacy, getPharmacyById } = require('../controllers/Pharmacydb.controller');

router.get('/', getAllPharmacies);
router.post('/', createPharmacy);
router.delete('/:id', deletePharmacy);
router.get('/:id', getPharmacyById);

module.exports = router;
