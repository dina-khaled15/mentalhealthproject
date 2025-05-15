const Schedule = require("../models/schedule.model");

const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSchedule = async (req, res) => {
    const { day, date, booked, available, slots } = req.body;
    const newSchedule = new Schedule({ day, date, booked, available, slots });

    try {
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateSchedule = async (req, res) => {
    const { id } = req.params;
    const { day, date, booked, available, slots } = req.body;

    try {
        const schedule = await Schedule.findById(id);
        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }

        schedule.day = day || schedule.day;
        schedule.date = date || schedule.date;
        schedule.booked = booked || schedule.booked;
        schedule.available = available || schedule.available;
        schedule.slots = slots || schedule.slots;

        await schedule.save();
        res.json(schedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getSchedules,
    createSchedule,
    updateSchedule
};

