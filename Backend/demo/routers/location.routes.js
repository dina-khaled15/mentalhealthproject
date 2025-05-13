const express = require("express");
const router = express.Router();
const {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  searchLocations,
  getTopLocations
} = require("../controllers/location.controller");

router.get("/", getLocations);

router.post("/", createLocation);

router.put("/:id", updateLocation);

router.delete("/:id", deleteLocation);

router.get("/search", searchLocations);

router.get("/top", getTopLocations);

module.exports = router;
