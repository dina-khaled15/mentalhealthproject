const express = require("express");
const router = express.Router();
const { getMaxScore, saveScore } = require("../controllers/pattern.controller");

// Route لجلب أعلى النقطة
router.get("/max", getMaxScore);

// Route لحفظ النقطة الجديدة
router.post("/save", saveScore);

module.exports = router;
