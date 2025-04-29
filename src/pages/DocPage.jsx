import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/navmodule/Navbar";
import PsychologyBanner from "../components/Pbanner/PsychologyBanner";
import ExpertTeamSection from "../components/ExpertTeam/ExpertTeam";
import TeamGrid from "../components/ourteam/TeamGrid";
import FooterComponent from "../components/footer/contact";

const DoctorsPage = () => {
  return (
    <Box sx={{ margin: "auto", width: "100%", overflow: "hidden" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <Navbar />
        <Box sx={{ pt: 18, pb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              px: 2,
              fontFamily: "Manrope",
            }}
          >
            <PsychologyBanner />
          </Box>
        </Box>
        <Box sx={{  mt: -13, maxWidth: "1200px", mx: "auto",marginLeft: "245px", fontFamily: "Manrope",}}>
          <ExpertTeamSection />
        </Box>
        <Box sx={{ mt: -8, maxWidth: "1200px", mx: "auto", marginLeft: "250px", fontFamily: "Manrope", }} >
          <TeamGrid />
        </Box>
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
