const CardImage = require("../models/cardImages.model");

// Get all images
module.exports.getAllCardImages = async (req, res) => {
  try {
    const images = await CardImage.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching images." });
  }
};

// Add new image
module.exports.addCardImage = async (req, res) => {
  const { imageUrl, name } = req.body;

  if (!imageUrl || typeof imageUrl !== "string" || !name || typeof name !== "string") {
    return res.status(400).json({ message: "Invalid image data." });
  }

  try {
    const newImage = new CardImage({ imageUrl, name });
    await newImage.save();
    res.status(201).json({ message: "Image added successfully.", image: newImage });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while adding the image." });
  }
};
