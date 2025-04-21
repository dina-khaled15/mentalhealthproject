import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/navmodule/Navbar";
import FooterComponent from "../components/footer/contact";
import "../App.css";

const storyVideos = [
  {
    title: "Story Video 1",
    image: "./assests/video.jpg",
    description: `This video tells the story of Yazan and his friend Anas, who has ADHD.
       Yazan learns that Anas struggles to focus and gets easily excited, 
       but instead of getting upset, he helps Anas stay on track with kindness and patience.
      The video highlights the importance of understanding differences, supporting friends, 
      and embracing the uniqueness of others.`,
    link: "/story/video1",
  },
  {
    title: "Story Video 2",
    image: "./assests/video.jpg",
    description:
      "This is the description for story video 2. It explains what the video is about.",
    link: "/story/video2",
  },
  {
    title: "Story Video 3",
    image: "./assests/video.jpg",
    description:
      "This is the description for story video 3. It explains what the video is about.",
    link: "/story/video3",
  },
];

const StoryVideoCard = ({ title, image, description, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: 450,
          boxShadow: 3,
          borderRadius: 4,
          mx: "auto",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

const StoryVideosPage = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ pt: 8, pb: 12 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            mb: 4,
            color: "#333",
            fontWeight: 700,
          }}
        >
          Our Story Videos
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            maxWidth: "1000px",
            gap: 6,
            mx: "auto",
          }}
        >
          {storyVideos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StoryVideoCard {...video} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterComponent variant="dark" />
    </Box>
  );
};

export default StoryVideosPage;
