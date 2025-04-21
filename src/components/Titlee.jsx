import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MentalHealthServices = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F5F9FF",
        py: 6,
        px: { xs: 2, md: 8 },
        borderTop: "6px solid transparent",
        backgroundImage:
          "repeating-linear-gradient(45deg, #E0F0FF, #E0F0FF 10px, #F5F9FF 10px, #F5F9FF 20px)",
        backgroundClip: "content-box"
      }}
    >
      <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, bgcolor: "white" }}>
        <Box mb={2}>
          <Button
            startIcon={<ArrowForwardIcon />}
            variant="outlined"
            sx={{
              borderRadius: 5,
              borderColor: "#ccc",
              color: "black",
              textTransform: "none",
              fontWeight: "bold"
            }}
          >
            Our Experts
          </Button>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
            Meet our Doctors, You’re in Good Hands
            </Typography>
          </Grid>
          
        </Grid>
      </Paper>
    </Box>
  );
};

export default MentalHealthServices;