import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Visibility, Groups, Business } from "@mui/icons-material";
import visionImage from "../../images/vission.png";
import styles from "./VisionMission.module.css";

const VisionMission = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Button
          variant="outlined"
          className={styles.outlinedBtn}
          startIcon={<Business className={styles.icon} />}
        >
          Vision & Mission
        </Button>
        <Typography variant="h3" className={styles.title}>
          Empowering Global Mental Well-Being <br />
          Through Accessible Care
        </Typography>
      </Box>

      <Box className={styles.visionMissionWrapper}>
        <Box
          component="img"
          src={visionImage}
          alt="online therapy"
          className={styles.visionImage}
        />

      <Box className={styles.visionContent}>
        <Avatar className={styles.avatar}>
          <Visibility />
        </Avatar>

        <Typography variant="h3" className={styles.title}>
          Our Vision
        </Typography>

          <Typography variant="body1" className={styles.text}>
            To be the leading mental health platform, providing accessible,
            compassionate, and innovative care for emotional and mental
            well-being worldwide.
          </Typography>
        </Box>
      </Box>

      <Box className={styles.missionSection}>
        <Box className={styles.missionTitle}>
          <Avatar className={styles.avatar}>
            <Groups />
          </Avatar>

          <Typography variant="h3" className={styles.title}>
            Our Mission
          </Typography>
        </Box>

        <Typography variant="body1" className={styles.text}>
          To support individuals in achieving mental and emotional balance
          through tailored therapy, education, ensuring everyone has access to
          professional care.
        </Typography>
      </Box>
    </Box>
  );
};

export default VisionMission;
