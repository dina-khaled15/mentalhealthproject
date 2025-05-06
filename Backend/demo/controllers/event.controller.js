const Event = require('../models/event.model');

// Get all events
module.exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error.message);
    res.status(500).json({ message: 'Failed to fetch events', error: error.message });
  }
};

// Create a new event
module.exports.createEvent = async (req, res) => {
  try {
    const { title, start, end, allDay } = req.body;
    if (!title || !start) {
      return res.status(400).json({ message: 'Title and start date are required' });
    }
    const event = await Event.create({ title, start, end, allDay });
    res.status(201).json({ message: 'Event added successfully', event });
  } catch (error) {
    console.error('Error creating event:', error.message);
    res.status(400).json({ message: 'Failed to add event', error: error.message });
  }
};

// Delete an event
module.exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error.message);
    res.status(400).json({ message: 'Failed to delete event', error: error.message });
  }
};