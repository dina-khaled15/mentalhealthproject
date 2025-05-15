const express = require('express');
const router = express.Router();
const {
 getProfile,
  createOrUpdateProfile,
  deleteProfile,
  searchProfile

} = require("../controllers/profile.controller");


// إنشاء أو تحديث الملف الشخصي
router.post('/',authMiddleware,upload.single('avatar'),createOrUpdateProfile
);

// جلب الملف الشخصي
router.get('/', getProfile);

// حذف الملف الشخصي
router.delete('/',deleteProfile);
router.get('/search',searchProfile);

module.exports = router;