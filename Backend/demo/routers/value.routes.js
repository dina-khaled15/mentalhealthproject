const express = require("express");
const router = express.Router();
const {
  getAllValues,
  addValue,
  // updateValue,
  deleteValue,
  // searchValues,
  // getTopValues
} = require("../controllers/value.controller");

router.get("/", getAllValues);

router.post("/", addValue);

// router.put("/:id", updateValue);

router.delete("/:id", deleteValue);

// router.get("/search", searchValues);

// router.get("/top", getTopValues);

module.exports = router;
