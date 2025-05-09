const Pharmacy = require('../models/Pharmacy.model');

exports.getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPharmacy = async (req, res) => {
  try {
    const pharmacy = new Pharmacy(req.body);
    await pharmacy.save();
    res.status(201).json(pharmacy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPharmacyById = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);
    if (!pharmacy) return res.status(404).json({ error: 'Pharmacy not found' });
    res.json(pharmacy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePharmacy = async (req, res) => {
  try {
    const result = await Pharmacy.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Pharmacy not found" });
    res.json({ message: "Pharmacy deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
