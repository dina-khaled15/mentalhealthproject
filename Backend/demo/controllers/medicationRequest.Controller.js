// controllers/medicationRequestController.js
const MedicationRequest = require('../models/MedicationRequest');

// Create a new medication request
exports.createRequest = async (req, res) => {
  try {
    const { name, location, medication, branch, confidential } = req.body;
    
    const request = new MedicationRequest({
      name,
      location,
      medication,
      branch,
      confidential
    });
    
    const savedRequest = await request.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
