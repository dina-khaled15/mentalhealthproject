const StoryVideo = require("../models/StoryVideo");

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await StoryVideo.find({});
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get video by ID
const getVideoById = async (req, res) => {
  try {
    const video = await StoryVideo.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const postVid = async (req, res) => {
  try {
    const { title, image, description1, description2, videoUrl } = req.body;
    if (!title || !image || !description1 || !videoUrl) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }
    const newVideo = new StoryVideo({
      title,
      image,
      description1,
      description2,
      videoUrl
    });
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllVideos,
  getVideoById,
  postVid,
};
