const Emotion = require('../models/Emotions.model');

// إنشاء عاطفة جديدة
exports.createEmotion = async (req, res) => {
  try {
    const emotionData = req.body;
    const newEmotion = new Emotion(emotionData);
    await newEmotion.save();

    res.status(201).json({ message: "Emotion created successfully", data: newEmotion });
  } catch (error) {
    res.status(500).json({ message: "Error creating emotion", error: error.message });
  }
};

// جلب جميع العواطف
exports.getAllEmotions = async (req, res) => {
  try {
    const emotions = await Emotion.find();
    res.status(200).json({ data: emotions });
  } catch (error) {
    res.status(500).json({ message: "Error fetching emotions", error: error.message });
  }
};

// جلب عاطفة حسب الـ ID
exports.getEmotionById = async (req, res) => {
  try {
    const { id } = req.params;
    const emotion = await Emotion.findById(id);
    
    if (!emotion) {
      return res.status(404).json({ message: "Emotion not found" });
    }

    res.status(200).json({ data: emotion });
  } catch (error) {
    res.status(500).json({ message: "Error fetching emotion", error: error.message });
  }
};

// تحديث عاطفة موجودة
exports.updateEmotion = async (req, res) => {
  try {
    const { id } = req.params;
    const emotionData = req.body;
    
    const updatedEmotion = await Emotion.findByIdAndUpdate(id, emotionData, { new: true });

    if (!updatedEmotion) {
      return res.status(404).json({ message: "Emotion not found" });
    }

    res.status(200).json({ message: "Emotion updated successfully", data: updatedEmotion });
  } catch (error) {
    res.status(500).json({ message: "Error updating emotion", error: error.message });
  }
};

// حذف عاطفة حسب الـ ID
exports.deleteEmotion = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmotion = await Emotion.findByIdAndDelete(id);

    if (!deletedEmotion) {
      return res.status(404).json({ message: "Emotion not found" });
    }

    res.status(200).json({ message: "Emotion deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting emotion", error: error.message });
  }
};
