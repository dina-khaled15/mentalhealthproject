

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler.middleware');
const cloudinary = require('cloudinary').v2;
const imageRoutes = require('./routers/image.routes');

// Connect to MongoDB
connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
// app.use(cors("*"))
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

mongoose.connection.on('connected', () => {
    if (mongoose.models) {
        mongoose.models = {};
    }
    if (mongoose.modelSchemas) {
        mongoose.modelSchemas = {};
    }
});

// Routes
const userRouter = require('./routers/userfeedback.routes');
const userInfoRouter = require('./routers/user.routes');
const authRoutes = require('./routers/authRoutes.routes');
const scheduleRoutes = require('./routers/schedule.routes');


app.use('/api/feedback', userRouter);
app.use('/api/users', userInfoRouter);
app.use('/api/auth', authRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/images', imageRoutes);

// Serve static files
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    });
} else {
    app.use(express.static(path.join(__dirname, 'public')));
}

// Error handling middleware
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});

