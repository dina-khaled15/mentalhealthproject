const express = require("express");
const router = express.Router();
const {
  getStageByName,
  getAllStages,
  createStage
} = require("../controllers/stages.controller");

router.get("/", getAllStages);
router.get("/:stageName", getStageByName);

router.post("/", createStage);

module.exports = router;
