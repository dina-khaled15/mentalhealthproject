import React from "react";
import Navbar from "../components/navmodule/Navbar";
import Top from "../components/Top/Top";
import Personalized from "../components/Personalized/Personalized";
import VisionMission from "../components/VissionMission/VissionMission";
import Milestone from "../components/Milestone";
// import MentalHealthServices from "../components/servicesss/service";
import PricingSection from "../components/Pricing/Pricing";
import Cta from "../components/Cta";
import FooterComponent from "../components/footer/contact";
import { Container, Box } from "@mui/material";
function About() {
  return (
    <>
      <Navbar />
      
        <Box my={4}>
          <Top />
        </Box>

        <Box my={4}>
          <Personalized />
        </Box>
        

      <Box>
        <VisionMission />
      </Box>

      <Box>
        <Milestone />
      </Box>

      {/* <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <MentalHealthServices />
      </Box> */}

      <Box>
        <PricingSection />
      </Box>

      <Box>
        <Cta />
      </Box>

      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
}

export default About;