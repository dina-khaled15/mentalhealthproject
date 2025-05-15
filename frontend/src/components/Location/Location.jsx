import React, { useEffect, useState } from 'react'; // تأكد من إضافة useState و useEffect
import { Box, Typography, CardMedia, Container, Chip } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import styles from './Location.module.css';

const LocationSection = () => {
    const [locations, setLocations] = useState([]); // استخدم state لتخزين المواقع

    useEffect(() => {
        fetch("http://localhost:5000/api/locations")
            .then((res) => res.json())
            .then((data) => setLocations(data)) // تحديث الـ state بالمواقع
            .catch((err) => console.error("Error fetching locations:", err));
    }, []); // فقط عند تحميل المكون لأول مرة

    return (
        <Box className={styles.container}>
            <Container>
                <Box className={styles.header}>
                    <Chip icon={<RoomIcon />} label="On-site Office" className={styles.chip} />
                    <Typography variant="h4" className={styles.title} gutterBottom>Location</Typography>
                    <Typography className={styles.headerText} color="text.secondary">
                        What are you waiting for? Let's build your journey together
                    </Typography>
                </Box>
                <div className={styles.gridContainer}>
                    {locations.map((loc) => (
                        <div className={styles.gridItem} key={loc.city}>
                            <Box className={styles.locationInfo}>
                                <Typography variant="h6" className={styles.country}>{loc.country}</Typography>
                                <Typography variant="h5" className={styles.city} gutterBottom>{loc.city}</Typography>
                            </Box>
                            <CardMedia component="img" height="200" image={loc.image} alt={loc.city} className={styles.cardMedia} />
                            <Box className={styles.locationDetails}>
                                <Typography variant="body1" className={styles.address}>{loc.address}</Typography>
                                <Typography variant="body2" className={styles.phone}>{loc.phone}</Typography>
                                <Typography variant="body2" className={styles.email}>{loc.email}</Typography>
                            </Box>
                        </div>
                    ))}
                </div>
            </Container>
        </Box>
    );
};

export default LocationSection;
