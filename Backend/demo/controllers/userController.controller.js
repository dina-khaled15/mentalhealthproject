const User = require('../models/User.model');

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedFields = req.body;
        if (req.file) {
            updatedFields.avatar = req.file.path; // Cloudinary gives a direct URL
        }

        const user = await User.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.createUser = async (req, res) => {
    try {
        console.log('Received Payload:', req.body);
        console.log('File Info:', req.file);

        const {
            userName,
            fullName,
            email,
            phone,
            location,
            postalCode
        } = req.body;

        const avatar = req.file ? req.file.path : '';
        console.log('Creating user with data:', {
            userName,
            fullName,
            email,
            phone,
            location,
            postalCode,
            avatar
        });

        const newUser = await User.create({
            userName,
            fullName,
            email,
            phone,
            location,
            postalCode,
            avatar
        });

        console.log('User created:', newUser);
        res.status(201).json(newUser);
    } catch (err) {
        console.error("Create User Error:", err);
        res.status(500).json({ error: err.message });
    }
    console.log('Received Payload:', req.body);
    console.log('File Info:', req.file);
};
