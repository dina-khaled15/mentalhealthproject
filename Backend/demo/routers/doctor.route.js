const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');

router.post('/', doctorController.createDoctor);

router.get('/', doctorController.getAllDoctors);

router.delete('/:id', doctorController.deleteDoctor);

router.get('/:id', doctorController.getDoctorById);

module.exports = router;
