const mongoose = require("mongoose");

const storyVideoSchema = new mongoose.Schema({
  title: String,
  image: String,
  description1: String,
  description2: String,
  videoUrl: String,
});

const StoryVideo = mongoose.model("StoryVideo", storyVideoSchema);

module.exports = StoryVideo;
