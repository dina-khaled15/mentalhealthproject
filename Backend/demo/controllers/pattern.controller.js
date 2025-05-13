const Score = require("../models/pattern.model");

const getMaxScore = async (req, res) => {
  try {
    const highestScore = await Score.findOne().sort({ score: -1 }).limit(1);
    res.json({ score: highestScore ? highestScore.score : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching max score" });
  }
};

const saveScore = async (req, res) => {
  const { score, player } = req.body;
  try {
    const newScore = new Score({ score, player });
    await newScore.save();
    res.status(200).json({ message: "Score saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving score" });
  }
};

module.exports = { getMaxScore, saveScore };
