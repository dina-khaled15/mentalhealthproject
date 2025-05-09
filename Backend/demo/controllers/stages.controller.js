const Stage = require("../models/stages.model");

exports.getStageByName = async (req, res) => {
  try {
    const { stageName } = req.params;
    const stage = await Stage.findOne({ name: stageName });
    if (!stage) {
      return res.status(404).json({ message: "Stage not found" });
    }
    res.status(200).json(stage);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stage", error });
  }
};

exports.getAllStages = async (req, res) => {
  try {
    const stages = await Stage.find();
    res.status(200).json(stages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stages", error });
  }
};