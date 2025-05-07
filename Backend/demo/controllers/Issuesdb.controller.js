const IssuesModel = require('../models/Issues.model');

exports.createIssues = async (req, res) => {
  try {
    const issue = new IssuesModel(req.body);
    await issue.save();
    res.status(201).json(issue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllIssues = async (req, res) => {
  try {
    const issues = await IssuesModel.find();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getIssuesById = async (req, res) => {
  try {
    const issue = await IssuesModel.findById(req.params.id);
    if (!issue) return res.status(404).json({ error: 'Issue not found' });
    res.json(issue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteIssues = async (req, res) => {
  try {
    const result = await IssuesModel.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Issue not found" });
    res.json({ message: "Issue deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
