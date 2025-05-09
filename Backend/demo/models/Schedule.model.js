const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    booked: {
        type: Number,
        required: true,
    },
    available: {
        type: Number,
        required: true,
    },
    slots: [{
        time: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'available',
        }
    }]
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;

