const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// إعداد التخزين المؤقت للصور باستخدام multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // أو أي اسم يناسبك
  }
});

const upload = multer({ storage });

// API لرفع صورة
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    
    // حذف الملف من السيرفر بعد الرفع
    fs.unlinkSync(req.file.path);

    res.json({ imageUrl: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'فشل رفع الصورة' });
  }
});

module.exports = router;
