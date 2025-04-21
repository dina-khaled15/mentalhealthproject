import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import PolylineIcon from "@mui/icons-material/Polyline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import picture1 from "../../images/Picture1.png";
import picture2 from "../../images/Picture2.png";
import picture3 from "../../images/Picture3.jpg";
import picture4 from "../../images/Picture.png";
import styles from "./service.module.css";

const services = [
  {
    title: "Individual Therapy",
    description:
      "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs.",
    image: picture1,
  },
  {
    title: "Online Counseling",
    description:
      "Convenient and confidential virtual therapy sessions that you can attend from the comfort of your home.",
    image: picture2,
  },
  {
    title: "Group Therapy",
    description:
      "Supportive group sessions where individuals can share experiences and learn from another in a safe place.",
    image: picture3,
  },
  {
    title: "Mindfulness and Meditation",
    description:
      "Techniques and practices to help you stay present, reduce stress, and enhance emotional regulation.",
    image: picture4,
  },
];

export default function MentalHealthServices() {
  return (
    <div className={styles.cont}>
    <Box className={styles.container}>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Box className={styles.leftSection}>
            <Button 
             color="black"
              variant="outlined"
              className={styles.consultationButton}
              startIcon={<PolylineIcon />}
            >
              Consultation Services
            </Button>

            <Typography variant="h4" className={styles.mainTitle} >
              Mental Health<br />Services
            </Typography>

            <Typography variant="body1" className={styles.description}>
              A complete range of services to support mental health, including
              therapy, medication, and crisis help.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={5}>
            {services.slice(0, 2).map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box className={styles.cardContainer}>
                  <Card elevation={1} className={styles.card}>
                    {service.image ? (
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        className={styles.cardImage}
                      />
                    ) : (
                      <Box className={styles.placeholder} />
                    )}
                  </Card>
                  <Box className={styles.cardText}>
                    <Typography variant="subtitle1" className={styles.cardTitle}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className={styles.cardDescription}>
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box className={styles.secondRow}>
            <Grid container spacing={10}>
              {services.slice(2).map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box>
                    <Card elevation={1} className={styles.card}>
                      {service.image ? (
                        <CardMedia
                          component="img"
                          image={service.image}
                          alt={service.title}
                          className={styles.cardImage}
                        />
                      ) : (
                        <Box className={styles.placeholder} />
                      )}
                    </Card>
                    <Box className={styles.cardText}>
                      <Typography variant="subtitle1" className={styles.cardTitle}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" className={styles.cardDescription}>
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box className={styles.arrowButtons}>
    <IconButton className={styles.backButton}>
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
    <IconButton className={styles.forwardButton}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </Box>
  </div>
  );
}