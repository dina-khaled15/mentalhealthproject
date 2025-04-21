import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    LinearProgress,
    Chip,
} from '@mui/material';

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

const ScheduleSection = () => {
    return (
        <Box sx={{ bgcolor: '#222222', py: 6, px: 5 }}>
            <Box textAlign="center" mb={4}>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', mb: 2 }}>
                    Book Session
                </Button>
                <Typography variant="h4" fontWeight="bold" color="white">
                    Weekly Schedule Overview
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {scheduleData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                p: 2,
                                bgcolor: '#f8f8f8',
                                minHeight: 250,
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                    {item.day}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={1}>
                                    {item.date}
                                </Typography>
                                <Typography variant="body2" mb={1}>
                                    {item.time}
                                </Typography>

                                <Chip
                                    label={item.status}
                                    color={item.status === 'Available' ? 'success' : 'default'}
                                    size="small"
                                    sx={{ mb: 2 }}
                                />

                                <LinearProgress
                                    variant="determinate"
                                    value={item.booked}
                                    color={item.status === 'Available' ? 'success' : 'inherit'}
                                    sx={{ height: 6, borderRadius: 5, mb: 1 }}
                                />

                                <Typography variant="caption" display="block" gutterBottom>
                                    {item.booked}% Booked
                                </Typography>

                                <Button
                                    fullWidth
                                    variant="outlined"
                                    disabled={item.disabled}
                                    sx={{
                                        mt: 1,
                                        color: 'black',
                                        borderColor: 'black',
                                        '&:hover': {
                                            borderColor: 'black',
                                            backgroundColor: '#00000011',
                                        },
                                    }}
                                >
                                    Book a Consultation
                                </Button>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ScheduleSection;
