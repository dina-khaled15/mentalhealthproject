import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import PolylineIcon from "@mui/icons-material/Polyline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const services = [
  {
    title: "Individual Therapy",
    description:
      "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs.",
    image: "/images/Picture1.png",
  },
  {
    title: "Online Counseling",
    description:
      "Convenient and confidential virtual therapy sessions that you can attend from the comfort of your home.",
    image: "/images/Picture2.png",
  },
  {
    title: "Group Therapy",
    description:
      "Supportive group sessions where individuals can share experiences and learn from another in a safe place.",
    image: "/images/Picture3.jpg",
  },
  {
    title: "Mindfulness and Meditation",
    description:
      "Techniques and practices to help you stay present, reduce stress, and enhance emotional regulation.",
    image: "/images/Picture.png",
  },
];

export default function MentalHealthServices() {
  return (
    <Box p={5} sx={{ fontFamily: "Manrope", backgroundColor: "#fff" }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box ml={{ xs: 4, md: 15 }} mt={5}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 10,
                textTransform: "none",
                mb: 2,
                fontFamily: "Manrope",
                borderColor: "#D3D3D3",
                color: "#222222",
                "&:hover": {
                  borderColor: "#D3D3D3",
                  backgroundColor: "rgba(211, 211, 211, 0.2)",
                },
              }}
              startIcon={<PolylineIcon />} // Add the icon inside the button
            >
              Consultation Services
            </Button>

            <Typography variant="h4" fontWeight="600" mb={2}>
              Mental Health Services
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={4}
              sx={{ maxWidth: 400 }}
            >
              A complete range of services to support mental health, including
              therapy, medication, and crisis help.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          {/* First Row */}
          <Grid container spacing={0}>
            {services.slice(0, 2).map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box ml={{ xs: 4, md: 10 }} mt={5}>
                  <Card elevation={1} sx={{ borderRadius: 3 }}>
                    {/* Display image if available, else show gray background */}
                    {service.image ? (
                      <CardMedia
                        component="img"
                        image={service.image}
                        alt={service.title}
                        sx={{
                          borderRadius: 3,
                          objectFit: "cover",
                          width: 270,
                          height: 200,
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          backgroundColor: "#D3D3D3",
                          width: "100%",
                          height: 200,
                        }}
                      />
                    )}
                  </Card>
                  <Box mt={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      fontFamily={"Manrope"}
                      fontSize={20}
                      sx={{
                        maxWidth: 250,
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily={"Manrope"}
                      fontWeight={400}
                      fontSize={14}
                      sx={{ maxWidth: 200 }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Second Row */}
          <Box ml={{ xs: 4, md: 10 }} mt={5}>
            <Grid container spacing={10}>
              {services.slice(2).map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box>
                    <Card
                      elevation={1}
                      sx={{
                        borderRadius: 3,
                        width:
                          service.title === "Group Therapy"
                            ? 270
                            : service.title === "Mindfulness and Meditation"
                            ? 280
                            : "100%",
                      }}
                    >
                      {service.image ? (
                        <CardMedia
                          component="img"
                          image={service.image}
                          alt={service.title}
                          sx={{
                            borderRadius: 3,
                            objectFit: "cover",
                            width: "100%",
                            height: 200,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            backgroundColor: "#D3D3D3",
                            width: "100%",
                            height: 200,
                          }}
                        />
                      )}
                    </Card>
                    <Box mt={1}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        fontFamily={"Manrope"}
                        fontSize={20}
                        sx={{ whiteSpace: "normal", wordBreak: "break-word" }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontFamily={"Manrope"}
                        fontWeight={400}
                        fontSize={15}
                        sx={{ maxWidth: 200 }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Box mt={5} display="flex" justifyContent="flex-end" gap={1}>
        <IconButton
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "100",
            borderRadius: "4px",
            border: "1px solid black",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            fontWeight: "100",
            border: "1px solid white",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}