// controllers/pharmacyController.js
const Pharmacy = require('../models/Pharmacy');

// Get all pharmacies
exports.getPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.status(200).json(pharmacies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all cities
exports.getCities = async (req, res) => {
  try {
    const cities = await Pharmacy.distinct('city');
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add a new pharmacy (admin only)
exports.addPharmacy = async (req, res) => {
  try {
    const { name, hours, service, rating, city } = req.body;
    
    const pharmacy = new Pharmacy({
      name,
      hours,
      service,
      rating,
      city
    });
    
    const savedPharmacy = await pharmacy.save();
    res.status(201).json(savedPharmacy);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};