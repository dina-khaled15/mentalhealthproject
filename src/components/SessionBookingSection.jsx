import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image6 from "../images/6.png";

const SessionBookingSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#fff",
        p: 4,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={Image6}
        alt="Therapy session"
        sx={{
          width: "100%",
          maxWidth: "1100px",
          height: 350,
          objectFit: "cover",
          mb: 4,
          mx: "auto",
          borderRadius: "12px",
        }}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Book a session today and take the first step toward
        </Typography>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          a healthier mind and stronger relationships.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#1E1E1E",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            "&:hover": {
              backgroundColor: "#ddd",
            },
          }}
        >
          Book Session Now
        </Button>
      </Box>
    </Box>
  );
};

export default SessionBookingSection;
