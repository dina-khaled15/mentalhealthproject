const Location = require("../models/location.model");

// الحصول على كل المواقع
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve locations", error: error.message });
  }
};

// إضافة موقع جديد
exports.createLocation = async (req, res) => {
  try {
    const newLocation = new Location(req.body);
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: "Failed to create location", error: error.message });
  }
};

// تحديث موقع معين
exports.updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLocation = await Location.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.status(200).json({ message: "Location updated successfully", location: updatedLocation });
  } catch (error) {
    res.status(500).json({ message: "Failed to update location", error: error.message });
  }
};

// حذف موقع معين
exports.deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByIdAndDelete(id);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.status(200).json({ message: "Location deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete location", error: error.message });
  }
};

// البحث عن مواقع بناءً على المعايير (مثل الاسم أو المدينة)
exports.searchLocations = async (req, res) => {
  try {
    const { name, city } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: "i" };
    if (city) query.city = { $regex: city, $options: "i" };

    const locations = await Location.find(query);
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: "Failed to search locations", error: error.message });
  }
};

// الحصول على أفضل المواقع (مثلًا حسب التقييم أو معايير أخرى)
exports.getTopLocations = async (req, res) => {
  try {
    const topLocations = await Location.find().sort({ rating: -1 }).limit(5); // تعديل الترتيب حسب الحاجة
    res.status(200).json(topLocations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch top locations", error: error.message });
  }
};
