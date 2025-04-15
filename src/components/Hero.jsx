import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import Types from "./footer/Logo";
function CustomPlayArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
    );
}
export default function HeroSection() {
    return (
        <Box sx={{ px: 6, py: 6, backgroundColor: "#FCFCFB" }}>
            <Grid
                container
                columns={12}
                columnSpacing={8}
                rowSpacing={4}
                alignItems="center"
            >
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        position: "relative",
                        left: "11rem",
                        top: "0rem"
                    }}>
                        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ marginBottom: "0" }}>
                            Find Peace of Mind
                        </Typography>
                        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ display: "block", marginTop: "0rem" }}>
                            with Wellthy
                        </Typography>
                    </Box>
                    {/* ******* */}
                    <Box sx={{
                        position: "relative",
                        left: "49rem",
                        top: "-10rem"
                    }}>
                        <Typography variant="body1" color="text.secondary" sx={{
                            fontSize: "1.2rem",
                            marginTop: "1rem",
                        }}>
                            Experience a comprehensive holistic approach to
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{
                            fontSize: "1.2rem",
                            lineHeight: 1.8,
                        }}>
                            and renewed vitality in
                            every aspect of your life.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{
                            fontSize: "1.2rem",
                            marginTop: "0rem",
                        }}>
                            resilience, and renewed vitality in
                            every aspect
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{
                            fontSize: "1.2rem",
                            marginTop: "0rem",
                        }}>
                            your life.
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={2} mt={2}>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "#000",
                                "&:hover": { backgroundColor: "#333" },
                                position: "relative",
                                left: "795px",
                                top: "-10rem"
                            }}
                            startIcon={<CustomPlayArrowIcon />}
                        >
                            Start your journey
                        </Button>
                        <Button
                            variant="text"
                            startIcon={<CustomPlayArrowIcon />}
                            sx={{
                                textTransform: "none", color: "#000",
                                position: "relative",
                                left: "790px",
                                top: "-10rem"
                            }}
                        >
                            How can we help you start fresh?
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/health.jpg"
                        alt="Happy Woman"
                        sx={{
                            width: "100%",
                            // height: "auto",
                            // width: "100%",           
                            maxHeight: "400px",
                            objectFit: "contain",
                            borderRadius: "20px",
                            position: "relative",
                            left: "12rem",
                            top: "-11rem"
                        }}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    position: "absolute",
                    top: "41rem",
                    left: "17rem",
                    // backgroundColor: "#FCFCFB"
                }}
            >
                <Types variant="light"
                />
            </Box>
        </Box>
    );
}






