import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/navmodule/Navbar";
import FooterComponent from "../components/footer/contact";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import ImageStatisticSection from "../components/ImageStatisticSection/ImageStatisticSection";
import WhatIsItSection from "../components/WhatIsItSection/WhatIsItSection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import PathToWellnessSection from "../components/PathToWellnessSection/PathToWellnessSection";
import TestimonialSection from "../components/Testimonial/Testimonial";
import Issues from "../components/data/Issues";
import black from "../images/black.png";
import image from "../images/1.png";

const Details = () => {
  const { title } = useParams();
  const [issueData, setIssueData] = useState(null);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(title);
    setIssueData(
      Issues[decodedTitle] || Issues["Stress Management"]
    );
  }, [title]);

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
        <PathToWellnessSection black={black} />
        <TestimonialSection issueData={issueData} image={image} />
      </Box>
      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
};

export default Details;