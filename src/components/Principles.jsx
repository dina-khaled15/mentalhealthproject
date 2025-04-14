import React from "react";
import { Box, Typography, Grid, Paper, Container, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const principles = [{ icon: <AccessTimeIcon fontSize="large" />, title: "24/7 Customer Support", description: "Our team is here 24/7 to assist with\n any questions or concerns." },

{ icon: <PersonSearchIcon fontSize="large" />, title: "Direct Access to Experts", description: "Connect with licensed professionals\n for personalized advice and answers." },

{ icon: <FlashOnIcon fontSize="large" />, title: "Timely Responses", description: "We respond quickly and efficiently to\n ensure you get the help you need." },

{ icon: <EmojiObjectsIcon fontSize="large" />, title: "Tailored Solutions", description: "We offer tailored mental health\n services to meet your needs." }];

export default function PrinciplesSection() {
    return (<Box sx={{ backgroundColor: "#222222", py: 6, px: { xs: 3, md: 10 }, color: "white" }}>
        <Container maxWidth="lg"
        >
            <Box

                sx={{
                    position: "relative",
                    left: "-5rem"
                }}
            >

                <Button
                    variant="outlined"
                    startIcon={<FilterAltOutlinedIcon />}
                    sx={{ color: "white", borderColor: "white", borderRadius: "20px", mb: 2 }}
                >
                    Values
                </Button>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Principles That
                </Typography>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Drives Us
                </Typography>
            </Box>

            <Grid container spacing={4} mt={4}
                sx={{
                    position: "relative",
                    left: "15rem",
                    top: "-10rem"
                }}
            >
                {principles.map((item, index) => (<Grid item xs={12} sm={6} md={6} key={index}>
                    <Paper elevation={0} sx={{ backgroundColor: "transparent", color: "white" }}>

                        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}

                        > {item.icon}

                            <Typography variant="subtitle1" fontWeight={600}> {item.title}

                            </Typography>
                            <Typography variant="body2" color="gray"


                            > {item.description}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>))}
            </Grid>
        </Container>
    </Box>);
}

