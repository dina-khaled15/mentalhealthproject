const Plan = require("../models/plan.model");

module.exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (err) {
    console.error("Error fetching plans:", err.message);
    res.status(500).json({ message: "Failed to retrieve plans", error: err.message });
  }
};

module.exports.createPlan = async (req, res) => {
  try {
    const requiredFields = ['name', 'description', 'price'];  
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `Missing required field: ${field}` });
      }
    }

    const newPlan = new Plan(req.body);

    await newPlan.save();
    res.status(201).json({ message: "Plan created successfully", plan: newPlan });
  } catch (err) {
    console.error("Error creating plan:", err.message);
    res.status(500).json({ message: "Failed to create plan", error: err.message });
  }
};

module.exports.updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlan = await Plan.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.status(200).json({ message: 'Plan updated successfully', plan: updatedPlan });
  } catch (err) {
    console.error("Error updating plan:", err.message);
    res.status(500).json({ message: "Failed to update plan", error: err.message });
  }
};

module.exports.deletePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlan = await Plan.findByIdAndDelete(id);
    if (!deletedPlan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    res.status(200).json({ message: 'Plan deleted successfully' });
  } catch (err) {
    console.error("Error deleting plan:", err.message);
    res.status(500).json({ message: "Failed to delete plan", error: err.message });
  }
};

module.exports.searchPlans = async (req, res) => {
  try {
    const { name, description } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: 'i' };  
    if (description) query.description = { $regex: description, $options: 'i' };

    const plans = await Plan.find(query);
    res.status(200).json(plans);
  } catch (err) {
    console.error("Error searching plans:", err.message);
    res.status(500).json({ message: "Failed to search plans", error: err.message });
  }
};

module.exports.getTopPlans = async (req, res) => {
  try {
    const topPlans = await Plan.find().sort({ rating: -1 }).limit(5); 
    res.status(200).json(topPlans);
  } catch (err) {
    console.error("Error fetching top plans:", err.message);
    res.status(500).json({ message: "Failed to fetch top plans", error: err.message });
  }
};
