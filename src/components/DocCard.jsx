import * as React from "react";
import {Card,CardContent,CardMedia,Typography,Button,Box,IconButton,} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

export default function DoctorCard({ name, des, img }) {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <Card
      sx={{
        maxWidth: 292,
        height: 590,
        borderRadius: "0",
        boxShadow: "none",
        padding: 0,
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
          image={img}
          alt="Doctor"
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
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Manrope",
            color: "text.secondary",
            fontSize: 14,
            marginTop: 2,
          }}
        >
         {des}
        </Typography>
      </CardContent>

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
    </Card>
  );
}
