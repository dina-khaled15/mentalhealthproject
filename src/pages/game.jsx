import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";
import axios from "axios"; 

const GameCard = ({ title, image, link }) => (
  <Link to={link} style={{ textDecoration: "none" }}>
    <Card
      sx={{
        maxWidth: 450,
        boxShadow: 3,
        borderRadius: 4,
        mx: "auto",
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
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
        <Typography variant="h6" component="div" textAlign="center">
          {title}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

const GamesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/game") 
      .then((res) => setGames(res.data))
      .catch((err) => console.error("Failed to fetch games:", err));
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          bgcolor: "#fff",
          pt: 20,
          pb: 12,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", mb: 4, color: "black" }}
        >
          Hello Heroes! let's have fun
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: "1000px", gap: 6 }}
        >
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <GameCard
                title={game.title}
                image={game.image}
                link={game.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: 4 }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
};

export default GamesPage;
