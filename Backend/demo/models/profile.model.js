const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // ربط مع موديل المستخدم
    required: true,
    unique: true,
  },
  avatar: {
    type: String, // رابط الصورة
    default: '',
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  postalCode: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
    min: 0, // العمر مش هيبقى سالب
    default: null, // اختياري
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Profile', profileSchema);