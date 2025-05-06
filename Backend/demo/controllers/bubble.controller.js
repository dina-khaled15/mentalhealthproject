const Score = require("../models/bubble.model");

exports.saveScore = async (req, res) => {
  try {
    const { score, player } = req.body;
    const newScore = new Score({ score, player });
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ message: "Error saving score", error });
  }
};

exports.getMaxScore = async (req, res) => {
  try {
    const maxScore = await Score.findOne().sort({ score: -1 });
    res.status(200).json(maxScore);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving score", error });
  }
};
