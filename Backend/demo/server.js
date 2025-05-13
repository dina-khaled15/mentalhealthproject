const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
async function connectDB() {
  try {
    await mongoose.connect(process.env.Connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
}

connectDB();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],

}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Import routers - loading all routes properly
const userRouter = require('./routers/userfeedback.routes');
const userIssuesRouter = require('./routers/userIssues.routes');
const userPharmacyRouter = require('./routers/userPharmacy.routes');
const userEmotionsRouter = require('./routers/userEmotions.routes');
const userBookingRouter = require('./routers/userBooking.routes');
const doctorRouter = require('./routers/doctor.route');
const eventRouter = require('./routers/event.routes');
const gameRouter = require('./routers/game.route');
const patternRouter = require('./routers/pattern.route');
const authRouter = require('./routers/auth.route');
const scheduleRouter = require('./routers/schedule.routes');


// Try to load these routers but don't crash if they don't exist
let stagesRouter, uploadRouter;
try {
  stagesRouter = require('./routers/stages.routes');
} catch (error) {
  console.warn('Stages router not found');
}

try {
  uploadRouter = require('./routers/upload.routes');
} catch (error) {
  console.warn('Upload router not found');
}
app.use('/feedback', userRouter);
app.use('/Issues', userIssuesRouter);
app.use('/Pharmacy', userPharmacyRouter);
app.use('/Emotions', userEmotionsRouter);
app.use('/Booking', userBookingRouter);
app.use('/doctor', doctorRouter);
app.use('/game', gameRouter);
app.use('/pattern', patternRouter);
app.use('/events', eventRouter);
app.use('/api/auth', authRouter);
app.use('/api/schedules', scheduleRouter);

if (stagesRouter) {
  app.use('/api/stages', stagesRouter);
}
if (uploadRouter) {
  app.use('/api/upload', uploadRouter);
}
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}
const errorHandler = require('./middlewares/errorHandler.middleware');
app.use(errorHandler);
const PORT = process.env.PORT || 4000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
    credentials: true
  }
});
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = server;