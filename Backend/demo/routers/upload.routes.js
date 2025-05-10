const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');

const upload = multer({ storage });
const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const imageUrl = req.file.path; // هذا رابط الصورة على Cloudinary
  res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
});

module.exports = router;
