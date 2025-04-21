import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const CTASection = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f8fbf9',
                py: 16,
                px: { xs: 3, md: 12 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // minHeight: '580px',
            }}
        >
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
                    >
                        Find Doctor
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CTASection;