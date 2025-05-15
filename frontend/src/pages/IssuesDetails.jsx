import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Tab, Tabs, Typography, Link, Collapse } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import ImageStatisticSection from "../components/ImageStatisticSection/ImageStatisticSection";
import WhatIsItSection from "../components/WhatIsItSection/WhatIsItSection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import PathToWellnessSection from "../components/PathToWellnessSection/PathToWellnessSection";
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
      <Box sx={{ p: 4 }}>
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

        <Box sx={{ mt: 4 }}>
          <Tabs
            value={resourcesOpen ? 0 : -1}
            onChange={handleResourcesToggle}
            sx={{
              "& .MuiTab-root": { color: "#000000" },
              "& .MuiTab-root.Mui-selected": { color: "#000000" },
              "& .MuiTabs-indicator": { backgroundColor: "#000000" },
            }}
          >
            <Tab label="Recommendation" />
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