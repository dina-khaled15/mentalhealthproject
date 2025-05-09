const Game = require('../models/game.model');

module.exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.send(games);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.createGame = async (req, res) => {
    try {
        const game = await Game.create(req.body);
        res.status(201).send(game);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send(error);
    }
}

module.exports.updateGame = async (req, res) => {
    try {
        const id = req.params.id;
        const game = await Game.findByIdAndUpdate(id, req.body, { new: true });
        res.send(game);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.deleteGame = async (req, res) => {
    try {
        const id = req.params.id;
        await Game.findByIdAndDelete(id);
        res.send("Game deleted");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.searchGame = async (req, res) => {
    try {
        const { score, moves } = req.query;
        const games = await Game.find({ score, moves });
        res.send(games);
    } catch (error) {
        res.status(500).send(error);
    }
}
