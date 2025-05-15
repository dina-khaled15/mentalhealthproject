import React from "react";
import { Typography, Chip, Box, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import benefitImg from "../../images/benefit.png";
import styles from "./Benefit.module.css";

const Benefit = () => {
  return (
    <Box className={`${styles.container} ${styles.containerRow}`}>
      <Box className={styles.imageContainer}>
        <Box className={styles.imageWrapper}>
          <Box component="img" src={benefitImg} alt="benefit" className={styles.image} />

          <Paper elevation={3} className={`${styles.overlay} ${styles.overlayShow}`}>
            <Typography className={styles.overlayTitle}>
              Experience Professionals
            </Typography>
            <Typography variant="body2" className={styles.overlayDescription}>
              Our team is made up of skilled and compassionate mental health
              experts with years of experience in providing effective care.
            </Typography>
          </Paper>
        </Box>
      </Box>

      <Box className={styles.textContent}>
        <Chip icon={<FavoriteIcon />} label="Benefits" className={styles.chip} />
        <Typography variant="h4" className={styles.title}>
          The Benefits of Choosing<br /> Wellthy
        </Typography>
        <Typography variant="body1" className={styles.description}>
          Wellthy combines experienced professionals, personalized care,
          and a supportive environment to provide comprehensive mental
          health services that meet your unique needs, ensuring privacy,
          comfort, and lasting support.
        </Typography>
        <Box component="ul">
          <Typography variant="h4" className={styles.titlee}>
            Experience Professionals
          </Typography>
          {[
            "Personalized Care",
            "Confidential and Safe",
            "Comprehensive Service",
            "Supportive Community",
          ].map((item, index) => (
            <Box
              key={index}
              component="li"
              className={`${styles.listItem} ${
                index === 0 ? styles.listItemStrong : ""
              }`}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Benefit;
