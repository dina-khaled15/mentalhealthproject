import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

const SessionBookingSection = () => {
    return (
        <Box sx={{ backgroundColor: '#222222', py: 4.9 }}>
            <Container maxWidth="lg">
                <Box
                    component="img"
                    src="/Picture4.png"
                    alt="Therapy session"
                    sx={{
                        width: '100%',
                        height: 470,
                        borderRadius: 4,
                        objectFit: 'contain',
                        mb: 6,
                    }}
                />
                <Box
                    sx={{
                        position: "relative",
                        top: "-4rem"
                    }}
                >
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                        Book a session today and take the first step toward
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
                        a healthier mind and stronger relationships.
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'white', color: '#1e1e1e', fontWeight: 'bold' }}>
                        Book Session Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default SessionBookingSection;