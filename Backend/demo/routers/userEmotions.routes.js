const express = require('express');
const router = express.Router();
const { getAllEmotions, getEmotionById, createEmotion, updateEmotion, deleteEmotion } = require('../controllers/Emotionsdb.controller');

// Get all emotions
router.get('/', getAllEmotions);

// Get emotion by ID
router.get('/:id', getEmotionById);

// Create a new emotion
router.post('/', createEmotion);

// Update an existing emotion
router.put('/:id', updateEmotion);

// Delete an emotion by ID
router.delete('/:id', deleteEmotion);

module.exports = router;
