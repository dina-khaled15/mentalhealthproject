const Value = require("../models/value.model");

// Get all values
const getAllValues = async (req, res) => {
  try {
    const values = await Value.find();
    res.json(values);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new value
const addValue = async (req, res) => {
  const { icon, title, description } = req.body;
  try {
    const newValue = new Value({ icon, title, description });
    await newValue.save();
    res.status(201).json(newValue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a value by ID
const deleteValue = async (req, res) => {
  const { id } = req.params;
  try {
    await Value.findByIdAndDelete(id);
    res.json({ message: "Value deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllValues,
  addValue,
  deleteValue,
};
