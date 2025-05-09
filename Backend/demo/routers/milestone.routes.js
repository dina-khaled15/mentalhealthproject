const express = require('express');
const router = express.Router();
const {
  getAllMilestones,
  createMilestone,
  updateMilestone,
  deleteMilestone,
  searchMilestones,
  getTopMilestones,
} = require('../controllers/milestone.controller');

router.get('/', getAllMilestones);
router.post('/', createMilestone);
router.put('/:id', updateMilestone);
router.delete('/:id', deleteMilestone);
router.get('/search', searchMilestones);
router.get('/top', getTopMilestones);

module.exports = router;
