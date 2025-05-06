const { getNextRegistrarId } = require('../utils/getNextRegistrarId'); 
const Doctor = require('../models/Doctor.model');


// Get all doctors
module.exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.send(doctors);
    } catch (error) {
        res.send(error);
    }
};

// Create a new doctor with auto registrarId
module.exports.createDoctor = async (req, res) => {
    try {
        // Get last registrarId and increment it
        const lastDoctor = await Doctor.findOne().sort({ registrarId: -1 });
        const registrarId = lastDoctor ? lastDoctor.registrarId + 1 : 1001;

        const doctor = await Doctor.create({ ...req.body, registrarId });
        res.send(doctor);
    } catch (error) {
        console.log("Error:", error);
        res.send(error);
    }
};

// Update doctor
module.exports.updateDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const doctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
        res.send(doctor);
    } catch (error) {
        res.send(error);
    }
};

// Delete doctor
module.exports.deleteDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        await Doctor.findByIdAndDelete(id);
        res.send("Doctor deleted");
    } catch (error) {
        res.send(error);
    }
};

// Search doctor by name and city
module.exports.searchDoctors = async (req, res) => {
    try {
        const { name, city } = req.query;
        const query = {};

        if (name) query.name = { $regex: name, $options: 'i' };
        if (city) query.city = { $regex: city, $options: 'i' };

        const doctors = await Doctor.find(query);
        res.send(doctors);
    } catch (error) {
        res.send(error);
    }
};

// Get Top 5 Doctors by Rating
module.exports.getTopDoctors = async (req, res) => {
    try {
        const topDoctors = await Doctor.find().sort({ rating: -1 }).limit(5);
        res.send(topDoctors);
    } catch (error) {
        res.send(error);
    }
};
