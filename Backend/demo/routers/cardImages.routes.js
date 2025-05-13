const express = require('express');
const router = express.Router();
const { getAllGames, createGame, updateGame, deleteGame, searchGame } = require('../controllers/game.controller');

router.get('/', getAllGames);

router.post('/', createGame);


router.put('/:id', updateGame);

router.delete('/:id', deleteGame);

router.get('/search', searchGame);

module.exports = router;
