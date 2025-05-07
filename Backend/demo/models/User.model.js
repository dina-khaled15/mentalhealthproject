const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    avatar: { type: String },
    userName: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    postalCode: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
