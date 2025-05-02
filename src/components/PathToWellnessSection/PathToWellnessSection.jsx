import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import styles from "./PathToWellnessSection.module.css";

const PathToWellnessSection = ({ black }) => (
  <Box className={styles.container}>
    <Grid container spacing={9}>
      <Grid item xs={12} md={6}>
        <Box className={styles.imageContainer}>
          <img
            src={black}
            alt="black background"
            className={styles.backgroundImage}
            loading="lazy"
          />
          <Button variant="contained" className={styles.button}>
            # How it Works
          </Button>
          <Typography variant="h6" className={styles.imageText}>
            Your Path
            <br /> to Wellness
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className={styles.stepsContainer}>
        {[
          {
            step: "1",
            title: "Assessment",
            description:
              "Our experienced therapist will assess and understand your mental health needs through conversation and tests.",
          },
          {
            step: "2",
            title: "Sessions",
            description:
              "We will decide on regular counseling or group support and execute based on the assessment with a therapist.",
          },
          {
            step: "3",
            title: "Tracking",
            description:
              "The therapist assigned to your case will monitor and adjust your therapy session progress to make sure you get the best experience.",
          },
        ].map((item, index) => (
          <Box key={index} className={styles.stepItem}>
            <Box className={styles.stepNumber}>{item.step}</Box>
            <Box>
              <Typography variant="subtitle1" className={styles.stepTitle}>
                {item.title}
              </Typography>
              <Typography variant="body2" className={styles.stepDescription}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  </Box>
);

export default PathToWellnessSection;