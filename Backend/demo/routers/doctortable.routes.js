const express = require('express');
const router = express.Router();
const {
  getAllDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  searchDoctors,
  getTopDoctors,
} = require('../controllers/doctortabledb.controller');

router.get('/', getAllDoctors);
router.post('/', createDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);
router.get('/search', searchDoctors);
router.get('/top', getTopDoctors);

module.exports = router;