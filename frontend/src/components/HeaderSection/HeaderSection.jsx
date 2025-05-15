import React from "react";
import { Typography, Box } from "@mui/material";
import styles from "./HeaderSection.module.css";

const HeaderSection = ({ issueData }) => (
  <Box className={styles.wrapper}>
    {/* النص والعنوان */}
    <Box className={styles.textContainer}>
    <Typography variant="h3" className={styles.title}>
      {issueData.title}
    </Typography>

      <Typography variant="body1" className={styles.description}>
        {issueData.description}
      </Typography>
    </Box>

    {/* الصورة */}
    <Box className={styles.imageContainer}>
      <img
        src={issueData.mainImage}
        alt={issueData.title}
        className={styles.mainImage}
        loading="lazy"
      />
    </Box>
  </Box>
);

export default HeaderSection;
