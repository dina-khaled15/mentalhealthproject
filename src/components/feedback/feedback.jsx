import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
<<<<<<< HEAD
import styles from "./FeedBack.module.css";
=======

import styles from "../FeedBack/FeedBack.module.css";
import feedback from "../../data/FeedBack";
>>>>>>> ecb0efb2c3774c9ed7715f58a9916dcd1bed59dc

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/feedback")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error("Error fetching feedback:", err));
  }, []);

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
        {feedbacks.map((item, index) => (
          <Card key={index} className={styles.card}>
            <Avatar
              src={item.image}
              alt={item.name}
              className={styles.avatar}
            />
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
