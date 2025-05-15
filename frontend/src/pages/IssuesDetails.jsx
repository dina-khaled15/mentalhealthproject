import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Tab, Tabs, Typography, Link, Collapse } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import ImageStatisticSection from "../components/ImageStatisticSection";
import WhatIsItSection from "../components/WhatIsItSection/WhatIsItSection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import PathToWellnessSection from "../components/PathToWellnessSection";
import TestimonialSection from "../components/Testimonial/Testimonial";

const Details = () => {
  const { title } = useParams();
  const [issueData, setIssueData] = useState(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const decodedTitle = decodeURIComponent(title);
        const response = await axios.get(`http://localhost:4000/Issues`);
        const foundIssue = response.data.find(
          (item) => item.title === decodedTitle
        );
        if (foundIssue) {
          setIssueData(foundIssue);
        } else {
          console.warn("Issue not found");
        }
      } catch (error) {
        console.error("Error fetching issue data:", error);
      }
    };

    fetchIssue();
  }, [title]);

  const handleResourcesToggle = (event, newValue) => {
    setResourcesOpen(newValue === 0);
  };

  if (!issueData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <HeaderSection issueData={issueData} />
        <ImageStatisticSection
          issueData={issueData}
          groupImg={issueData.groupImg}
          aloneImg={issueData.aloneImage}
        />
        <WhatIsItSection issueData={issueData} />
        <BenefitsSection issueData={issueData} />
        <PathToWellnessSection black="http://res.cloudinary.com/defus4mj2/image/upload/v1747316497/mtjxdz3ik9qylwglwuxa.png" />
        <TestimonialSection
          issueData={issueData}
          image="http://res.cloudinary.com/defus4mj2/image/upload/v1747263881/uwb22hp7junjp3j0eggh.png"
        />

        <Box sx={{ mt: { xs: 3, md: 4 }, maxWidth: "1200px", mx: "auto" }}>
          <Tabs
            value={resourcesOpen ? 0 : -1}
            onChange={handleResourcesToggle}
            sx={{
              "& .MuiTab-root": {
                fontFamily: "Manrope",
                fontSize: { xs: "1rem", md: "1.35rem" },
                fontWeight: 600,
                color: "#000000",
                textTransform: "none",
                px: { xs: 2, md: 3 },
                py: 1.5,
                borderRadius: "8px",
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                  color: "#000000",
                },
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#000000",
                bgcolor: "#e0e0e0",
                fontWeight: 700,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#000000",
                height: "3px",
              },
            }}
          >
            <Tab label="Recommendation" />
          </Tabs>

          <Collapse in={resourcesOpen}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                mt: 1,
                bgcolor: "#f5f5f5",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: "#000000",
                  mb: 2,
                }}
              >
                YouTube Videos
              </Typography>
              {issueData.resources?.youtube?.map((link, index) => (
                <Link
                  key={`youtube-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Manrope",
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontWeight: 500,
                    color: "#000000",
                    textDecoration: "none",
                    mb: 1.5,
                    p: 1,
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "#e0e0e0",
                      textDecoration: "underline",
                      color: "#000000",
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      bgcolor: "#ff0000",
                      color: "#ffffff",
                      borderRadius: "4px",
                      mr: 1,
                      fontSize: "0.75rem",
                    }}
                  >
                    ▶
                  </Box>
                  {link.title}
                </Link>
              ))}

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: "#000000",
                  mt: 3,
                  mb: 2,
                }}
              >
                Articles
              </Typography>
              {issueData.resources?.articles?.map((link, index) => (
                <Link
                  key={`article-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Manrope",
                    fontSize: { xs: "0.85rem", md: "0.95rem" },
                    fontWeight: 500,
                    color: "#000000",
                    textDecoration: "none",
                    mb: 1.5,
                    p: 1,
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "#e0e0e0",
                      textDecoration: "underline",
                      color: "#000000",
                    },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      bgcolor: "#000000",
                      color: "#ffffff",
                      borderRadius: "4px",
                      mr: 1,
                      fontSize: "0.75rem",
                    }}
                  >
                    📄
                  </Box>
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