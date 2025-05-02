const scheduleData = [
    {
        day: 'Monday',
        date: 'October 2, 2024',
        time: '9:00 AM - 12:00 PM',
        status: 'Available',
        booked: 60,
        disabled: false,
    },
    {
        day: 'Tuesday',
        date: 'October 3, 2024',
        time: '1:00 PM - 4:00 PM',
        status: 'Available',
        booked: 30,
        disabled: false,
    },
    {
        day: 'Wednesday',
        date: 'October 4, 2024',
        time: '10:00 AM - 1:00 PM',
        status: 'Unavailable',
        booked: 100,
        disabled: true,
    },
    {
        day: 'Thursday',
        date: 'October 5, 2024',
        time: '2:00 PM - 5:00 PM',
        status: 'Available',
        booked: 0,
        disabled: false,
    },
];

export default scheduleData;
