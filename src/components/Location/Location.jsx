import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Container, Chip } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import styles from './Location.module.css';

import  locations  from '../../data/locations';

const LocationSection = () => {
    return (
        <Box className={styles.container}>
            <Container>
                <Box className={styles.header}>
                    <Chip
                        icon={<RoomIcon />}
                        label="On-site Office"
                        color="default"
                        sx={{ mb: 2 }}
                    />
                    <Typography variant="h4" className={styles.title} gutterBottom>
                        Location
                    </Typography>
                    <Typography color="text.secondary">
                        What are you waiting for? Let's build your journey together
                    </Typography>
                </Box>

                <div className={styles.gridContainer}>
                    {locations.map((loc) => (
                        <div className={styles.gridItem} key={loc.city}>
                            <Card className={styles.card}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={loc.image}
                                    alt={loc.city}
                                    className={styles.cardMedia}
                                />
                                <CardContent className={styles.cardContent}>
                                    <Typography variant="body2" className={styles.country}>
                                        {loc.country}
                                    </Typography>
                                    <Typography variant="h6" className={styles.city} gutterBottom>
                                        {loc.city}
                                    </Typography>
                                    <Typography variant="body2" className={styles.address} gutterBottom>
                                        {loc.address}
                                    </Typography>
                                    <Typography variant="body2" className={styles.phone}>
                                        {loc.phone}
                                    </Typography>
                                    <Typography variant="body2" className={styles.email}>
                                        {loc.email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </Box>
    );
};

export default LocationSection;