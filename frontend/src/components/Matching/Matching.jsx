import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Grid, Card, CardMedia } from "@mui/material";
import axios from "axios";

const CardMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [cardImages, setCardImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/card-images");
        setCardImages(res.data);
      } catch (err) {
        console.error("error in fetch", err);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (cardImages.length > 0) {
      const deck = [...cardImages, ...cardImages];
      deck.sort(() => Math.random() - 0.5);
      const preparedCards = deck.map((img, idx) => ({
        image: img.imageUrl,
        flipped: false,
        id: idx,
        matched: false,
      }));
      setCards(preparedCards);
    }
  }, [cardImages]);

  useEffect(() => {
    let interval = null;
    if (!gameOver && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setGameOver(true);
    }
    return () => clearInterval(interval);
  }, [timer, gameOver]);

  const flipCard = (index) => {
    if (
      flippedIndices.length === 2 ||
      cards[index].flipped ||
      cards[index].matched ||
      gameOver
    )
      return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIndex, secondIndex] = newFlipped;
      if (newCards[firstIndex].image === newCards[secondIndex].image) {
        newCards[firstIndex].matched = true;
        newCards[secondIndex].matched = true;
        setMatchedPairs((prev) => [...prev, newCards[firstIndex].image]);
        setScore((prev) => prev + 1);
        setFlippedIndices([]);
      } else {
        setTimeout(() => {
          newCards[firstIndex].flipped = false;
          newCards[secondIndex].flipped = false;
          setCards([...newCards]);
          setFlippedIndices([]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    const deck = [...cardImages, ...cardImages];
    deck.sort(() => Math.random() - 0.5);
    const preparedCards = deck.map((img, idx) => ({
      image: img.imageUrl,
      flipped: false,
      id: idx,
      matched: false,
    }));
    setCards(preparedCards);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setScore(0);
    setTimer(39);
    setGameOver(false);
  };

  useEffect(() => {
    if (matchedPairs.length === cardImages.length) {
      setGameOver(true);
    }
  }, [matchedPairs, cardImages]);

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
          sx={{ fontWeight: "bold", mb: 2, color: "#000" }}
        >
          🃏 Card Matching Game
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          ⏱ Time Left: {timer} | 🎯 Moves: {moves} | ✅ Score: {score}
        </Typography>

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
                  <Typography variant="h4" sx={{ color: "#000" }}>
                    ?
                  </Typography>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        {gameOver && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>
              🎉 Game Over! Your Score: {score}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <button
                onClick={resetGame}
                style={{
                  padding: "10px 20px",
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                🔄 Play Again
              </button>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default CardMatchGame;
