const express = require('express');
const router = express.Router();
const { getAllFeedback, createFeedback, updateFeedback, deleteFeedback, searchFeedback }= require('../controllers/feedbackdb.controller');


router.get('/', getAllFeedback);

router.post('/', createFeedback); 

router.put('/:id', updateFeedback); 

router.delete('/:id', deleteFeedback); 

router.get("/:search", searchFeedback); 

module.exports = router;