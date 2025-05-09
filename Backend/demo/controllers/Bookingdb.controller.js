const ServiceBooking = require('../models/Booking.model');

// Get all bookings
module.exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await ServiceBooking.find();
    console.log('Fetched bookings from database:', bookings); // Debug: Log all fetched bookings
    if (bookings.length === 0) {
      console.log('No bookings found in database'); // Debug: Log if collection is empty
    }
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error); // Debug: Log fetch error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create a new booking
module.exports.createBooking = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, doctor, service, session } = req.body;

    // Validate required fields
    const errors = [];
    if (!fullName) errors.push('Full name is required');
    if (!email) errors.push('Email is required');
    if (!phoneNumber) errors.push('Phone number is required');
    if (!doctor) errors.push('Doctor is required');
    if (!service) errors.push('Service is required');
    if (!session) errors.push('Session is required');
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.push('Invalid email format');

    if (errors.length > 0) {
      console.log('Validation errors:', errors); // Debug: Log validation errors
      return res.status(400).json({ message: 'Validation errors', errors });
    }

    const booking = new ServiceBooking({
      fullName,
      email,
      phoneNumber,
      doctor,
      service,
      session
    });

    const savedBooking = await booking.save();
    console.log('Booking saved to database:', savedBooking); // Debug: Confirm save

    res.status(201).json({ message: 'Booking created successfully', booking: savedBooking });
  } catch (error) {
    console.error('Error saving booking:', error); // Debug: Log save error
    res.status(500).json({ message: 'Failed to save booking to database', error: error.message });
  }
};

// Update a booking
module.exports.updateBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await ServiceBooking.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!booking) {
      console.log('Booking not found for ID:', id); // Debug: Log not found
      return res.status(404).json({ message: 'Booking not found' });
    }
    console.log('Updated booking:', booking); // Debug: Log updated booking
    res.status(200).json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a booking
module.exports.deleteBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const booking = await ServiceBooking.findByIdAndDelete(id);
    if (!booking) {
      console.log('Booking not found for ID:', id); // Debug: Log not found
      return res.status(404).json({ message: 'Booking not found' });
    }
    console.log('Deleted booking:', booking); // Debug: Log deleted booking
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Search bookings
module.exports.searchBooking = async (req, res) => {
  try {
    const { fullName, email, doctor, service, session } = req.query;
    const query = {};
    if (fullName) query.fullName = new RegExp(fullName, 'i');
    if (email) query.email = new RegExp(email, 'i');
    if (doctor) query.doctor = doctor;
    if (service) query.service = service;
    if (session) query.session = session;

    const bookings = await ServiceBooking.find(query);
    console.log('Search results:', bookings); // Debug: Log search results
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error searching bookings:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};