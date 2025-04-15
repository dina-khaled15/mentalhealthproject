import React from "react";
import { Box } from "@mui/material";
import Navbar from "./navbar";
import PsychologyBanner from "./PsychologyBanner";
import ExpertTeamSection from "./ExpertTeam";
import TeamGrid from "./TeamGrid";
import FooterComponent from "./footer/contact";

const DoctorsPage = () => {
  console.log("DoctorsPage rendered");
  return (
    <Box sx={{ margin: "auto", width: "1400px" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <Navbar />

        {/* Banner Section */}
        <Box sx={{ pt: 18, pb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              px: 2,
            }}
          >
            <PsychologyBanner />
          </Box>
        </Box>

        {/* Expert Team Section */}
        <Box
          sx={{ pt: 1, maxWidth: "1200px", mx: "auto", marginLeft: "145px" }}
        >
          <ExpertTeamSection />
        </Box>

        {/* Cards Section */}
        <Box
          sx={{
            pt: 4,
            maxWidth: "1200px",
            mx: "auto",
            marginLeft: "200px",
          }}
        >
          <TeamGrid />
        </Box>

        {/* Footer */}
        <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto" }}>
          <FooterComponent variant="dark" />
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorsPage;
