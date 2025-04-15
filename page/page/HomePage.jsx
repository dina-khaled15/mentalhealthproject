import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box sx={{ margin: "auto", width: "100%" }}>
        <Box sx={{ bgcolor: "#fff" }}>
          <Navbar />
          <Typography variant="h3" component="h1" sx={{ marginBottom: 4 }}>
            Welcome to Our Health Service
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            We are here to help you with professional health counseling.
          </Typography>
          <Link to="/doctor" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Meet Our Doctors
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
