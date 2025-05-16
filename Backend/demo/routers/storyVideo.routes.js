const express = require('express');
const router = express.Router();
const { getAllVideos, getVideoById, postVid } = require('../controllers/storyVideo.Controller');

router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.post('/', postVid);

module.exports = router;
