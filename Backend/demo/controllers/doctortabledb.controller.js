const Doctor = require('../models/doctortable.model');

// Get all doctors
module.exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error.message);
    res.status(500).json({ message: 'Failed to fetch doctors', error: error.message });
  }
};

module.exports.createDoctor = async (req, res) => {
  try {
  
    const requiredFields = ['name', 'age', 'phone', 'email', 'address', 'city', 'zipCode'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `Missing required field: ${field}` });
      }
    }

   
    if (req.body.registrarId) {
      console.warn('registrarId sent by client, ignoring...');
      delete req.body.registrarId;
    }


    let registrarId;
    let attempts = 0;
    while (attempts < 3) {
      const lastDoctor = await Doctor.findOne().sort({ registrarId: -1 });
      registrarId = lastDoctor ? lastDoctor.registrarId + 1 : 1001;
      try {
        const doctor = await Doctor.create({ ...req.body, registrarId });
        return res.status(201).json({ message: 'Doctor added successfully', doctor });
      } catch (error) {
        if (error.code === 11000) { // Duplicate key error
          attempts++;
          console.warn(`Duplicate registrarId (${registrarId}), retrying...`);
          continue;
        }
        throw error;
      }
    }
    return res.status(500).json({ message: 'Failed to generate unique registrarId after multiple attempts' });
  } catch (error) {
    console.error('Error creating doctor:', error.message);
    res.status(400).json({ message: 'Failed to add doctor', error: error.message });
  }
};


module.exports.updateDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json({ message: 'Doctor updated successfully', doctor });
  } catch (error) {
    console.error('Error updating doctor:', error.message);
    res.status(400).json({ message: 'Failed to update doctor', error: error.message });
  }
};


module.exports.deleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const doctor = await Doctor.findByIdAndDelete(id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error('Error deleting doctor:', error.message);
    res.status(400).json({ message: 'Failed to delete doctor', error: error.message });
  }
};


module.exports.searchDoctors = async (req, res) => {
  try {
    const { name, city } = req.query;
    const query = {};

    if (name) query.name = { $regex: name, $options: 'i' };
    if (city) query.city = { $regex: city, $options: 'i' };

    const doctors = await Doctor.find(query);
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error searching doctors:', error.message);
    res.status(500).json({ message: 'Failed to search doctors', error: error.message });
  }
};


module.exports.getTopDoctors = async (req, res) => {
  try {
    const topDoctors = await Doctor.find().sort({ rating: -1 }).limit(5);
    res.status(200).json(topDoctors);
  } catch (error) {
    console.error('Error fetching top doctors:', error.message);
    res.status(500).json({ message: 'Failed to fetch top doctors', error: error.message });
  }
};