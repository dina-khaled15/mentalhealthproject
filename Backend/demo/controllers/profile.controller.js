const Profile = require('../models/Profile');

module.exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.id });
        if (!profile) {
            return res.status(404).send('Profile not found');
        }
        res.send(profile);
    } catch (error) {
        res.send(error);
    }
};

module.exports.createOrUpdateProfile = async (req, res) => {
    try {
        const { userName, fullName, email, phone, location, postalCode, age } = req.body;
        const avatar = req.file ? `/uploads/${req.file.filename}` : undefined;

        const profileData = {
            userId: req.user.id,
            userName,
            fullName,
            email,
            phone,
            location,
            postalCode,
            age: age ? Number(age) : undefined,
            ...(avatar && { avatar }),
        };

        let profile = await Profile.findOneAndUpdate(
            { userId: req.user.id },
            { $set: profileData },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        res.send(profile);
    } catch (error) {
        console.log("Error:", error);
        res.send(error);
    }
};

module.exports.deleteProfile = async (req, res) => {
    try {
        const profile = await Profile.findOneAndDelete({ userId: req.user.id });
        if (!profile) {
            return res.status(404).send('Profile not found');
        }
        res.send('Profile deleted');
    } catch (error) {
        res.send(error);
    }
};

module.exports.searchProfile = async (req, res) => {
    try {
        const { userName, age } = req.query;
        const query = {};
        if (userName) query.userName = userName;
        if (age) query.age = Number(age);

        const profiles = await Profile.find(query);
        res.send(profiles);
    } catch (error) {
        res.send(error);
    }
};