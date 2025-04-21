import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  CardMedia,
  Paper,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CardMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(39);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const cardImages = [
  require("../images/cat1.jpg"),
  require("../images/cat2.jpg"),
  require("../images/cat3.jpg"),
  require("../images/cat4.jpg"),
  require("../images/cat5.jpg"),
  require("../images/cat6.jpg"),
  require("../images/cat7.jpg"),
];

  const shuffleCards = () => {
    const deck = [...cardImages, ...cardImages];
    deck.sort(() => Math.random() - 0.5);
    return deck.map((image, index) => ({image,flipped: false, id: index, matched: false,}));
  };

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  useEffect(() => {
    let interval = null;
    if (!gameOver && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setGameOver(true);
    }
    return () => clearInterval(interval);
  }, [gameOver, timer]);

  const flipCard = (index) => {
    if (
      flippedIndices.length === 2 ||cards[index].flipped ||cards[index].matched || gameOver
    )
      return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    setFlippedIndices((prev) => [...prev, index]);

    if (flippedIndices.length === 1) {
      const [firstIndex] = flippedIndices;
      const secondIndex = index;

      if (newCards[firstIndex].image === newCards[secondIndex].image) {
        newCards[firstIndex].matched = true;
        newCards[secondIndex].matched = true;
        setMatchedPairs((prev) => [...prev, newCards[firstIndex].image]);
        setScore((prevScore) => prevScore + 1);
      } else {
        setTimeout(() => {
          newCards[firstIndex].flipped = false;
          newCards[secondIndex].flipped = false;
          setCards([...newCards]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
      setFlippedIndices([]);
    }
  };

  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setScore(0);
    setTimer(15);
    setGameOver(false);
  };

  useEffect(() => {
    if (matchedPairs.length === cardImages.length) {
      setGameOver(true);
    }
  }, [matchedPairs]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8F7F4", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 3,
          borderRadius: 4,
          textAlign: "center",
          backgroundColor: "#F2F0E9", 
          width: "100%",
          maxWidth: 1000,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#000", 
          }}
        >
          🃏 Card Matching Game
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#000", 
            }}
          >
            Moves: {moves}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000",
            }}
          >
            <AccessTimeIcon sx={{ verticalAlign: "middle" }} /> Time: {timer}s
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000", 
            }}
          >
            Score: {score}
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item key={card.id}>
              <Card
                onClick={() => flipCard(index)}
                sx={{
                  width: 100,
                  height: 150,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: 2,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  backgroundColor:
                    card.flipped || card.matched ? "transparent" : "#F2F0E9", 
                  transition: "transform 0.3s",
                  transform: card.flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {card.flipped || card.matched ? (
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                    image={card.image}
                    alt="card"
                  />
                ) : (
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000", 
                    }}
                  >
                    ?
                  </Typography>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        {gameOver && (
          <Box sx={{ marginTop: 4 }}>
            <Typography
              variant="h4"
              color={
                matchedPairs.length === cardImages.length
                  ? "#000" 
                  : "#000" 
              }
              sx={{ fontWeight: "bold", mb: 1 }}
            >
              {matchedPairs.length === cardImages.length
                ? "🎉 You Win!"
                : "⏰ Time's Up!"}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#000", 
              }}
            >
              Final Score: {score}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                fontWeight: "bold",
                borderRadius: "20px",
                backgroundColor: "#000", 
                color: "#fff", 
                "&:hover": {
                  backgroundColor: "#333", 
                },
              }}
              onClick={resetGame}
            >
              Play Again
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CardMatchGame;
