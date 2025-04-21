import React from "react";
import { Box, Button, Typography } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import styles from "./Top.module.css";
import topImage from "../../images/Top.png"; 

const Top = () => {
  return (
    <Box className={styles.topContainer}>
      {/* About Wellthy */}
      <Box className={styles.aboutButtonBox}>
        <Button
          variant="outlined"
          startIcon={<WorkspacePremiumIcon />}
          className={styles.aboutButton}
        >
          About Wellthy
        </Button>
      </Box>

      {/* Address */}
      <Typography variant="h3" className={styles.heading}>
        Empowering your mental wellness
        <br />
        with compassion and care
      </Typography>

      {/* Explore Wellthy */}
      <Box className={styles.exploreBox}>
        <Button
          endIcon={<ArrowCircleDownIcon />}
          className={styles.exploreButton}
        >
          Explore Wellthy
        </Button>
      </Box>

      {/* ✅ Image Below Component */}
      <Box className={styles.imageWrapper}>
        <img
          src={topImage}
          alt="Mental Health Visual"
          className={styles.image}
        />
      </Box>
    </Box>
  );
};

export default Top;
