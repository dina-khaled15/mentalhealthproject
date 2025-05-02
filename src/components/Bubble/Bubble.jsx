import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import ScoreBoard from "./ScoreBoard";
import BubbleGrid from "./BubbleGrid";
import GameOver from "./GameOver";
import generateBubbles from "../../data/generateBubbles";

const BubbleGame = () => {
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [hitrm, setHitrm] = useState(Math.floor(Math.random() * 10));
  const [maxScore, setMaxScore] = useState(localStorage.getItem("maxScore") || 0);
  const [gameOver, setGameOver] = useState(false);
  const [bubbles, setBubbles] = useState(generateBubbles());

  useEffect(() => {
    const timerInt = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        clearInterval(timerInt);
        setGameOver(true);
        if (score > maxScore) {
          localStorage.setItem("maxScore", score);
          setMaxScore(score);
        }
      }
    }, 1000);
    return () => clearInterval(timerInt);
  }, [timer, score, maxScore]);

  const handleBubbleClick = (clickedNum) => {
    if (clickedNum === hitrm) {
      
      setScore(score + 10);
      setBubbles(generateBubbles());
      setHitrm(Math.floor(Math.random() * 10));
    } else {
     
    }
  };

  const restartGame = () => {
    setTimer(30);
    setScore(0);
    setBubbles(generateBubbles());
    setHitrm(Math.floor(Math.random() * 10));
    setGameOver(false);
  };

  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", backgroundColor: "#F8F7F4", padding: 0 }}>
      <Box sx={{ width: "100%", background: "#F2F0E9", borderRadius: "20px", boxShadow: "0 0 15px #ccc", padding: 2 }}>
        <ScoreBoard hitrm={hitrm} timer={timer} score={score} maxScore={maxScore} />
        <BubbleGrid bubbles={bubbles} onClick={handleBubbleClick} />
        {gameOver && <GameOver score={score} maxScore={maxScore} onRestart={restartGame} />}
      </Box>
    </Container>
  );
};

export default BubbleGame;
