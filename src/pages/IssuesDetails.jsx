import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Tab, Tabs, Typography, Link, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import ImageStatisticSection from "../components/ImageStatisticSection/ImageStatisticSection";
import WhatIsItSection from "../components/WhatIsItSection/WhatIsItSection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import PathToWellnessSection from "../components/PathToWellnessSection/PathToWellnessSection";
import TestimonialSection from "../components/Testimonial/Testimonial";
import IssuesData from "../data/Issues";
import black from "../images/black.png";
import image from "../images/1.png";

const Details = () => {
  const { title } = useParams();
  const [issueData, setIssueData] = useState(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(title);
    setIssueData(
      IssuesData[decodedTitle] || IssuesData["Stress Management"]
    );
  }, [title]);

  const handleResourcesToggle = () => {
    setResourcesOpen(!resourcesOpen);
  };

  if (!issueData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ margin: "auto", fontFamily: "Manrope", maxWidth: "100%" }}>
        <HeaderSection issueData={issueData} />
        <ImageStatisticSection
          issueData={issueData}
          groupImg={issueData.groupImg}
          aloneImg={issueData.aloneImage}
        />
        <WhatIsItSection issueData={issueData} />
        <BenefitsSection issueData={issueData} />
        <PathToWellnessSection black={black} />
        <TestimonialSection issueData={issueData} image={image} />

        <Box sx={{ mt: 4, maxWidth: "800px", width: "100%", mx: "auto" }}>
          <Tabs
            value={resourcesOpen ? 0 : -1}
            onChange={handleResourcesToggle}
            sx={{
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              
              label={
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "6px 12px" }}>

                  <Typography
                    sx={{
                      textTransform: "none",
                      fontWeight: 400,
                      fontSize: { xs: "14px", sm: "16px", md: "18px" },
                      fontFamily: "Manrope",
                      color: "black",
                    }}
                  >
                    Recommendation
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {resourcesOpen ? (
                      <RemoveIcon sx={{ color: "black", fontSize: "20px" }} onClick={handleResourcesToggle} />
                    ) : (
                      <AddIcon sx={{ color: "black", fontSize: "20px" }} onClick={handleResourcesToggle} />
                    )}
                  </Box>
                </Box>
              }
              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontFamily: "Manrope",
                backgroundColor: "#F8F7F4",
                borderRadius: "8px",
                border: "1px solid black",
                color: "#1A3C57",
                minWidth: 0,
                width: "100%",
                padding: 0,
                "&.Mui-selected": {
                  backgroundColor: "#F8F7F4",
                  color: "#1A3C57",
                },
                "&:hover": {
                  backgroundColor: "#e8e7e4",
                },
              }}
            />
          </Tabs>

          <Collapse in={resourcesOpen}>
            <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 2, mt: 1 }}>
              <Typography variant="h6" gutterBottom>
                YouTube Videos
              </Typography>
              {issueData.resources?.youtube?.map((link, index) => (
                <Link
                  key={`youtube-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  display="block"
                  sx={{
                    mb: 1,
                    color: "#000000",
                    textDecoration: "none",
                    "&:hover": { color: "#000000", textDecoration: "underline" },
                  }}
                >
                  {link.title}
                </Link>
              ))}

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Articles
              </Typography>
              {issueData.resources?.articles?.map((link, index) => (
                <Link
                  key={`article-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  display="block"
                  sx={{
                    mb: 1,
                    color: "#000000",
                    textDecoration: "none",
                    "&:hover": { color: "#000000", textDecoration: "underline" },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Collapse>
        </Box>
      </Box>
      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
};

export default Details;