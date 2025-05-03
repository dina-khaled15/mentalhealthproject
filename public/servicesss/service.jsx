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

import styles from "./service.module.css";
import services from "../service";


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
    <Box className={styles.arrowButtons} >
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