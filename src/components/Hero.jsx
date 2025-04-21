import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";

function CustomPlayArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <Box sx={{ px: 10, py: 10, backgroundColor: "#FCFCFB" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Find Peace of Mind
          </Typography>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            with Wellthy
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.2rem", mb: 1 }}
          >
            Experience a comprehensive holistic approach to mental health care,
            fostering balance, tranquility, resilience, and renewed vitality in
            every aspect of your life.
          </Typography>

          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#000",
                "&:hover": { backgroundColor: "#333" },
              }}
              startIcon={<CustomPlayArrowIcon />}
            >
              Start your journey
            </Button>

            <Button
              variant="text"
              startIcon={<CustomPlayArrowIcon />}
              sx={{ textTransform: "none", color: "#000" }}
            >
              How can we help you start fresh?
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <Box
        component="img"
        src="/images/Hero.png"
        alt="Happy Woman"
        sx={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          borderRadius: "20px",
          my: 5,
        }}
      />

      {/* Optional WELLTHY logo or wordmark here */}
      <Box textAlign="center">
        <Typography variant="h2" fontWeight="bold">
          WELLTHY
        </Typography>
      </Box>
    </Box>
  );
}
