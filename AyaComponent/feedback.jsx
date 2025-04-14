import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
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
    image: img1,
  },
  {
    name: "Jamie Ludwig",
    text: "I’ve seen tremendous improvement in my mental health thanks to the care I received at Wellthy.",
    image: img2,
  },
  {
    name: "Sam Kim",
    text: "The group therapy sessions have been a game-changer. It’s comforting to know I’m not alone.",
    image: img3,
  },
  {
    name: "Emma Rickmann",
    text: "Wellthy’s approach to mental health is truly exceptional. My therapist has been incredibly supportive and insightful.",
    image: img4,
  },
  {
    name: "Liam Thompson",
    text: "I was struggling with severe anxiety, but Wellthy’s therapists have helped me manage it effectively. I can finally enjoy life again.",
    image: img5,
  },
];

const Feedback = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#fff",
        py: 20,
        px: 0,
        overflowX: "hidden",
      }}
    >
      <Box textAlign="center" mb={4}>
        <IconButton
          sx={{ border: "1px solid #fff", borderRadius: "999px", px: 3 }}
        >
          <ChatBubbleOutlineIcon sx={{ color: "#fff", mr: 1 }} />
          <Typography variant="button" color="#fff">
            Testimonials
          </Typography>
        </IconButton>
        <Typography variant="h3" fontWeight="bold" mt={3}>
          Our Clients Talk
        </Typography>
      </Box>

      {/* Cards Row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {feedback.map((item, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "80px",
              backgroundColor: "#fff",
              color: "#000",
              minHeight: 100,
              display: "flex",
              alignItems: "center",
              px: 3,
              py: 2,
              width: "400px",
              flexShrink: 0,
              boxSizing: "border-box",
            }}
          >
            <Avatar
              src={item.image}
              alt={item.name}
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="body2" gutterBottom>
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
