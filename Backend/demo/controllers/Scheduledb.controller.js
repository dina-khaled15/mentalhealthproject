const Schedule = require('../models/Schedule.model');

module.exports.getAllSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.send(schedules);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.status(201).send(schedule);
  } catch (error) {
    console.log("Error:", error);
    res.status(400).send(error);
  }
};

module.exports.updateSchedule = async (req, res) => {
  try {
    const id = req.params.id;
    const schedule = await Schedule.findByIdAndUpdate(id, req.body, { new: true });
    if (!schedule) {
      return res.status(404).send("Schedule not found");
    }
    res.send(schedule);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.deleteSchedule = async (req, res) => {
  try {
    const id = req.params.id;
    const schedule = await Schedule.findByIdAndDelete(id);
    if (!schedule) {
      return res.status(404).send("Schedule not found");
    }
    res.send("Schedule deleted");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.searchSchedule = async (req, res) => {
  try {
    const { day } = req.query; // البحث بناءً على اليوم
    const schedules = await Schedule.find({ day });
    res.send(schedules);
  } catch (error) {
    res.status(400).send(error);
  }
};