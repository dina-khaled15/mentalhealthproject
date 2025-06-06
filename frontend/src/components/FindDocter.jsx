import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{backgroundColor: 'white',py: 12,
                px: { xs: 3, md: 12 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                        alignItems: 'flex-start',
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 600, maxWidth: '600px' }}>
                        Find a suitable doctor and the mental health services as you need
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: '#1c1c1c',
                            color: '#fff',
                            textTransform: 'none',
                            borderRadius: '6px',
                            px: 4,
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                        }}
                        onClick={() => navigate('/doctors')}
                        >
                        Find Doctor
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CTASection;