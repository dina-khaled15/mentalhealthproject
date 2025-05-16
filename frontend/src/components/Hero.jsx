import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ← 1. استيراد useNavigate


function CustomPlayArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  const navigate = useNavigate(); 

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 }, backgroundColor: "#FCFCFB", overflowX: "auto", padding: { xs: "40px 20px", md: "90px 125px" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 2, md: 0 },
          width: "100%",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" }, pr: { xs: 0, md: 2 } }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: "clamp(1.5rem, 4vw, 5rem)",
              fontFamily: "Manrope",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Find Peace of Mind with Wellthy
          </Typography>
        </Box>

        <Box sx={{ width: { xs: "100%", md: "48%" }, mb: { xs: 4, md: 0 } }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              mb: 3,
              fontFamily: "Manrope",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Experience a holistic approach to mental health care, fostering balance and resilience in your life.
          </Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#000",
                "&:hover": { backgroundColor: "#333" },
                fontFamily: "Manrope",
                width: { xs: "100%", md: "auto" },
              }}
              startIcon={<CustomPlayArrowIcon />}
              onClick={() => navigate("/booking")} 
            >
              Start your journey
            </Button>
            <Button
              variant="text"
              startIcon={<CustomPlayArrowIcon />}
              sx={{
                textTransform: "none",
                color: "#000",
                fontFamily: "Manrope",
                width: { xs: "100%", md: "auto" },
              }}
              onClick={() => navigate("/about")} 
            >
              How can we help you start fresh?
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box width="100%" mt={{ xs: 2, md: -10 }}>
        <Box
          component="img"
          src={"http://res.cloudinary.com/defus4mj2/image/upload/v1747347047/jwnphftbdcoefpog8vyw.png"}
          alt="Happy Woman"
          sx={{
            py: 2,
            width: "100%",
            height: "auto",
            maxHeight: "100%",
            borderRadius: "20px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: "clamp(2.5rem, 12vw, 12rem)",
              fontFamily: "Manrope",
              textAlign: "center",
            }}
          >
            <span style={{ letterSpacing: "0.35em" }}>WELLTH</span>Y
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
