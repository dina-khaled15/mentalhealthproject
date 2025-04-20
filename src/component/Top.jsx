import React from "react";
import { Box, Button, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

const Top = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fefefe",
        display: "flex",
        flexDirection: "column",
        px: 4,
        fontFamily: "Manrope",
        color: "#222222",
        position: "relative",
      }}
    >
      {/* About Wellthy */}
      <Box sx={{ mb: -2 }}>
        <Button
          variant="outlined"
          startIcon={<WorkspacePremiumIcon />}
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            fontFamily: "Manrope",
            color: "#222222",
            mb: 5,
            mt: 15,
            ml: -23,
            borderColor: "#D3D3D3",
            "&:hover": {
              borderColor: "#D3D3D3",
              backgroundColor: "rgba(211, 211, 211, 0.2)",
            },
          }}
        >
          About Wellthy
        </Button>
      </Box>

      {/* Address*/}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          maxWidth: 800,
          fontFamily: "Manrope",
          mb: 3,
          ml: -23,
          fontSize: "50px",
          color: "#474747",
        }}
      >
        Empowering your mental wellness
        <br />
        with compassion and care
      </Typography>

      {/* Explore Wellthy */}
      <Box sx={{ alignSelf: "flex-end", mr: -20, mb: 80 }}>
        <Button
          endIcon={<ArrowCircleDownIcon />}
          sx={{
            textTransform: "none",
            fontFamily: "Manrope",
            fontSize: "24px",
            fontWeight: 500,
            color: "#222222",
          }}
        >
          Explore Wellthy
        </Button>
      </Box>
    </Box>
  );
};

export default Top;