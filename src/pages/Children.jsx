import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/navmodule/Navbar";
import FooterComponent from "../components/footer/contact";
import HomeCards from "../components/CardForChildern";
import SafeMessage from "../components/message";
import "../App.css";

const Children = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{ bgcolor: "#fff", pt: 4, px: 4, maxWidth: "1400px", mx: "auto" }}
      >
        <SafeMessage />
        <HomeCards />
      </Box>

      {/* Footer */}
      <Box sx={{ mt: 4, width: "100%" }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
};

export default Children;
