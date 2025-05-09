import React from "react";
import { Box, Typography, Avatar, Card, CardContent, IconButton, } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import styles from "./FeedBack.module.css";
import feedback from "../../data/feedback";

const Feedback = () => {
  return (
    <Box className={styles.container}>
      <IconButton className={styles.iconButton}>
        <ChatBubbleOutlineIcon className={styles.icon} />
        <Typography variant="button" color="#fff">
          Testimonials
        </Typography>
      </IconButton>
      <Typography variant="h4" className={styles.title}>
        Our Clients Talk
      </Typography>

      <Box className={styles.cardsContainer}>
        {feedback.map((item, index) => (
          <Card key={index} className={styles.card}>
            <Avatar src={item.image} alt={item.name} className={styles.avatar} />
            <CardContent className={styles.cardContent}>
              <Typography variant="body2" gutterBottom className={styles.text}>
                {item.text}
              </Typography>
              <Typography variant="subtitle1" className={styles.name}>
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Feedback;
