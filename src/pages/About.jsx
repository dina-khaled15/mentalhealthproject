import React from "react";
import Top from "../components/Top/Top";
import Personalized from "../components/Personalized/Personalized";
import Milestone from "../components/Milestone";
import Cta from "../components/Cta";
import FooterComponent from "../components/footer/contact";
import { Container, Box } from "@mui/material";
import Navbar from "../components/navmodule/Navbar";
import VisionMission from "../components/VissionMission/vission&mission";

import PricingSection from "../components/Pricingmodule/PricingSection";
import MentalHealthServices from "../components/servicesss/service";

function About() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Top />
        </Box>

        <Box my={4}>
          <Personalized />
        </Box>
      </Container>

      <Box>
        <VisionMission />
      </Box>

      <Box>
        <Milestone />
      </Box>

      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <MentalHealthServices />
      </Box>

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