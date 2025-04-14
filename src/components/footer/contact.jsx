

import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,

    Link,
    InputBase,
    IconButton,
    Paper,
} from "@mui/material";
import Types from "./Logo";



export default function FooterComponent({ variant = "light" }) {
    const isDark = variant === "dark";

    return (
        <Box
            sx={{
                backgroundColor: isDark ? '#222222' : "#ffffff",
                color: isDark ? "#ffffff" : "#000000",
                py: 2,
                borderTop: isDark ? "none" : "1px solid #e0e0e0",
            }}
        >
            <Container >
                <Grid container spacing={25} justifyContent="space-evenly"
                    sx={{ mt: 4 }}
                >
                    {/* Contact Us */}
                    <Grid item xs={12} sm={4} mb={1}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: "16px" }}
                        >
                            Contact us
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                            123 Wellness Way, Mindville, ST 98765
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                            support@wellthymentalhealth.com
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                            (123) 456-7890
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={4} mb={1}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: "16px" }}
                        >
                            Quick link
                        </Typography>
                        <Grid container spacing={0.5}>
                            <Grid item xs={6}>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: isDark ? "#fff" : "#000",
                                        opacity: 0.8,
                                        fontSize: "14px",
                                        display: "block",
                                        mb: 2,
                                        mr: .5
                                    }}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: isDark ? "#fff" : "#000",
                                        opacity: 0.8,
                                        fontSize: "14px",
                                        display: "block",
                                        mb: 2,
                                        mr: .5
                                    }}
                                >
                                    Testimonial
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: isDark ? "#fff" : "#000",
                                        opacity: 0.8,
                                        fontSize: "14px",
                                        display: "block",
                                        mr: .5
                                    }}
                                >
                                    FAQ
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: isDark ? "#fff" : "#000",
                                        opacity: 0.8,
                                        fontSize: "14px",
                                        display: "block",
                                        mb: 2,
                                        ml: 3
                                    }}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: isDark ? "#fff" : "#000",
                                        opacity: 0.8,
                                        fontSize: "14px",
                                        display: "block",
                                        mb: 2,
                                        ml: 3
                                    }}
                                >
                                    Service
                                </Link>
                                <Link
                                    href="#"
                                    underline="none"
                                    sx={{
                                        color: isDark ? "#fff" : "#000",
                                        opacity: 0.8,
                                        fontSize: "14px",
                                        display: "block",
                                        ml: 3
                                    }}
                                >
                                    Session
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>


                    {/* Stay Connected */}
                    <Grid item xs={12} sm={4} mb={1}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontSize: "16px" }}
                        >
                            Stay Connected
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                mb: 2,
                                color: isDark ? "#fff" : "#000",
                                opacity: 0.8,
                                fontSize: "14px",
                                maxWidth: "300px",
                            }}
                        >
                            Subscribe to our newsletter for the latest updates,
                            mental health tips, and resources.
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            sx={{
                                mb: 4,
                                maxWidth: 400,
                            }}
                        >
                            <Paper
                                component="form"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "8px",
                                    padding: "2px 16px",
                                    backgroundColor: "#fff",
                                }}
                            >
                                <InputBase
                                    sx={{
                                        mb: 3,
                                        flex: 1,
                                        fontSize: "14px",
                                    }}
                                    placeholder="Type your email"
                                    inputProps={{ "aria-label": "email input" }}
                                />
                                <IconButton
                                    type="submit"
                                    sx={{
                                        backgroundColor: "#000",
                                        color: "#fff",
                                        borderRadius: "8px",
                                        px: 3,
                                        py: 1,
                                        "&:hover": {
                                            backgroundColor: "#333",
                                        },
                                    }}
                                    aria-label="subscribe"
                                >
                                    Subscribe
                                </IconButton>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>

                {/* WELLTHY Logo */}
                <Types variant="dark" />

                {/* Bottom links */}

                <Box mt={6} display="flex" justifyContent="space-between" flexWrap="wrap" alignItems="center">

                    <Box display="flex" gap={3}>
                        {["Contact", "Privacy policy", "Sitemap", "Terms of Use"].map((item, i) => (
                            <Link
                                key={i}
                                href="#"
                                underline="hover"
                                sx={{
                                    color: isDark ? "#ffffff" : "#000000",
                                    fontSize: "14px",
                                    opacity: 0.8,
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                    <Typography
                        variant="caption"
                        sx={{
                            opacity: 0.6,
                            fontSize: "14px",
                            textAlign: "right",
                        }}
                    >
                        © 2024 Wellthy Mental Health. All rights reserved | by Pieterux Co
                    </Typography>
                </Box>


            </Container>
        </Box>
    );
}



