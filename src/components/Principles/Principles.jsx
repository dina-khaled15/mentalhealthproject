import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoltIcon from "@mui/icons-material/Bolt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DiamondIcon from "@mui/icons-material/Diamond";

import styles from "./Principles.module.css";

const values = [
  {
    icon: <AccessTimeIcon sx={{ fontSize: 30 }} />,
    title: "24/7 Customer Support",
    description:
      "Our team is here 24/7 to assist with any questions or concerns.",
  },
  {
    icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
    title: "Direct Access to Experts",
    description:
      "Connect with licensed professionals for personalized advice and answers.",
  },
  {
    icon: <BoltIcon sx={{ fontSize: 30 }} />,
    title: "Timely Responses",
    description:
      "We respond quickly and efficiently to ensure you get the help you need.",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 30 }} />,
    title: "Tailored Solutions",
    description: "We offer tailored mental health services to meet your needs.",
  },
];

export default function PrinciplesSection() {
  return (
    <Box className={styles.container}>
      {/* Title Section */}
      <Box className={styles.titleBox}>
        <Button
          startIcon={<DiamondIcon />}
          variant="outlined"
          className={styles.outlinedButton}
        >
          Values
        </Button>
        <Typography variant="h3" fontWeight={600} lineHeight={1.2}>
          Principles That
        </Typography>
        <Typography variant="h3" fontWeight={600} lineHeight={1.2}>
          Drives Us
        </Typography>
      </Box>

      {/* Values Section */}
      <Box className={styles.gridBox}>
        {values.map((item, index) => (
          <Box key={index} className={styles.card}>
            <Box className={styles.iconContainer}>{item.icon}</Box>
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
