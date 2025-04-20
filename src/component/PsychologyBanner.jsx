import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const PsychologyBanner = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#1a1a1a",
        borderRadius: "4px",
        border: "1px solid #3a7bd5",
        maxWidth: "100%",
        padding: "30px 40px",
        margin: "auto",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "white",
            fontWeight: 400,
            lineHeight: 1.3,
            fontFamily: "Manrope",
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "3rem" },
          }}
        >
          Exploring various psychological concepts, theories, and research
          findings in an accessible way.
        </Typography>
      </Box>
    </Paper>
  );
};

export default PsychologyBanner;
