import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import styles from "./TeamGrid.module.css";


const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    title: "Anxiety Disorders / Cognitive Therapy",
    image: require("../../images/d2.png"),
    link: "/doctorDetails/1",
  },
  {
    id: 2,
    name: "John Ramirez, LCSW",
    title: "Family Counseling / Stress Management",
    image: require("../../images/d1.png"),
    link: "/doctorDetails/2",
  },
  {
    id: 3,
    name: "Emily Chen, PsyD",
    title: "Grief Recovery / PTSD",
    image: require("../../images/d4.png"),
    link: "/doctorDetails/3",
  },
  {
    id: 4,
    name: "Dr. Liam Carter",
    title: "Child & Adolescent Therapy",
    image: require("../../images/d6.png"),
    link: "/doctorDetails/4",
  },
  {
    id: 5,
    name: "Dr. Sophia Hughes",
    title: "Mindfulness & Trauma Therapy",
    image: require("../../images/d5.png"),
    link: "/doctorDetails/5",
  },
  {
    id: 6,
    name: "Dr. Marcus Lee",
    title: "Cognitive Behavioral Therapy (CBT)",
    image: require("../../images/d7.png"),
    link: "/doctorDetails/6",
  },
];


const TeamGrid = () => {
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctorDetails/${doctorId}`);
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Meet Our Expert Team of Doctors
      </Typography>

      <Grid container spacing={4}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={3} key={doctor.id}>
            <Card className={styles.card}>
              <Box className={styles.imageContainer}>
                <CardMedia
                  component="img"
                  className={styles.cardMedia}
                  image={doctor.image}
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={styles.doctorName}
                >
                  {doctor.name}
                </Typography>
                <Typography variant="body2" className={styles.doctorTitle}>
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
                >
                  More-Details
                  <ArrowForwardIcon sx={{ fontSize: 20 }} />
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
