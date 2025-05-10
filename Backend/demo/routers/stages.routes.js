const express = require("express");
const router = express.Router();
const { getStageByName, getAllStages } = require("../controllers/stages.controller");

// Route to get all stages
router.get("/", getAllStages);

// Route to get stage by name
router.get("/:stageName", getStageByName);

module.exports = router;
