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
const User = require('../models/Userauth.model');

// Authentication routes
router.post('/register', register);
router.post('/login', login);
router.post('/google', googleLogin);
router.post('/microsoft', microsoftLogin);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

router.get('/me', protect, getMe);
router.get('/logout', protect, logout);
router.put('/updatedetails', protect, updateProfile);
router.put('/updatepassword', protect, updatePassword);

// Bubble Game score routes
router.post("/save", protect, async (req, res) => {
    const { username, score } = req.body;
    
    if (!username || score === undefined) {
        return res.status(400).json({ success: false, message: "Username and score are required" });
    }
    
    try {
        // Make user lookup more robust by using the authenticated user's ID
        // instead of just the username from the request body
        const authUser = await User.findById(req.user.id);
        
        if (!authUser) {
            return res.status(404).json({
                success: false,
                message: "Authenticated user not found"
            });
        }
        
        // Only allow updating scores for the authenticated user
        // This prevents one user from updating another user's score
        if (authUser.userName.toLowerCase() !== username.toLowerCase()) {
            console.warn(`Username mismatch: Auth user=${authUser.userName}, Request user=${username}`);
            return res.status(403).json({
                success: false,
                message: "You can only update your own score"
            });
        }
        
        // Update maxScore if new score is higher
        if (score > authUser.maxScore) {
            authUser.maxScore = score;
            await authUser.save();
            console.log(`Updated Bubble game score for ${authUser.userName} to ${score}`);
        }
        
        res.status(200).json({
            success: true,
            message: "Score updated",
            maxScore: authUser.maxScore
        });
    } catch (error) {
        console.error("Error saving Bubble game score:", error);
        res.status(500).json({
            success: false,
            message: "Error saving score",
            error: error.message
        });
    }
});

router.get("/max/:username", protect, async (req, res) => {
    if (!req.params.username) {
        return res.status(400).json({ 
            success: false, 
            message: "Username is required" 
        });
    }
    
    try {
        // Make user lookup more robust - first verify that the requesting user ID matches
        const authUser = await User.findById(req.user.id);
        
        if (!authUser) {
            return res.status(404).json({
                success: false,
                message: "Authenticated user not found"
            });
        }
        
        // The endpoint should only be used to retrieve the score for the authenticated user
        // Allow case-insensitive matching on the username for flexibility
        if (authUser.userName.toLowerCase() !== req.params.username.toLowerCase()) {
            console.warn(`Username mismatch in max score request: Auth user=${authUser.userName}, Request user=${req.params.username}`);
            
            // Continue with the original query, but log the mismatch for debugging
        }
        
        // Search for user with case-insensitive username match
        const user = await User.findOne({ 
            userName: { $regex: new RegExp(`^${req.params.username}$`, "i") } 
        });
        
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found" 
            });
        }
        
        res.status(200).json({ 
            success: true, 
            score: user.maxScore || 0,
            userName: user.userName // Always return the actual userName to help debugging
        });
    } catch (error) {
        console.error("Error fetching Bubble game score:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error fetching score", 
            error: error.message 
        });
    }
});

// Pattern Game score routes
router.post("/pattern/save", protect, async (req, res) => {
    const { username, score } = req.body;
    
    if (!username || score === undefined) {
        return res.status(400).json({ 
            success: false, 
            message: "Username and score are required" 
        });
    }
    
    try {
        // Make user lookup more robust by using the authenticated user's ID
        const authUser = await User.findById(req.user.id);
        
        if (!authUser) {
            return res.status(404).json({
                success: false,
                message: "Authenticated user not found"
            });
        }
        
        // Only allow updating scores for the authenticated user
        if (authUser.userName.toLowerCase() !== username.toLowerCase()) {
            console.warn(`Username mismatch: Auth user=${authUser.userName}, Request user=${username}`);
            return res.status(403).json({
                success: false,
                message: "You can only update your own score"
            });
        }
        
        // Update patternMaxScore if new score is higher
        if (score > (authUser.patternMaxScore || 0)) {
            authUser.patternMaxScore = score;
            await authUser.save();
            console.log(`Updated Pattern game score for ${authUser.userName} to ${score}`);
        }
        
        res.status(200).json({ 
            success: true, 
            message: "Pattern score updated", 
            maxScore: authUser.patternMaxScore 
        });
    } catch (error) {
        console.error("Error saving Pattern game score:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error saving pattern score", 
            error: error.message 
        });
    }
});

router.get("/pattern/max/:username", protect, async (req, res) => {
    if (!req.params.username) {
        return res.status(400).json({ 
            success: false, 
            message: "Username is required" 
        });
    }
    
    try {
        // Make user lookup more robust - first verify that the requesting user exists
        const authUser = await User.findById(req.user.id);
        
        if (!authUser) {
            return res.status(404).json({
                success: false,
                message: "Authenticated user not found"
            });
        }
        
        // The endpoint should only be used to retrieve the score for the authenticated user
        if (authUser.userName.toLowerCase() !== req.params.username.toLowerCase()) {
            console.warn(`Username mismatch in pattern max score request: Auth user=${authUser.userName}, Request user=${req.params.username}`);
            
            // Continue with the original query, but log the mismatch for debugging
        }
        
        // Search for user with case-insensitive username match
        const user = await User.findOne({ 
            userName: { $regex: new RegExp(`^${req.params.username}$`, "i") } 
        });
        
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: "User not found" 
            });
        }
        
        res.status(200).json({ 
            success: true, 
            score: user.patternMaxScore || 0,
            userName: user.userName // Always return the actual userName to help debugging
        });
    } catch (error) {
        console.error("Error fetching Pattern game score:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error fetching pattern score", 
            error: error.message 
        });
    }
});

module.exports = router;