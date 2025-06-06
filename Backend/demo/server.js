const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();

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

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/video', express.static(path.join(__dirname, 'public/video')));


const userRouter = require('./routers/userfeedback.routes');
const userIssuesRouter = require('./routers/userIssues.routes');
const pharmacyRoutes = require('./routers/pharmacy.route');
const medicationRequestRoutes = require('./routers/medicationRequest.route');
const userEmotionsRouter = require('./routers/userEmotions.routes');
const userBookingRouter = require('./routers/userBooking.routes');
const doctorRouter = require('./routers/doctor.route');
const eventRouter = require('./routers/event.routes');
const gameRouter = require('./routers/game.route');
const cardImageRoutes = require("./routers/cardImages.routes");
const patternRouter = require('./routers/pattern.route');
const locationRouter = require('./routers/location.routes');
const milestoneRouter = require('./routers/milestone.routes');
const planRouter = require('./routers/plan.routes');
const authRouter = require('./routers/auth.route');
const scheduleRoutes = require('./routers/Schedule.routes');
const faqRouter = require('./routers/faq.routes');
const valueRouter = require('./routers/value.routes');
const cardRouter = require('./routers/card.routes');
const inquiriesRoute = require("./routers/inquiries.route");
const storyVideoRoutes = require("./routers/storyVideo.routes");
const charRouters = require('./routers/chartRoutes');

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
app.use('/Emotions', userEmotionsRouter);
app.use('/Booking', userBookingRouter);
app.use('/doctor', doctorRouter);
app.use('/game', gameRouter);
app.use("/api/card-images", cardImageRoutes);
app.use('/pattern', patternRouter);
app.use('/locations', locationRouter);
app.use('/events', eventRouter);
app.use('/api/auth', authRouter);
app.use('/schedule', scheduleRoutes);
app.use('/api/milestones', milestoneRouter);
app.use('/api/plan', planRouter);
app.use('/api/faq', faqRouter);
app.use('/api/value', valueRouter);
app.use('/api/cards', cardRouter);
app.use('/pharmacies', pharmacyRoutes);
app.use('/medication-requests', medicationRequestRoutes);
app.use("/api/inquiries", inquiriesRoute);
app.use("/api/videos", storyVideoRoutes);
app.use("/api/chart", charRouters);

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

process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = server;
