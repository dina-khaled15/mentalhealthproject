const express = require("express");
const router = express.Router();
const {
  getAllValues,
  createValue,
  updateValue,
  deleteValue,
  searchValues,
  getTopValues
} = require("../controllers/value.controller");

// الحصول على كل القيم
router.get("/", getAllValues);

// إضافة قيمة جديدة
router.post("/", createValue);

// تحديث قيمة معينة
router.put("/:id", updateValue);

// حذف قيمة معينة
router.delete("/:id", deleteValue);

// البحث عن قيم
router.get("/search", searchValues);

// الحصول على أفضل القيم
router.get("/top", getTopValues);

module.exports = router;
