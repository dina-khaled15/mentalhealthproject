const Score = require("../models/pattern.model");

// وظيفة جلب أعلى النقطة
const getMaxScore = async (req, res) => {
  try {
    // الحصول على أعلى نقطة مرتبة من أعلى إلى أدنى
    const highestScore = await Score.findOne().sort({ score: -1 }).limit(1);
    // إرجاع النتيجة
    res.json({ score: highestScore ? highestScore.score : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching max score" });
  }
};

// وظيفة لحفظ أعلى نقطة
const saveScore = async (req, res) => {
  const { score, player } = req.body;
  try {
    // إنشاء نقطة جديدة
    const newScore = new Score({ score, player });
    // حفظ النقطة الجديدة في قاعدة البيانات
    await newScore.save();
    res.status(200).json({ message: "Score saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving score" });
  }
};

module.exports = { getMaxScore, saveScore };
