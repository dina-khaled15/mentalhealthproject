// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// // إعدادات Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // إعدادات التخزين باستخدام multer
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'uploads', // مجلد رفع الصور
//     allowed_formats: ['jpg', 'png', 'jpeg'], // أنواع الصور المسموح بها
//   },
// });

// module.exports = { cloudinary, storage };
const express = require('express');
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage });
const router = express.Router();

// POST route لرفع الصورة
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const imageUrl = req.file.path; // هذا رابط الصورة على Cloudinary
  res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
});

module.exports = router;