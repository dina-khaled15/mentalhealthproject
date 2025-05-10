// routes/doctor.route.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

// POST لإنشاء دكتور
router.post('/', doctorController.createDoctor);

// GET لعرض كل الدكاترة
router.get('/', doctorController.getAllDoctors);

// DELETE لحذف دكتور
router.delete('/:id', doctorController.deleteDoctor);

// GET لعرض دكتور معين حسب ID
router.get('/:id', doctorController.getDoctorById);

module.exports = router;
