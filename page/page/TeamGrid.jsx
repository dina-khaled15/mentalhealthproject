import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Sarah Thompson",
    title: "Anxiety Disorders / Cognitive Therapy",
    image: "src/page/d2.png",
  },
  {
    name: "John Ramirez, LCSW",
    title: "Family Counseling / Stress Management",
    image: "src/page/d1.png",
  },
  {
    name: "Emily Chen, PsyD",
    title: "Grief Recovery / PTSD",
    image: "src/page/d4.png",
  },
  {
    name: "Dr. Liam Carter",
    title: "Child & Adolescent Therapy",
    image: "src/page/d6.png",
  },
  {
    name: "Dr. Sophia Hughes",
    title: "Mindfulness & Trauma Therapy",
    image: "src/page/d5.png",
  },
  {
    name: "Dr. Marcus Lee",
    title: "Cognitive Behavioral Therapy (CBT)",
    image: "src/page/d7.png",
  },
  // {
  //   name: "Dr. Isabella Collins",
  //   title: "Depression & Mood Disorders",
  //   image: "src/page/d1.png",
  // },
  // {
  //   name: "Dr. Ethan Ross",
  //   title: "Crisis Intervention / Bipolar Disorder",
  //   image: "src/page/d1.png",
  // },
];

const TeamGrid = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="black">
        Meet Our Expert Team of Doctors
      </Typography>
      <Grid container spacing={4}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 292,
                height: 590,
                borderRadius: "0",
                boxShadow: "none",
                padding: 0,
                margin: "auto",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                  height: 400,
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="400"
                  image={doctor.image}
                  alt={doctor.name}
                  sx={{ borderRadius: "20px" }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <IconButton sx={{ color: "white" }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>

              <CardContent sx={{ padding: "16px 0 16px 0" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "Manrope", fontWeight: 600, marginTop: 1 }}
                >
                  {doctor.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Manrope",
                    color: "text.secondary",
                    fontSize: 14,
                    marginTop: 2,
                    textAlign: "center",
                    paddingX: 1,
                  }}
                >
                  {doctor.title}
                </Typography>
              </CardContent>

              <Box display="flex" justifyContent="center">
                <Button
                  onClick={handleBookingClick}
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: "#333333",
                    color: "white",
                    borderRadius: "5px",
                    width: 200,
                    height: 46,
                    fontFamily: "Manrope",
                    marginTop: 1,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  Book counseling
                  <ArrowForwardIcon sx={{ fontSize: 20 }} />
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamGrid;
