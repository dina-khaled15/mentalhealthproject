const express = require("express");
const router = express.Router();
const {
  getStageByName,
  getAllStages,
  createStage
} = require("../controllers/stages.controller");

router.get("/", getAllStages);
router.get("/:stageName", getStageByName);

// ✅ ده أهم راوت لازم يكون موجود
router.post("/", createStage);

module.exports = router;
