const express = require("express");
const router = express.Router();
const {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  searchLocations,
  getTopLocations
} = require("../controllers/location.controller");

// الحصول على كل المواقع
router.get("/", getLocations);

// إضافة موقع جديد
router.post("/", createLocation);

// تحديث موقع معين
router.put("/:id", updateLocation);

// حذف موقع معين
router.delete("/:id", deleteLocation);

// البحث عن مواقع
router.get("/search", searchLocations);

// الحصول على أفضل المواقع
router.get("/top", getTopLocations);

module.exports = router;
