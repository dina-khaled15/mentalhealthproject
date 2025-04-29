import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import HeaderImg from "../images/HeaderImg.png";


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
    <Box sx={{ px: 10, py: 10, backgroundColor: "#FCFCFB"}}>
      
      <Grid container spacing={46} alignItems="center" direction={"row"}>
        <Grid>
          <Typography variant="h1" fontWeight="bold" gutterBottom sx={{ fontSize: "80px", width: "700px", fontFamily: "Manrope"}}>
            Find Peace of Mind with Wellthy
          </Typography>
        </Grid>

        <Grid>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.2rem", mb: 1, width: "620px" , fontFamily: "Manrope" }}
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
                "&:hover": { backgroundColor: "#333" , fontFamily: "Manrope"},
              }}
              startIcon={<CustomPlayArrowIcon />}
            >
              Start your journey
            </Button>

            <Button
              variant="text"
              startIcon={<CustomPlayArrowIcon />}
              sx={{ textTransform: "none", color: "#000" , fontFamily: "Manrope"}}
            >
              How can we help you start fresh?
            </Button>
          </Stack>
        </Grid>
      </Grid>
      
      <Box
        component="img"
        src= {HeaderImg}
        alt="Happy Woman"
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "1200px",
          objectFit: "contain",
          borderRadius: "20px",
          
        }}
      />
      <Box textAlign="center" justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h1" fontWeight="bold" sx={{ fontSize: "250px", fontFamily: "Manrope" , letterSpacing: "60px"}}>
          WELLTHY
        </Typography>
      </Box>
    </Box>
  );
}