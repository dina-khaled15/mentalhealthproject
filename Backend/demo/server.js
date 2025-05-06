const express = require('express');
const app = express();
require('dotenv').config();
const userRouter = require('./routers/userfeedback.routes');
const userIssuesRouter = require('./routers/userIssues.routes');
const userPharmacyRouter = require('./routers/userPharmacy.routes');
const userEmotionsroutes = require('./routers/userEmotions.routes');
const userBookingroutes= require('./routers/userBooking.routes');
const errorHandler = require('./middlewares/errorHandler.middleware');
const loggingMiddleware = require('./middlewares/loganthing.middleware');
const connectDB = require('./config/db');

connectDB();
app.use(express.json());


// app.use(loggingMiddleware);

app.use('/feedback', userRouter);
app.use('/Issues', userIssuesRouter);
app.use('/Pharmacy', userPharmacyRouter);
app.use('/Emotions', userEmotionsroutes);
app.use('/Booking', userBookingroutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);

}); 