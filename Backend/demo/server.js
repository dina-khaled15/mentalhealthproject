const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

const userRouter = require('./routers/userfeedback.routes');
const doctor = require('./routers/doctor.route');
const game = require('./routers/game.route');
const bubble = require('./routers/bubble.route');
const pattern = require('./routers/pattern.route');
const errorHandler = require('./middlewares/errorHandler.middleware');
const loggingMiddleware = require('./middlewares/loganthing.middleware');
const connectDB = require('./config/db');

connectDB();
app.use(express.json());

// ✅ إعلان مجلد الصور public/images كمجلد static
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// app.use(loggingMiddleware);

app.use('/feedback', userRouter);
app.use('/doctor', doctor);
app.use('/game', game);
app.use('/bubble', bubble); 
app.use('/pattern', pattern); 
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
