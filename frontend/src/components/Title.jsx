import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MentalHealthServices = () => {
  return (
    <Box>
      <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
        <Box mb={2}>
          <Button
            startIcon={<ArrowForwardIcon />}
            variant="outlined"
            sx={{
              borderRadius: 5,
              borderColor: "#ccc",
              color: "black",
              textTransform: "none",
              fontWeight: "bold",
              fontFamily: "Manrope",
            }}
          >
            Consultation Services
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h4" fontWeight="bold" sx={{ fontFamily: "Manrope" }}>
              Comprehensive Mental Health Services
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "Manrope" }}>
              A complete range of services to support mental health, including therapy, medication,
              and crisis help. These services work together to help individuals improve their mental
              well-being and achieve recovery.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default MentalHealthServices;
