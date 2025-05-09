const express = require('express');
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
const eventRouter = require('./routers/event.routes'); 
const game = require('./routers/game.route');
const bubble = require('./routers/bubble.route');
const pattern = require('./routers/pattern.route');
const errorHandler = require('./middlewares/errorHandler.middleware');
const loggingMiddleware = require('./middlewares/loganthing.middleware');
const cardGameRouter = require('./routers/game.route');

const connectDB = require('./config/db');

connectDB();


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.use(loggingMiddleware);


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
app.use('/cardgame', cardGameRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});