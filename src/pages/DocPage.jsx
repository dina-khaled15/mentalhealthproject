import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import PsychologyBanner from "../components/PsychologyBanner";
import ExpertTeamSection from "../components/ExpertTeam";
import TeamGrid from "../components/TeamGrid";
import FooterComponent from "../components/footer/contact";

const DoctorsPage = () => {
  return (
    <Box sx={{ margin: "auto", width: "100%", overflow: "hidden" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <Navbar />

        {/* Banner Section */}
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

        {/* Expert Team Section */}
        <Box
          sx={{
            pt: 1,
            maxWidth: "1200px",
            mx: "auto",
            marginLeft: "145px",
            fontFamily: "Manrope",
          }}
        >
          <ExpertTeamSection />
        </Box>

        {/* Cards Section */}
        <Box
          sx={{
            pt: 4,
            maxWidth: "1200px",
            mx: "auto",
            marginLeft: "250px",
            fontFamily: "Manrope",
          }}
        >
          <TeamGrid />
        </Box>

        {/* Footer */}
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
