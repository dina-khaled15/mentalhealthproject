import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import doctorData from "../data/doctorData";
import styles from "./RelatedDoctors.module.css";

const RelatedDoctors = () => {
  const relatedDoctors = doctorData.slice(0, 4);

  return (
    <Box className={styles.container}>
      <Box className={styles.contentWrapper}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className={styles.title}
        >
          Related Doctors
        </Typography>

        <Box className={styles.cardContainer}>
          {relatedDoctors.map((doctor) => (
            <Link
              key={doctor.id}
              to={`/doctorDetails/${doctor.id}`}
              className={styles.cardLink}
              style={{ textDecoration: "none" }}
            >
              <Card className={styles.card}>
                <CardMedia
                  component="img"
                  image={doctor.avatar} 
                  alt={doctor.name}
                  className={styles.cardImage}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    gutterBottom
                    className={styles.doctorName}
                  >
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.doctorSpecialty}
                  >
                    {doctor.title} // Changed from doctor.role
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedDoctors;