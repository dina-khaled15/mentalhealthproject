const User = require('../models/Userauth.model');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
    console.log('Register Request Body:', req.body);
    const { name, email, password, phone, location, postalCode } = req.body;

    // Validate input
    if (!name || !email || !password) {
        console.log('Missing fields:', { name, email, password });
        return next(new ErrorResponse('Please provide all required fields', 400));
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log('Email already in use:', email);
        return next(new ErrorResponse('Email already in use', 400));
    }

    try {
        // Create user with all required fields
        const userName = email.split('@')[0] + Math.floor(Math.random() * 1000); // Generate unique username
        
        const user = await User.create({
            name,
            email,
            password,
            userName,
            fullName: name,
            phone: phone || '1234567890',
            location: location || 'Not specified',
            postalCode: postalCode || 'Not specified'
        });
        
        console.log('User created with username:', user.userName);

        sendTokenResponse(user, 201, res);
    } catch (error) {
        console.error('Register Error:', error);
        return next(new ErrorResponse(`Registration failed: ${error.message}`, 500));
    }
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
    console.log('Login Request Body:', req.body);
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
        console.log('Missing email or password:', { email, password });
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        console.log('User not found:', email);
        return next(new ErrorResponse('Invalid email', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        console.log('Password mismatch for:', email);
        return next(new ErrorResponse('Invalid pass', 401));
    }

    sendTokenResponse(user, 200, res);
});

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: user
    });
});

// @desc    Update user profile
// @route   PUT /api/auth/updatedetails
// @access  Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
    const fieldsToUpdate = {
        name: req.body.name,
        fullName: req.body.fullName,
        email: req.body.email,
        userName: req.body.userName,
        phone: req.body.phone,
        location: req.body.location,
        postalCode: req.body.postalCode,
        avatar: req.body.avatar
    };

    // Remove undefined fields
    Object.keys(fieldsToUpdate).forEach(key => 
        fieldsToUpdate[key] === undefined && delete fieldsToUpdate[key]
    );

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: user
    });
});

// @desc    Update password
// @route   PUT /api/auth/updatepassword
// @access  Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    // Check current password
    if (!(await user.matchPassword(req.body.currentPassword))) {
        return next(new ErrorResponse('Password is incorrect', 401));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendTokenResponse(user, 200, res);
});

// @desc    Forgot password
// @route   POST /api/auth/forgotpassword
// @access  Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorResponse('There is no user with that email', 404));
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset url
    const resetUrl = `${req.protocol}://${req.get(
        'host'
    )}/api/auth/resetpassword/${resetToken}`;

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Password reset token',
            message
        });

        res.status(200).json({ success: true, data: 'Email sent' });
    } catch (err) {
        console.log(err);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorResponse('Email could not be sent', 500));
    }
});

exports.resetPassword = asyncHandler(async (req, res, next) => {
    // Get hashed token
    const resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.resettoken)
        .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorResponse('Invalid token', 400));
    }

    // Set new password
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res);
});

// @desc    Log user out / clear cookie
// @route   GET /api/auth/logout
// @access  Private
// Update the logout function in authController.controller.js

exports.logout = asyncHandler(async (req, res, next) => {
    // Clear the token cookie
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });

    // Send a response that instructs the frontend to clear localStorage
    res.status(200).json({
        success: true,
        message: 'Logged out successfully',
        clearLocalStorage: true  // Add this flag to indicate localStorage should be cleared
    });
});

// @desc    Login/Register with Google
// @route   POST /api/auth/google
// @access  Public
exports.googleLogin = asyncHandler(async (req, res, next) => {
    console.log('Google Login Request Body:', req.body);
    const { token } = req.body;

    // Validate input
    if (!token) {
        console.log('Missing token');
        return next(new ErrorResponse('Missing Google token', 400));
    }

    try {
        // Verify Google token
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const googleId = payload['sub'];
        const email = payload['email'];
        const name = payload['name'];
        const picture = payload['picture'];

        console.log('Google Token Payload:', { googleId, email, name });

        // Check if user exists
        let user = await User.findOne({ $or: [{ googleId }, { email }] });

        if (!user) {
            console.log('Creating new user');
            const userName = email.split('@')[0] + Math.floor(Math.random() * 1000);
            
            user = await User.create({
                name,
                email,
                googleId,
                password: googleId + process.env.JWT_SECRET,
                isSocialLogin: true,
                userName,
                fullName: name,
                phone: '1234567890',
                avatar: picture || '',
                age,
            });
            console.log('User created with username:', user.userName);
        } else if (!user.googleId) {
            console.log('Updating user with googleId');
            user.googleId = googleId;
            if (!user.avatar && picture) {
                user.avatar = picture;
            }
            await user.save();
            console.log('User updated:', user);
        }

        sendTokenResponse(user, 200, res);
    } catch (error) {
        console.error('Google Login Error:', error);
        return next(new ErrorResponse(`Google login failed: ${error.message}`, 500));
    }
});

// @desc    Login/Register with Microsoft
// @route   POST /api/auth/microsoft
// @access  Public
exports.microsoftLogin = asyncHandler(async (req, res, next) => {
    console.log('Microsoft Login Request Body:', req.body);
    const { microsoftId, email, name, picture } = req.body;

    if (!microsoftId || !email) {
        console.log('Missing fields:', { microsoftId, email });
        return next(new ErrorResponse('Missing required fields', 400));
    }

    try {
        let user = await User.findOne({ $or: [{ microsoftId }, { email }] });

        if (!user) {
            console.log('Creating new user');
            const userName = email.split('@')[0] + Math.floor(Math.random() * 1000);
            
            user = await User.create({
                name,
                email,
                microsoftId,
                password: microsoftId + process.env.JWT_SECRET,
                isSocialLogin: true,
                userName,
                fullName: name,
                phone: '1234567890',
                avatar: picture || '',
                age,
            });
            console.log('User created with username:', user.userName);
        } else if (!user.microsoftId) {
            console.log('Updating user with microsoftId');
            user.microsoftId = microsoftId;
            if (!user.avatar && picture) {
                user.avatar = picture;
            }
            await user.save();
            console.log('User updated:', user);
        }

        sendTokenResponse(user, 200, res);
    } catch (error) {
        console.error('Microsoft Login Error:', error);
        return next(new ErrorResponse(`Microsoft login failed: ${error.message}`, 500));
    }
});

// Helper method to generate token and send response
const sendTokenResponse = (user, statusCode, res) => {
    try {
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined');
            throw new Error('Server configuration error');
        }

        const token = user.getSignedJwtToken();

        const options = {
            expires: new Date(
                Date.now() + (process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000) || 30 * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        };

        res.status(statusCode)
            .cookie('token', token, options)
            .json({
                success: true,
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role || 'user',
                    userName: user.userName,
                    fullName: user.fullName,
                    phone: user.phone,
                    location: user.location,
                    postalCode: user.postalCode,
                    avatar: user.avatar,
                    age : user.age
                }
            });
    } catch (error) {
        console.error('Token generation error:', error);
        res.status(500).json({
            success: false,
            message: `Error generating token: ${error.message}`
        });
    }
};