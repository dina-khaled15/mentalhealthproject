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
    id: 1,
    name: "Dr. Sarah Thompson",
    title: "Anxiety Disorders / Cognitive Therapy",
    image: "/images/d2.png",
    link: "/doctorDetails/1",
  },
  {
    id: 2,
    name: "John Ramirez, LCSW",
    title: "Family Counseling / Stress Management",
    image: "/images/d1.png",
    link: "/doctorDetails/2",
  },
  {
    id: 3,
    name: "Emily Chen, PsyD",
    title: "Grief Recovery / PTSD",
    image: "/images/d4.png",
    link: "/doctorDetails/3",
  },
  {
    id: 4,
    name: "Dr. Liam Carter",
    title: "Child & Adolescent Therapy",
    image: "/images/d6.png",
    link: "/doctorDetails/4",
  },
  {
    id: 5,
    name: "Dr. Sophia Hughes",
    title: "Mindfulness & Trauma Therapy",
    image: "/images/d5.png",
    link: "/doctorDetails/5",
  },
  {
    id: 6,
    name: "Dr. Marcus Lee",
    title: "Cognitive Behavioral Therapy (CBT)",
    image: "/images/d7.png",
    link: "/doctorDetails/6",
  },
];

const TeamGrid = () => {
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctorDetails/${doctorId}`);
  };

  return (
    <Box sx={{ p: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        color="black" // ← هذا جيد بالفعل
        fontFamily="Manrope"
      >
        Meet Our Expert Team of Doctors
      </Typography>

      <Grid container spacing={4}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={3} key={doctor.id}>
            <Card
              sx={{
                fontFamily: "Manrope",
                maxWidth: 292,
                height: 590,
                borderRadius: "0",
                boxShadow: "none",
                padding: 0,
                margin: "auto",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Manrope",
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
                    fontFamily: "Manrope",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "black",
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
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: 600,
                    marginTop: 1,
                    color: "black", // ← تم تعديل اللون
                  }}
                >
                  {doctor.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Manrope",
                    color: "black", // ← تم تعديل اللون
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDoctorClick(doctor.id);
                  }}
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: "black",
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
                  More-Details
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
