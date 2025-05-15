import React from "react";
import { Container } from "react-bootstrap";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import Hero from "../images/Hero.png";
import styles from "./HeroSection.module.css";

function CustomPlayArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <div className="d-md-flex justify-content-center">
      <Container fluid={false} className="p-3">
        <Box className={styles.heroSection}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Find Peace of Mind
              </Typography>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                with Wellthy
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" className={styles.description}>
                Experience a comprehensive holistic approach to mental health care, fostering balance, tranquility, resilience, and renewed vitality in every aspect of your life.
              </Typography>

              <Stack direction="row" spacing={2} mt={2}>
                <Button variant="contained" className={styles.primaryBtn} startIcon={<CustomPlayArrowIcon />}>Start your journey</Button>
                <Button variant="text" className={styles.textBtn} startIcon={<CustomPlayArrowIcon />}>How can we help you start fresh?</Button>
              </Stack>
            </Grid>
          </Grid>

          <Box component="img" src={Hero} alt="Happy Woman" className={styles.heroImage} />
          <Box className={styles.centerText}>
            <Typography variant="h2" fontWeight="bold">WELLTHY</Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
