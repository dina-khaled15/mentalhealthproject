import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const GetInTouchSection = () => {
    return (
        <Box sx={{ backgroundColor: "#F9FAFB", py: 0 }}>
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: "100%",
                    maxWidth: "1200px",
                    // height: "60px",
                    px: { xs: 2, md: 10 },
                    pb: "0",
                    position: "relative",
                    top: "3rem"
                }}
            >
                <Button
                    variant="outlined"
                    startIcon={<EmojiEmotionsIcon />}
                    sx={{
                        borderRadius: "20px",
                        mb: 4,
                        px: 3,
                        textTransform: "none",
                        borderColor: "#D0D5DD",
                        color: "#344054",
                        fontWeight: 500,
                        alignSelf: "start",
                    }}
                >
                    Get in Touch
                </Button>
                <Box
                    sx={{
                        position: "relative",
                        left: "-7rem"
                    }}


                >


                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 1000,
                            fontSize: "55px",
                            mb: .5,
                            maxWidth: "2000px",
                            width: "100%",
                            color: "#474747",
                            // lineHeight: 1
                            // display: "-webkit-box",
                            // WebkitLineClamp: 2,
                            // WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis"
                        }}
                    >
                        We are more than happy to respond
                    </Typography>


                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 1000,
                            fontSize: "55px",
                            mb: 1,
                            maxWidth: "2000px",
                            width: "100%",
                            color: "#474747",
                            // lineHeight: 1
                        }}
                    >
                        to any question from you
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src="/Picture4.png"
                    alt="Therapist and patient"
                    sx={{
                        width: "100%",
                        maxWidth: "100%",
                        borderRadius: 3,
                        boxShadow: 1,

                    }}
                />
            </Container>
        </Box>
    );
};

export default GetInTouchSection;