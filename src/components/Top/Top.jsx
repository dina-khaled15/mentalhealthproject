import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import styles from "./Top.module.css";
import topImage from "../../images/top.png";

const Top = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <Box className={styles.topContainer}>
      <Box className={styles.aboutButtonBox}>
        <Button
          variant="outlined"
          startIcon={<WorkspacePremiumIcon />}
          className={styles.aboutButton}
        >
          About Wellthy
        </Button>
      </Box>
      <Typography variant="h3" className={styles.heading}>
        Empowering your mental wellness
        with compassion and care
      </Typography>
      <Box className={styles.exploreBox}>
        <Button
          endIcon={<ArrowCircleDownIcon />}
          className={styles.exploreButton}
        >
          Explore Wellthy
        </Button>
      </Box>

      <Box className={styles.imageWrapper}>
        {!showVideo ? (
          <img
            src={topImage}
            alt="Mental Health Visual"
            className={styles.image}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <iframe
            width="80%"
            height="700px"
            src="https://www.youtube.com/embed/hPL8zP-VbLw?autoplay=1"
            title="Empowering Mental Wellness"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "16px" }}
          ></iframe>
        )}
      </Box>
    </Box>
  );
};

export default Top;
