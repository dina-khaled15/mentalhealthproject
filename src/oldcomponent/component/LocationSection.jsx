import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Container, Chip } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const locations = [
    {
        city: 'El Sheikh Zayed',
        country: 'Egypt',
        image: '/Picture1.png',
        address: '123 Wellness Way, El Sheikh Zayed, Giza 12588',
        phone: '+20 (2) 555-7890',
        email: 'contact.zayed@welllthy.com',
    },
    {
        city: 'Zamalek',
        country: 'Egypt',
        image: '/Picture.png',
        address: '456 Mindful St, Zamalek, Cairo 11211',
        phone: '+20 (2) 555-4678',
        email: 'contact.zamalek@welllthy.com',
    },
    {
        city: 'El Maadi',
        country: 'Egypt',
        image: '/Picture3.png',
        address: '789 Serenity Ave, El Maadi, Cairo 11728',
        phone: '+20 (2) 555-2390',
        email: 'contact.maadi@welllthy.com',
    },
];

const LocationSection = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', py: 10 }}>
            <Container>
                <Box textAlign="center" mb={5}>
                    <Chip
                        icon={<RoomIcon />}
                        label="On-site Office"
                        color="default"
                        sx={{ mb: 2 }}
                    />
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Location
                    </Typography>
                    <Typography color="text.secondary">
                        What are you waiting for? Let’s build your journey together
                    </Typography>
                </Box>

                <Grid container spacing={7} justifyContent="center">
                    {locations.map((loc) => (
                        <Grid item xs={12} md={4} key={loc.city}>
                            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={loc.image}
                                    alt={loc.city}
                                    sx={{
                                        height: 200,
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '12px 12px 0 0',
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {loc.country}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {loc.city}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {loc.address}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {loc.phone}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {loc.email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default LocationSection;
