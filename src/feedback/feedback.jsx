import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const feedback = [
  {
    name: "Alex Martin",
    text: "Wellthy has been a lifeline for me. The therapists are incredibly supportive and professional.",
    image: "/images/1.png",
  },
  {
    name: "Jamie Ludwig",
    text: "I’ve seen tremendous improvement in my mental health thanks to the care I received at Wellthy.",
    image: "/images/2.png",
  },
  {
    name: "Sam Kim",
    text: "The group therapy sessions have been a game-changer. It’s comforting to know I’m not alone.",
    image: "/images/3.png",
  },
  {
    name: "Emma Rickmann",
    text: "Wellthy’s approach to mental health is truly exceptional. My therapist has been incredibly supportive and insightful.",
    image: "/images/4.png",
  },
  {
    name: "Liam Thompson",
    text: "I was struggling with severe anxiety, but Wellthy’s therapists have helped me manage it effectively. I can finally enjoy life again.",
    image: "/images/5.png",
  },
];

const Feedback = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E", // الخلفية سوداء
        color: "#fff",
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <IconButton
        sx={{
          border: "1px solid #fff",
          borderRadius: "999px",
          px: 3,
        }}
      >
        <ChatBubbleOutlineIcon sx={{ color: "#fff", mr: 1 }} />
        <Typography variant="button" color="#fff">
          Testimonials
        </Typography>
      </IconButton>
      <Typography variant="h4" fontWeight="bold" mt={2} mb={4}>
        Our Clients Talk
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {feedback.map((item, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#fff",
              color: "#000",
              height: "150px",
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 2,
              width: "350px",
              boxSizing: "border-box",
              boxShadow: 4,
            }}
          >
            <Avatar
              src={item.image}
              alt={item.name}
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.text}
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
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
