import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faBook, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const HomeCards = () => {
  const navigate = useNavigate();
  const cards = [
    {
      title: (
        <>
          <FontAwesomeIcon
            icon={faGamepad}
            style={{ marginRight: 8, color: "#FF6347" }}
          />
          Fun Games
        </>
      ),
      description:
        "Enjoy games that help you learn and laugh at the same time!",
      buttonText: "Start Playing",
      path: "/games",
    },
    {
      title: (
        <>
          <FontAwesomeIcon
            icon={faBook}
            style={{ marginRight: 8, color: "#4682B4" }}
          />
          Lovely Stories
        </>
      ),
      description: "Read fun and meaningful stories.",
      buttonText: "Read a Story",
      path: "/stories",
    },
    {
      title: (
        <>
          <FontAwesomeIcon
            icon={faFaceSmile}
            style={{ marginRight: 8, color: "#32CD32" }}
          />
          Know Your Feelings
        </>
      ),
      description:
        "Discover the meaning of different feelings and how to handle them.",
      buttonText: "Explore Feelings",
      path: "/feelings",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        flexWrap: "nowrap",
        p: 4,
      }}
    >
      {cards.map((card, index) => (
        <Box item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#F8F7F4",
              color: "#000",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: "#000",
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontSize: "25px",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  fontSize: "17px",
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto", p: 2 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Manrope",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#4682B4",
                  },
                }}
                onClick={() => navigate(card.path)}
              >
                {card.buttonText}
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default HomeCards;
