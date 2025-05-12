// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');

// const UserAuthSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//     trim: true
//   },
//   userName: {
//     type: String,
//     required: [true, 'Username is required'],
//     unique: true,
//     trim: true
//   },
//   fullName: {
//     type: String,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     trim: true,
//     lowercase: true,
//     match: [
//       /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
//       'Please provide a valid email'
//     ]
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: [6, 'Password must be at least 6 characters'],
//     select: false
//   },
//   phone: {
//     type: String,
//     default: '1234567890'
//   },
//   location: {
//     type: String,
//     default: 'Not specified'
//   },
//   postalCode: {
//     type: String,
//     default: 'Not specified'
//   },
//   role: {
//     type: String,
//     enum: ['user', 'doctor', 'admin'],
//     default: 'user'
//   },
//   avatar: {
//     type: String,
//     default: ''
//   },
//   googleId: {
//     type: String
//   },
//   microsoftId: {
//     type: String
//   },
//   isSocialLogin: {
//     type: Boolean,
//     default: false
//   },
//   resetPasswordToken: String,
//   resetPasswordExpire: Date,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   lastActive: {
//     type: Date,
//     default: Date.now
//   },
//   maxScore: {
//     type: Number,
//     default: 0
//   }
// });


// // Sign JWT and return
// UserAuthSchema.methods.getSignedJwtToken = function() {
//   return jwt.sign(
//     { id: this._id, role: this.role },
//     process.env.JWT_SECRET,
//     { expiresIn: process.env.JWT_EXPIRE || '30d' }
//   );
// };

// // Match user entered password to hashed password in database
// UserAuthSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Generate and hash password token
// UserAuthSchema.methods.getResetPasswordToken = function() {
//   // Generate token
//   const resetToken = crypto.randomBytes(20).toString('hex');

//   // Hash token and set to resetPasswordToken field
//   this.resetPasswordToken = crypto
//     .createHash('sha256')
//     .update(resetToken)
//     .digest('hex');

//   // Set expire
//   this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes

//   return resetToken;
// };

// // Encrypt password using bcrypt
// UserAuthSchema.pre('save', async function(next) {
//   // Only run this if password was modified
//   if (!this.isModified('password')) {
//     return next();
//   }
  
//   // Generate salt and hash password
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
// module.exports = mongoose.model('UserAuth', UserAuthSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserAuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  userName: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true
  },
  fullName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      'Please provide a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  phone: {
    type: String,
    default: '1234567890'
  },
  location: {
    type: String,
    default: 'Not specified'
  },
  postalCode: {
    type: String,
    default: 'Not specified'
  },
  role: {
    type: String,
    enum: ['user', 'doctor', 'admin'],
    default: 'user'
  },
  avatar: {
    type: String,
    default: ''
  },
  googleId: {
    type: String
  },
  microsoftId: {
    type: String
  },
  isSocialLogin: {
    type: Boolean,
    default: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastActive: {
    type: Date,
    default: Date.now
  },
  maxScore: {
    type: Number,
    default: 0
  },
  patternMaxScore: {  // New field for Pattern game max score
    type: Number,
    default: 0
  }
});

// Sign JWT and return
UserAuthSchema.methods.getSignedJwtToken = function() {
  return jwt.sign(
    { id: this._id, role: this.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );
};

// Match user entered password to hashed password in database
UserAuthSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserAuthSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
  return resetToken;
};

// Encrypt password using bcrypt
UserAuthSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('UserAuth', UserAuthSchema);