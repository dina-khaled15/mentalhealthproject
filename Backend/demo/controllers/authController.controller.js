


const User = require('../models/Userauth.model');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
    console.log('Register Request Body:', req.body);
    const { name, email, password } = req.body;

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
        const user = await User.create({
            name,
            email,
            password,
            userName: email.split('@')[0], // Generate userName from email
            fullName: name, // Use name as fullName
            phone: '1234567890' // Default phone number (change as needed)
        });
        console.log('User created:', user);

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
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        console.log('Password mismatch for:', email);
        return next(new ErrorResponse('Invalid credentials', 401));
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

// @desc    Log user out / clear cookie
// @route   GET /api/auth/logout
// @access  Private
exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: 'Logged out successfully'
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

        console.log('Google Token Payload:', { googleId, email, name });

        // Check if user exists
        let user = await User.findOne({ $or: [{ googleId }, { email }] });

        if (!user) {
            console.log('Creating new user');
            user = await User.create({
                name,
                email,
                googleId,
                password: googleId + process.env.JWT_SECRET,
                isSocialLogin: true,
                userName: email.split('@')[0],
                fullName: name,
                phone: '1234567890'
            });
            console.log('User created:', user);
        } else if (!user.googleId) {
            console.log('Updating user with googleId');
            user.googleId = googleId;
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
    const { microsoftId, email, name } = req.body;

    if (!microsoftId || !email) {
        console.log('Missing fields:', { microsoftId, email });
        return next(new ErrorResponse('Missing required fields', 400));
    }

    try {
        let user = await User.findOne({ $or: [{ microsoftId }, { email }] });

        if (!user) {
            console.log('Creating new user');
            user = await User.create({
                name,
                email,
                microsoftId,
                password: microsoftId + process.env.JWT_SECRET,
                isSocialLogin: true,
                userName: email.split('@')[0],
                fullName: name,
                phone: '1234567890'
            });
            console.log('User created:', user);
        } else if (!user.microsoftId) {
            console.log('Updating user with microsoftId');
            user.microsoftId = microsoftId;
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
                    role: user.role || 'user'
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