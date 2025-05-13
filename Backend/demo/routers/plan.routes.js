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

router.get("/", getAllPlans);

router.post("/", createPlan);

router.put("/:id", updatePlan);

router.delete("/:id", deletePlan);

router.get("/search", searchPlans);

router.get("/top", getTopPlans);

module.exports = router;
