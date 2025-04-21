import React from "react";
import {Box,Typography,Avatar,Card,CardContent,IconButton,} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import styles from "./Feedback.module.css";
const feedback = [
  {
    name: "Alex Martin",
    text: "Wellthy has been a lifeline for me. The therapists are incredibly supportive and professional.",
    image: require("../../images/1.png"),
  },
  {
    name: "Jamie Ludwig",
    text: "I’ve seen tremendous improvement in my mental health thanks to the care I received at Wellthy.",
    image: require("../../images/2.png"),
  },
  {
    name: "Sam Kim",
    text: "The group therapy sessions have been a game-changer. It’s comforting to know I’m not alone.",
    image: require("../../images/3.png"),
  },
  {
    name: "Emma Rickmann",
    text: "Wellthy’s approach to mental health is truly exceptional. My therapist has been incredibly supportive and insightful.",
    image: require("../../images/4.png"),
  },
  {
    name: "Liam Thompson",
    text: "I was struggling with severe anxiety, but Wellthy’s therapists have helped me manage it effectively. I can finally enjoy life again.",
    image: require("../../images/5.png"),
  },
];

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
            <Avatar src={item.image} alt={item.name} className={styles.avatar}/>
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
