const express = require("express");
const { getSchedules, createSchedule, updateSchedule } = require("../controllers/schedule.controller");

const router = express.Router();

router.get("/", getSchedules);

router.post("/", createSchedule);

router.put("/:id", updateSchedule);

module.exports = router;

