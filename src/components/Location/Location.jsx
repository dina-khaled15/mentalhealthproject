import React from 'react';
import { Box, Typography, CardMedia, Container, Chip } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import styles from './Location.module.css';

const locations = [
  {
    country: "UAE",
    city: "Dubai",
    address: "456 Palm Jumeirah",
    phone: "+971 50 123 4567",
    email: "dubai@example.com",
    image: "http://res.cloudinary.com/defus4mj2/image/upload/v1746815750/k1nwngf2kxthzh5wgypv.png"
  },
  {
    country: "Egypt",
    city: "Cairo",
    address: "123 Nile St",
    phone: "0123456789",
    email: "cairo@example.com",
    image: "http://res.cloudinary.com/defus4mj2/image/upload/v1746815453/lr5pa1r0qjq9t2hga0bg.png"
  },
  {
    country: "Saudi Arabia",
    city: "Riyadh",
    address: "789 King Fahd Rd",
    phone: "+966 55 987 6543",
    email: "riyadh@example.com",
    image: "http://res.cloudinary.com/defus4mj2/image/upload/v1746815779/gasebqk6ww8ldjcnssar.png"
  }
];

const LocationSection = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/locations")
            .then((res) => res.json())
            .then((data) => setLocations(data))
            .catch((err) => console.error("Error fetching locations:", err));
    }, []);

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
            <Box className={styles.locationInfo} >
                <Typography variant="h6" className={styles.country}>{loc.country}</Typography>
                <Typography variant="h5" className={styles.city} gutterBottom>{loc.city}</Typography>
            </Box>
            <CardMedia component="img" height="200" image={loc.image} alt={loc.city} className={styles.cardMedia}/>
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
