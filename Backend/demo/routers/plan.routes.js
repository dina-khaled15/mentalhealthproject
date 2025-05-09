const express = require("express");
const router = express.Router();
const {
  getAllPlans,
  createPlan,
  updatePlan,
  deletePlan,
  searchPlans,
  getTopPlans
} = require("../controllers/plan.controller");

// الحصول على كل الخطط
router.get("/", getAllPlans);

// إضافة خطة جديدة
router.post("/", createPlan);

// تحديث خطة معينة
router.put("/:id", updatePlan);

// حذف خطة معينة
router.delete("/:id", deletePlan);

// البحث عن خطط بناءً على الاسم أو الوصف
router.get("/search", searchPlans);

// الحصول على أفضل 5 خطط (حسب التقييم، أو أي معيار آخر)
router.get("/top", getTopPlans);

module.exports = router;
