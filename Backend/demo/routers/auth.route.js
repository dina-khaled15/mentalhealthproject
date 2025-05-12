 const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  logout,
  googleLogin,
  microsoftLogin,
  updateProfile,
  updatePassword,
  resetPassword,
  forgotPassword,
} = require('../controllers/authController.controller');
const { protect } = require('../middlewares/authMiddleware.middleware');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);
router.post('/microsoft', microsoftLogin);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

// Protected routes
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);
router.put('/updatedetails', protect, updateProfile);
router.put('/updatepassword', protect, updatePassword);

module.exports = router; 