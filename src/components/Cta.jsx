import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CallToAction() {
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                py: { xs: 6, sm: 10 },
                pr: { xs: 35, sm: 30 },
              mt: { xs: 13, sm: 7 },
              mb: { xs: 10, sm: 7 },
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Manrope",
                        fontSize: { xs: "28px", sm: "40px" },
                        mb: 2,
                    }}
                >
                    Start your mental wellness journey <br />with Wellthy today!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        opacity: 0.7,
                        fontSize: "16px",
                        fontFamily: "Manrope",
                        fontWeight: "400",
                        mb: 4,
                        maxWidth: "600px",
                    }}
                >
                    Book a consultation and take the first step toward a healthier,<br /> happier mind.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        px: 3,
                        py: 1.5,
                        textTransform: "none",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: "600",
                        "&:hover": {
                            backgroundColor: "#333333",
                        },
                        fontFamily: "Manrope", // إضافة الخط هنا
                    }}
                    endIcon={<ArrowForwardIcon />}
                >
                    Book Counseling
                </Button>
            </Container>
        </Box>
    );
}