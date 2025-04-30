import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import PsychologyBanner from "../components/Pbanner/PsychologyBanner";
import ExpertTeamSection from "../components/ExpertTeam/ExpertTeam";
import TeamGrid from "../components/TeamGrid/TeamGrid";
import FooterComponent from "../components/footer/contact";

const DoctorsPage = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: "#fff" }}>
        <Navbar />
        <Box>
          <Box>
            <PsychologyBanner />
          </Box>
        </Box>
        <Box sx={{fontFamily: "Manrope",}}>
          <ExpertTeamSection />
        </Box>
        <div className="container">
          <TeamGrid />

        </div>
        
        
        <Box
          sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}
        >
          <FooterComponent variant="dark" />
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorsPage;
