// routes/cardImageRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllCardImages,
  addCardImage,
} = require("../controllers/cardImages.controller");

router.get("/", getAllCardImages);
router.post("/", addCardImage);

module.exports = router;