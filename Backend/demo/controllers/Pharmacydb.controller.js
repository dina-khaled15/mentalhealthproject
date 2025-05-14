const Pharmacy = require('../models/Pharmacy.model');

module.exports.getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.send(pharmacies);
  } catch (error) {
    res.send(error);
  }
};

module.exports.createPharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.create(req.body);
    res.send(pharmacy);
  } catch (error) {
    console.log("Error:", error);
    res.send(error);
  }
};

module.exports.updatePharmacy = async (req, res) => {
  try {
    const id = req.params.id;
    const pharmacy = await Pharmacy.findByIdAndUpdate(id, req.body, { new: true });
    res.send(pharmacy);
  } catch (error) {
    res.send(error);
  }
};

module.exports.deletePharmacy = async (req, res) => {
  try {
    const id = req.params.id;
    await Pharmacy.findByIdAndDelete(id);
    res.send("Pharmacy deleted");
  } catch (error) {
    res.send(error);
  }
};

module.exports.searchPharmacy = async (req, res) => {
  try {
    const { city } = req.query;
    const pharmacies = await Pharmacy.find({ city });
    res.send(pharmacies);
  } catch (error) {
    res.send(error);
  }
};
