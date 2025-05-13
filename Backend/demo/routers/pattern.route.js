const express = require("express");
const router = express.Router();
const { getMaxScore, saveScore } = require("../controllers/pattern.controller");

router.get("/max", getMaxScore);

router.post("/save", saveScore);

module.exports = router;
