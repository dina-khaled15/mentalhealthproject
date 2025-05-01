import React from "react";
import { Box, Typography, Button } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoltIcon from "@mui/icons-material/Bolt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DiamondIcon from "@mui/icons-material/Diamond";

import styles from "./Principles.module.css";
import values from "../../components/data/principlesData";

// Map string names to icon components
const iconMap = {
  AccessTime: <AccessTimeIcon sx={{ fontSize: 30 }} />,
  QuestionAnswer: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
  Bolt: <BoltIcon sx={{ fontSize: 30 }} />,
  Lightbulb: <LightbulbIcon sx={{ fontSize: 30 }} />,
};

export default function PrinciplesSection() {
  return (
    <Box className={styles.container}>
      {/* Title Section */}
      <Box className={styles.titleBox}>
        <Button
          startIcon={<DiamondIcon />}
          variant="outlined"
          className={styles.outlinedButton}
          sx={{ fontFamily: "Manrope" }}
        >
          Values
        </Button>
        <Typography variant="h3" fontWeight={600} lineHeight={1.2} sx={{ fontFamily: "Manrope" }}>
          Principles That
        </Typography>
        <Typography variant="h3" fontWeight={600} lineHeight={1.2} sx={{ fontFamily: "Manrope" }}>
          Drives Us
        </Typography>
      </Box>

      {/* Values Section */}
      <Box className={styles.gridBox}>
        {values.map((item, index) => (
          <Box key={index} className={styles.card} sx={{ fontFamily: "Manrope" }}>
            <Box className={styles.iconContainer}>
              {iconMap[item.icon] || null}
            </Box>
            <Typography variant="h6" fontWeight={600}>
              {item.title}
            </Typography>
            <Typography variant="body1" color="#A0A0A0">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
