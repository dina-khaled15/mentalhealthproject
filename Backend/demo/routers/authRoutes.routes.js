const express = require('express');
const router = express.Router();
const {
    register,
    login,
    getMe,
    logout,
    googleLogin,
    microsoftLogin
} = require('../controllers/authController.controller');
const { protect } = require('../middlewares/authMiddleware.middleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', protect, logout);
router.post('/google', googleLogin);
router.post('/microsoft', microsoftLogin);

module.exports = router;