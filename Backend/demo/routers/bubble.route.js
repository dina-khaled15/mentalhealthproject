const express = require("express");
const router = express.Router();
const { saveScore, getMaxScore } = require("../controllers/bubble.controller");

router.post("/save", saveScore);
router.get("/max", getMaxScore);

module.exports = router;
