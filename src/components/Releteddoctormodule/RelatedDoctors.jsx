import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import styles from "./RelatedDoctors.module.css";


const RelatedDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Liam Carter",
      specialty: "Grief Counseling, Substance Abuse, Addiction Recovery",
      image: require("../../images/7.png"),
    },
    {
      id: 2,
      name: "Dr. Sophia Hughes",
      specialty: "Adolescent Therapy, Bullying, Peer Relationships",
      image: require("../../images/8.png"),
    },
    {
      id: 3,
      name: "Dr. Marcus Lee",
      specialty: "Cognitive Behavioral Therapy (CBT), Process Work, Depression",
      image: require("../../images/9.png"),
    },
    {
      id: 4,
      name: "Dr. Isabella Collins",
      specialty: "Marriage Counseling, Relationship Therapy, Couples Therapy",
      image: require("../../images/d2.png"),
    },
  ];

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
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className={styles.card}
            >
              <CardMedia
                component="img"
                image={doctor.image}
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
                  {doctor.specialty}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedDoctors;