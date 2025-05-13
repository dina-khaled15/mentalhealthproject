const Milestone = require('../models/milestonetable.model');

module.exports.getAllMilestones = async (req, res) => {
  try {
    const milestones = await Milestone.find();
    res.status(200).json(milestones);
  } catch (error) {
    console.error('Error fetching milestones:', error.message);
    res.status(500).json({ message: 'Failed to fetch milestones', error: error.message });
  }
};

module.exports.createMilestone = async (req, res) => {
  try {
    const requiredFields = ['year', 'text'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `Missing required field: ${field}` });
      }
    }

    const milestone = await Milestone.create(req.body);
    res.status(201).json({ message: 'Milestone added successfully', milestone });
  } catch (error) {
    console.error('Error creating milestone:', error.message);
    res.status(400).json({ message: 'Failed to add milestone', error: error.message });
  }
};

module.exports.updateMilestone = async (req, res) => {
  try {
    const id = req.params.id;
    const milestone = await Milestone.findByIdAndUpdate(id, req.body, { new: true });
    if (!milestone) {
      return res.status(404).json({ message: 'Milestone not found' });
    }
    res.status(200).json({ message: 'Milestone updated successfully', milestone });
  } catch (error) {
    console.error('Error updating milestone:', error.message);
    res.status(400).json({ message: 'Failed to update milestone', error: error.message });
  }
};

module.exports.deleteMilestone = async (req, res) => {
  try {
    const id = req.params.id;
    const milestone = await Milestone.findByIdAndDelete(id);
    if (!milestone) {
      return res.status(404).json({ message: 'Milestone not found' });
    }
    res.status(200).json({ message: 'Milestone deleted successfully' });
  } catch (error) {
    console.error('Error deleting milestone:', error.message);
    res.status(400).json({ message: 'Failed to delete milestone', error: error.message });
  }
};

module.exports.searchMilestones = async (req, res) => {
  try {
    const { year, text } = req.query;
    const query = {};

    if (year) query.year = { $regex: year, $options: 'i' };
    if (text) query.text = { $regex: text, $options: 'i' };

    const milestones = await Milestone.find(query);
    res.status(200).json(milestones);
  } catch (error) {
    console.error('Error searching milestones:', error.message);
    res.status(500).json({ message: 'Failed to search milestones', error: error.message });
  }
};

module.exports.getLatestMilestones = async (req, res) => {
  try {
    const latestMilestones = await Milestone.find().sort({ year: -1 }).limit(5);
    res.status(200).json(latestMilestones);
  } catch (error) {
    console.error('Error fetching latest milestones:', error.message);
    res.status(500).json({ message: 'Failed to fetch latest milestones', error: error.message });
  }
};
