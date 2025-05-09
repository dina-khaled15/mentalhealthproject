const Game = require("../models/game.model");

exports.getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createGame = async (req, res) => {
  const { title, image, link } = req.body;
  const game = new Game({ title, image, link });

  try {
    const savedGame = await game.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
