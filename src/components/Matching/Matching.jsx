import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import { cardImages } from "../data/cardImages"; // استيراد بيانات الصور
import CardComponent from './Card'; // استيراد مكون البطاقة
import GameControls from './GameControls'; // استيراد مكون التحكم باللعبة
import GameOver from './GameOver'; // استيراد مكون انتهاء اللعبة

const CardMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(39);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shuffleCards = () => {
    const deck = [...cardImages, ...cardImages];
    deck.sort(() => Math.random() - 0.5);
    return deck.map((image, index) => ({ image, flipped: false, id: index, matched: false }));
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
    if (flippedIndices.length === 2 || cards[index].flipped || cards[index].matched || gameOver) return;

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
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F8F7F4", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 4 }}>
      <Paper elevation={4} sx={{ padding: 3, borderRadius: 4, textAlign: "center", backgroundColor: "#F2F0E9", width: "100%", maxWidth: 1000 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#000" }}>
          🃏 Card Matching Game
        </Typography>

        <GameControls moves={moves} timer={timer} score={score} />

        <Grid container spacing={2} justifyContent="center">
          {cards.map((card, index) => (
            <Grid item key={card.id}>
              <CardComponent card={card} index={index} flipCard={flipCard} />
            </Grid>
          ))}
        </Grid>

        <GameOver score={score} resetGame={resetGame} gameOver={gameOver} matchedPairs={matchedPairs} cardImages={cardImages} />
      </Paper>
    </Box>
  );
};

export default CardMatchGame;
