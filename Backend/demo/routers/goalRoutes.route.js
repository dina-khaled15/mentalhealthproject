const express = require('express');
const router = express.Router();
const {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController.controller');

// Define routes
router.get('/', getGoals);
router.post('/', addGoal);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);

module.exports = router;