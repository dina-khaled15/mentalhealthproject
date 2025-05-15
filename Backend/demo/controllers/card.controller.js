const Card = require('../models/card.model');

// Get all cards
module.exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cards', error: error.message });
  }
};

// Get a single card by ID
module.exports.getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching card', error: error.message });
  }
};

// Create a new card
module.exports.createCard = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newCard = await Card.create({ name, description, image });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: 'Error creating card', error: error.message });
  }
};

// Update an existing card
module.exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const updatedCard = await Card.findByIdAndUpdate(
      id,
      { name, description, image },
      { new: true }
    );
    if (!updatedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(400).json({ message: 'Error updating card', error: error.message });
  }
};

// Delete a card
module.exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json({ message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting card', error: error.message });
  }
};
