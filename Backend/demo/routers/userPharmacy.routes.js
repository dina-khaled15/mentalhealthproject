// src/routes/pharmacy.routes.js
const express = require('express');
const router = express.Router();
const { createPharmacy, getAllPharmacies, deletePharmacy, getPharmacyById } = require('../controllers/Pharmacydb.controller');

// لعرض جميع الصيدليات
router.get('/', getAllPharmacies);

// لإنشاء صيدلية جديدة
router.post('/', createPharmacy);

// لحذف صيدلية باستخدام الـ ID
router.delete('/:id', deletePharmacy);

// لعرض صيدلية واحدة باستخدام الـ ID
router.get('/:id', getPharmacyById);

module.exports = router;
