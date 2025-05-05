// routes/gameRoutes.js
const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game.controller");

// GET all games
router.get("/", gameController.getGames);

// POST create new game (اختياري)
router.post("/", gameController.createGame);

module.exports = router;
