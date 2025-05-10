// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI);
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// }


// module.exports = connectDB;



const mongoose = require('mongoose');

const connectDB = async () => {
    try {
<<<<<<< HEAD
        const conn = await mongoose.connect(process.env.Connection, {
=======
        const conn = await mongoose.connect(process.env.connection, {
>>>>>>> ecb0efb2c3774c9ed7715f58a9916dcd1bed59dc
            connectTimeoutMS: 60000,
            serverSelectionTimeoutMS: 60000
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;








