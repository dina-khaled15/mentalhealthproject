import React from 'react';
import { Box, Typography, Grid, IconButton, Paper } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const AboutSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#222222',
                color: '#fff',
                px: { xs: 3, md: 10 },
                py: { xs: 6, md: 10 },
                overflow: "hidden"
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    left: "8rem"
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.8rem', md: '2.8rem' },
                        mb: 0,
                        lineHeight: 1.3,
                    }}
                >
                    At Wellthyb, we provide personalized mental
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.8rem', md: '2.8rem' },
                        mb: 0,
                        lineHeight: 1.3,
                    }}
                >
                    health counseling with licensed therapists
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '1.8rem', md: '2.8rem' },
                        mb: 3,
                        lineHeight: 1.3,
                    }}
                >
                    focused on your unique needs.
                </Typography>

            </Box>


            <Grid container spacing={3}>

                <Grid item xs={12} md={8}>
                    <Paper
                        elevation={3}
                        sx={{
                            position: 'relative',
                            left: "10rem",
                            Overflow: 'hidden',
                            borderRadius: '16px',
                        }}
                    >
                        <img
                            src="/Videos.jpg"
                            alt="Main Video"
                            style={{
                                width: '100%', maxHeight: "400px",
                                objectFit: "contain", borderRadius: '16px'
                            }}
                        />
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: '#fff',
                                color: '#000',
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                            }}
                        >
                            <PlayCircleFilledWhiteIcon sx={{ fontSize: 48 }} />
                        </IconButton>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={12} container spacing={3} direction="column"
                    sx={{
                        position: "relative",
                        left: "11rem"
                    }}
                >
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                backgroundColor: '#e0e0e0',
                                borderRadius: '16px',
                                height: '190px',
                                width: "100%",
                                maxWidth: "700px",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <PlayCircleFilledWhiteIcon sx={{ fontSize: 48, color: '#fff' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                backgroundColor: 'transparent',
                                border: '3.5px solid white',
                                borderRadius: '16px',
                                width: '380px',
                                height: '470%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <PlayCircleFilledWhiteIcon sx={{ fontSize: 32, color: '#fff' }} />
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AboutSection;
