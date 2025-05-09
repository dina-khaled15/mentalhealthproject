const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');

const upload = multer({ storage });
const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  try {
    const imageUrl = req.file.path;
    res.json({ message: 'Image uploaded successfully', imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

module.exports = router;
