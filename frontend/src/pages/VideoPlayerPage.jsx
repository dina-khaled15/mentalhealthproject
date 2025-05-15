import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";

const VideoPlayerPage = () => {
  const { videoId } = useParams(); 

  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/videos/${videoId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Video not found");
        return res.json();
      })
      .then((data) => {
        setVideoData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [videoId]);

  if (loading) return <Typography align="center">Loading...</Typography>;

  if (error)
    return (
      <Container sx={{ pt: 20, pb: 10, minHeight: "70vh" }}>
        <Typography variant="h4" align="center" sx={{ color: "#d32f2f" }}>
          {error}
        </Typography>
      </Container>
    );

  return (
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      <Navbar />
      <Container sx={{ pt: 12, pb: 10 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: "bold", color: "#333" }}>
          {videoData.title}
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              elevation={5}
              sx={{
                width: "100%",
                mb: 4,
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Box
                component="video"
                controls
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: 2,
                }}
              >
                <source src={videoData.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            maxWidth: "800px",
            mx: "auto",
            borderRadius: 2,
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            About this video
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
            {videoData.description2}
          </Typography>
        </Paper>
      </Container>
      <FooterComponent variant="dark" />
    </Box>
  );
};

export default VideoPlayerPage;
