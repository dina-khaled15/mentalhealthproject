import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import styles from "./ExpertTeam.module.css";

const ExpertTeamSection = () => {
  return (
    <Box className={styles.container}>
      <Container maxWidth="lg">
        <Box className={`${styles.buttonContainer} d-flex`}>
          <Button
            variant="outlined"
            startIcon={<LocalHospitalIcon />}
            className={`${styles.button} ${styles.buttonHover}`}
          >
            Our Experts
          </Button>
        </Box>

        {/* Responsive layout with Bootstrap */}
        <Box className={`row gx-5 gy-4 ${styles.contentContainer}`}>
          <Box className={`col-12 col-md-6 ${styles.titleContainer}`}>
            <Typography
              variant="h3"
              component="h2"
              className={`${styles.title} ${styles.subtitle}`}
            >
              Meet Our Expert Team of Doctors
            </Typography>
          </Box>

          <Box className={`col-12 col-md-6 ${styles.textContainer}`}>
            <Typography variant="body1" className={styles.text}>
              Experienced professionals specializing in mental health and
              caregiving, including counseling, psychiatric care, and family
              support, work together to provide compassionate, tailored care for
              individuals' unique needs.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpertTeamSection;
