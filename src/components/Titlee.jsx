import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MentalHealthServices = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F5F9FF",
        justifyContent: "center",
        borderTop: "6px solid transparent",
        backgroundImage:
          "repeating-linear-gradient(45deg, #E0F0FF, #E0F0FF 10px, #F5F9FF 10px, #F5F9FF 20px)",
        backgroundClip: "content-box",
        px: { xs: 2, md: 4 }, // Padding for responsiveness
      }}
    >
      <Paper elevation={0} sx={{ p: { xs: 1, md: 3 }, bgcolor: "white" }}>
        
        <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column">
          {/* Button above the text */}
          <Grid item xs={12}>
            <Button
              startIcon={<ArrowForwardIcon />}
              variant="outlined"
              sx={{
                borderRadius: 5,
                borderColor: "#ccc",
                color: "black",
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "Manrope",
                fontSize: "16px",
                margin: "0 auto", // Center button horizontally
              }}
            >
              Our Experts
            </Button>
          </Grid>

          {/* Text below the button */}
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "50px",
                textAlign: { xs: "center", md: "left" },
                maxWidth: "600px", // Optional: to limit the width of the text for better alignment
                marginBottom: "0px", // Remove space below this text
              }}
            >
              Meet our Doctors,
            </Typography>
          </Grid>

          {/* Additional text with reduced gap */}
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "50px",
                textAlign: { xs: "center", md: "left" },
                marginTop: "0px", // Remove space above this text
                lineHeight: 1.1, // Adjust line height to bring text closer
              }}
            >
              You’re in Good Hands
            </Typography>
          </Grid>
        </Grid>
        
      </Paper>
    </Box>
  );
};

export default MentalHealthServices;
