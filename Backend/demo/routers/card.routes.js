const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card.controller');

// Routes for cards CRUD operations
router.get('/', cardController.getAllCards);
router.get('/:id', cardController.getCardById);
router.post('/', cardController.createCard);
router.put('/:id', cardController.updateCard);
router.delete('/:id', cardController.deleteCard);

module.exports = router;
