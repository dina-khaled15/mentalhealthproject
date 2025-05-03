import React from 'react';
import {
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    LinearProgress,
    Chip,
    Box,
} from '@mui/material';
import scheduleData from '../mockScheduleData';
import styles from './Schedule.module.css';

const ScheduleSection = () => {
    return (
        <Box className={styles.sectionContainer} >
            <Box className={styles.centerText} >
                <Button variant="outlined" className={styles.bookButton} >
                    Book Session
                </Button>
                <Typography variant="h4" className={styles.heading} sx={{ fontSize: "48px" }}>
                
                    Weekly Schedule Overview
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {scheduleData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card className={styles.card}>
                            <CardContent>
                                <Typography variant="h6" className={styles.cardTitle} gutterBottom>
                                    {item.day}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className={styles.cardDate}>
                                    {item.date}
                                </Typography>
                                <Typography variant="body2" className={styles.cardTime}>
                                    {item.time}
                                </Typography>

                                <Chip
                                    label={item.status}
                                    color={item.status === 'Available' ? 'success' : 'default'}
                                    size="small"
                                    className={styles.chip}
                                />

                                <LinearProgress
                                    variant="determinate"
                                    value={item.booked}
                                    color={item.status === 'Available' ? 'success' : 'inherit'}
                                    className={styles.progress}
                                />

                                <Typography variant="caption" display="block" gutterBottom>
                                    {item.booked}% Booked
                                </Typography>

                                <Button
                                    fullWidth
                                    variant="outlined"
                                    disabled={item.disabled}
                                    className={styles.consultationButton}
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
