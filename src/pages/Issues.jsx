import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import FooterComponent from "../components/footer/contact";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CssBaseline,
} from "@mui/material";

import depressionImg from "../images/Depression.png";
import stressImg from "../images/Stress.png";
import anxietyImg from "../images/Anxeity.png";
import relationshipImg from "../images/Relationship.png";
import griefImg from "../images/Loss.jpg";
import selfconfidenceImg from "../images/Confidence.png";
import eatingImg from "../images/Eating.png";
import substanceImg from "../images/Abuse.png";
import socialImg from "../images/Social.png";

const services = [
  { title: "Depression", image: depressionImg, category: "Personal Issues" },
  { title: "Anxiety", image: anxietyImg, category: "Personal Issues" },
  { title: "Grief & Loss", image: griefImg, category: "Personal Issues" },
  {
    title: "Self-Confidence",
    image: selfconfidenceImg,
    category: "Personal Issues",
  },
  { title: "Stress Management", image: stressImg, category: "Work Issues" },
  {
    title: "Relationship Issues",
    image: relationshipImg,
    category: "Couple Issue",
  },
  { title: "Eating Disorder", image: eatingImg, category: "Medical Issues" },
  { title: "Substance Abuse", image: substanceImg, category: "Medical Issues" },
  { title: "Social Anxiety", image: socialImg, category: "Social Issues" },
];

const Issues = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    setServicesData(services);
  }, []);

  return (
    <>
      <Navbar />
      <CssBaseline />
      <Box sx={{ p: 3, fontFamily: "Manrope" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#000",
            mb: 4,
            fontSize: "40px",
            fontFamily: "Manrope",
          }}
        >
          Issues We Tackle
        </Typography>

        <Grid container spacing={2}>
          {servicesData.map((service, idx) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={idx}
              sx={{ mt: 4 }}
              margin={"auto"}
            >
              <Link
                to={`/service/${encodeURIComponent(service.title)}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 2,
                    boxShadow: 3,
                    overflow: "hidden",
                    fontFamily: "Manrope",
                    width: "90%",
                    display: "block",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      height: 200,
                      width: 430,
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      bgcolor: "rgba(224, 224, 224, 0.7)",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "0.7rem",
                        fontFamily: "Manrope",
                      }}
                    >
                      {service.category}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                        fontFamily: "Manrope",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
};

export default Issues;
