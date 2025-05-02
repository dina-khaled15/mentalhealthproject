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
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";
import "../App.css";
import storyVideos from "../data/video";
const StoryVideoCard = ({ title, image, description1, videoId }) => {
  return (
    <Link to={`/story/${videoId}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: 300,
          maxHeight:300,
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
            {description1}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
const StoryVideosPage = () => {
  const videos = Object.values(storyVideos); 

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
          {videos.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StoryVideoCard {...video} videoId={`video${index + 1}`} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterComponent variant="dark" />
    </Box>
  );
};

export default StoryVideosPage;
