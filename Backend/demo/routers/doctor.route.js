// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

// POST لإنشاء دكتور
router.post('/', doctorController.createDoctor);

// GET لعرض كل الدكاترة (اختياري)
router.get('/', doctorController.getAllDoctors);

// DELETE لحذف دكتور (اختياري)
router.delete('/:id', doctorController.deleteDoctor);

router.get('/:id', doctorController.getDoctorById);



module.exports = router;
