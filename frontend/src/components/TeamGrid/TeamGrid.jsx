import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import styles from "./TeamGrid.module.css";

const TeamGrid = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/doctor")
      .then((res) => setDoctors(res.data)) // تعيين بيانات الدكاترة في الState
      .catch((err) => console.error(err));
  }, []);

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctorDetails/${doctorId}`); // التنقل إلى صفحة تفاصيل الدكتور
  };

  return (
    <Box className={styles.container}>
      <Grid container spacing={4} justifyContent="center">
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor._id}>
            <Card
              className={styles.card}
              sx={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%", 
                width: 300,
              }}
              onClick={() => handleDoctorClick(doctor._id)}
            >
              <Box className={styles.imageContainer}>
                <CardMedia
                  component="img"
                  className={styles.cardMedia}
                  image={doctor.avatar} 
                  alt={doctor.name}
                  sx={{
                    height: "100%", 
                    objectFit: "cover",
                  }}
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

              <CardContent sx={{ flexGrow: 1 }}>
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
                    handleDoctorClick(doctor._id);
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
