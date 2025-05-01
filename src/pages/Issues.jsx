import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";
import "../App.css";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Card, CardMedia, CssBaseline } from "@mui/material";
import IssuesData from "../components/data/Issues";

const Issues = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    setServicesData(Object.entries(IssuesData));
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
          {servicesData.map(([key, service], idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} align="center" sx={{ mt: 4, ml: 17 }}>
              <Link to={`/details/${encodeURIComponent(service.title)}`} style={{ textDecoration: "none" }}>
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
                    image={service.mainImage}
                    alt={service.title}
                    sx={{ height: 200, width: 430, objectFit: "cover" }}
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

                  <Box sx={{ position: "absolute", bottom: 16, width: "100%", textAlign: "center" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                        fontFamily: "Manrope",
                        fontSize: "18px",
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
