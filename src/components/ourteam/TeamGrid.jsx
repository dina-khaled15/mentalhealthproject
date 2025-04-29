import React from "react";
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import styles from "./TeamGrid.module.css";
import doctorData from "../data/doctorData";


const TeamGrid = () => {
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctorDetails/${doctorId}`);
  };

  return (
    <Box className={styles.container}>
      <Grid container spacing={4} justifyContent="center">
        {doctorData.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={doctor.id}>
            <Card className={styles.card} sx={{ cursor: "pointer" }} onClick={() => handleDoctorClick(doctor.id)}>
              <Box className={styles.imageContainer}>
                <CardMedia
                  component="img"
                  className={styles.cardMedia}
                  image={doctor.avatar}
                  alt={doctor.name}
                />
                <Box className={`${styles.overlay} ${styles.overlayVisible}`}>
                  <IconButton sx={{ color: "white" }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>

              <CardContent className={styles.cardContent}>
                <Typography gutterBottom variant="h6" component="div" className={styles.doctorName}>
                  {doctor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={styles.doctorTitle}>
                  {doctor.title}
                </Typography>
              </CardContent>

              <Box className={styles.buttonContainer}>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDoctorClick(doctor.id);
                  }}
                  variant="contained"
                  disableElevation
                  className={styles.button}
                  endIcon={<ArrowForwardIcon />}
                >
                  More Details
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamGrid;
