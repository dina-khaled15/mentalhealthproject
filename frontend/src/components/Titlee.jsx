import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MentalHealthServices = () => {
  return (
    <Box sx={{bgcolor: "#F5F9FF",justifyContent: "center",borderTop: "6px solid transparent",backgroundClip: "content-box",
      backgroundImage:
      "repeating-linear-gradient(45deg, #E0F0FF, #E0F0FF 10px, #F5F9FF 10px, #F5F9FF 20px)",
        px: { xs: 2, md: 4 }, }}>
      <Paper elevation={0} sx={{ p: { xs: 1, md: 3 }, bgcolor: "white" }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column">
        <Grid item xs={12}>
          <Button startIcon={<ArrowForwardIcon />} variant="outlined" sx={{borderRadius: 5,borderColor: "#ccc",
            color: "black",textTransform: "none",fontWeight: 500,fontFamily: "Manrope",fontSize: "16px",margin: "0 auto", }}>
              Our Experts
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" sx={{fontFamily: "Manrope",fontWeight: 600,fontSize: "50px",maxWidth: "600px",
            marginBottom: "0px", textAlign: { xs: "center", md: "left" },}}>
              Meet our Doctors,
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" sx={{fontFamily: "Manrope",fontWeight: 600,fontSize: "50px",lineHeight: 1.1, marginTop: "0px",
            textAlign: { xs: "center", md: "left" },}}>
              You’re in Good Hands
          </Typography>
        </Grid>
      </Grid>
      </Paper>
    </Box>
  );
};

export default MentalHealthServices;
