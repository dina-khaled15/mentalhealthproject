

const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const userRouter = require('./routers/userfeedback.routes');
const userIssuesRouter = require('./routers/userIssues.routes');
const userPharmacyRouter = require('./routers/userPharmacy.routes');
const userEmotionsroutes = require('./routers/userEmotions.routes');
const userBookingroutes = require('./routers/userBooking.routes');
const doctor = require('./routers/doctor.route');
const doctortable = require('./routers/doctortable.routes');
const eventRouter = require('./routers/event.routes'); // إضافة route الـ events
const game = require('./routers/game.route');
const bubble = require('./routers/bubble.route');
const pattern = require('./routers/pattern.route');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler.middleware');
const cloudinary = require('cloudinary').v2;
const imageRoutes = require('./routers/image.routes');

// Connect to MongoDB
// Connect to MongoDB
connectDB();
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))
app.use(cookieParser());
app.use(passport.initialize());

// Enable CORS
// app.use(cors({
//     origin: 'http://localhost:5173', // Allow requests from your frontend
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// Parse JSON bodies

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middlewares
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));
app.use(express.json());

// Serve static files from public/images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Apply logging middleware
// app.use(loggingMiddleware);

// Routes
app.use('/feedback', userRouter);
app.use('/doctortable', doctortable);
app.use('/Issues', userIssuesRouter);
app.use('/Pharmacy', userPharmacyRouter);
app.use('/Emotions', userEmotionsroutes);
app.use('/Booking', userBookingroutes);
app.use('/doctor', doctor);
app.use('/game', game);
app.use('/bubble', bubble);
app.use('/pattern', pattern);
app.use('/events', eventRouter); // إضافة route الـ events

// Error handling middleware

mongoose.connection.on('connected', () => {
    if (mongoose.models) {
        mongoose.models = {};
    }
    if (mongoose.modelSchemas) {
        mongoose.modelSchemas = {};
    }
});

// Routes
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

