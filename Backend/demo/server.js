const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const stagesRouter = require('./routers/stages.routes');
const uploadRouter = require('./routers/upload.routes');
const userRouter = require('./routers/userfeedback.routes');
const userIssuesRouter = require('./routers/userIssues.routes');
const userPharmacyRouter = require('./routers/userPharmacy.routes');
const userEmotionsroutes = require('./routers/userEmotions.routes');
const userBookingroutes = require('./routers/userBooking.routes');
const doctor = require('./routers/doctor.route'); 
const doctortable = require('./routers/doctortable.routes');
const eventRouter = require('./routers/event.routes');
const game = require('./routers/game.route');
const bubble = require('./routers/bubble.route');
const pattern = require('./routers/pattern.route');
const goalRoutes = require('./routers/goalRoutes.route');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler.middleware');
const cloudinary = require('cloudinary').v2;
const imageRoutes = require('./routers/upload.routes');

// Connect to MongoDB
connectDB();
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));
app.use(cookieParser());
app.use(passport.initialize());

// Parse JSON bodies
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middlewares
app.use(express.json());

// Serve static files from public/images
app.use('/images', express.static(path.join(__dirname, '/images')));

// Routes
app.use('/stages', stagesRouter);
app.use('/api', uploadRouter);
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
app.use('/events', eventRouter);



const scheduleRoutes = require('./routers/schedule.routes');

app.use('/api/feedback', userRouter);

app.use('/api/schedules', scheduleRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/goals', goalRoutes);

app.use('/images', express.static(path.join(__dirname, '/images')));
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