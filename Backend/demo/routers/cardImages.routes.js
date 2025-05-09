const express = require('express');
const router = express.Router();
const { getAllGames, createGame, updateGame, deleteGame, searchGame } = require('../controllers/game.controller');

// جلب جميع الألعاب
router.get('/', getAllGames);

// إنشاء لعبة جديدة
router.post('/', createGame);

// تحديث لعبة
router.put('/:id', updateGame);

// حذف لعبة
router.delete('/:id', deleteGame);

// البحث عن الألعاب
router.get('/search', searchGame);

module.exports = router;
