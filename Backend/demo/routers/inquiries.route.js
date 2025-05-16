const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    const newInquiry = new Inquiry({ firstName, lastName, email, phone, message });
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while saving inquiry." });
  }
});

module.exports = router;
