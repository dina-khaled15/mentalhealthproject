import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Container } from "@mui/material";

const Bubble = () => {
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [hitrm, setHitrm] = useState(Math.floor(Math.random() * 10));
  const [maxScore, setMaxScore] = useState(
    localStorage.getItem("maxScore") || 0
  );
  const [gameOver, setGameOver] = useState(false);
  const [bubbles, setBubbles] = useState(generateBubbles());

  const correctSound = new Audio("/sounds/correct.mp3");
  const wrongSound = new Audio("/sounds/wrong.mp3");

  function generateBubbles() {
    const newBubbles = [];
    for (let i = 1; i <= 100; i++) {
      const count = Math.floor(Math.random() * 10);
      newBubbles.push(count);
    }
    return newBubbles;
  }

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

  const increaseScore = () => {
    setScore(score + 10);
  };

  const makeNewHit = () => {
    setHitrm(Math.floor(Math.random() * 10));
  };

  const handleBubbleClick = (clickedNum) => {
    if (clickedNum === hitrm) {
      correctSound.play();
      increaseScore();
      setBubbles(generateBubbles());
      makeNewHit();
    } else {
      wrongSound.play();
    }
  };

  const restartGame = () => {
    setTimer(30);
    setScore(0);
    setBubbles(generateBubbles());
    makeNewHit();
    setGameOver(false);
  };

  return (
    <Container maxWidth="xl"sx={{ display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", backgroundColor: "#F8F7F4",padding: 0, }} >
      <Box sx={{ width: "100%",maxWidth: "100%", background: "#F2F0E9",borderRadius: "20px",boxShadow: "0 0 15px #ccc", padding: 2,  }} >
        <Box sx={{ display: "flex", justifyContent: "space-around",backgroundColor: "#000", color: "#fff", padding: 2, flexWrap: "wrap",  }}>
          <Box sx={{ textAlign: "center", margin: 1 }}>
            <Typography variant="h6">الهدف</Typography>
            <Box
              sx={{
                backgroundColor: "#fff", 
                color: "#000", 
                fontWeight: "bold",
                fontSize: 24,
                borderRadius: 1,
                padding: 2,
                marginTop: 1,
              }}
            >
              {hitrm}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", margin: 1 }}>
            <Typography variant="h6">الوقت</Typography>
            <Box sx={{  backgroundColor: "#fff", color: "#000", fontWeight: "bold",fontSize: 24, borderRadius: 1,padding: 2,marginTop: 1, }} >
              {timer}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", margin: 1 }}>
            <Typography variant="h6">النتيجة</Typography>
            <Box sx={{ backgroundColor: "#fff", color: "#000", fontWeight: "bold",  fontSize: 24, borderRadius: 1, padding: 2, marginTop: 1,}} >
              {score}
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", margin: 1 }}>
            <Typography variant="h6">أعلى نتيجة</Typography>
            <Box
              sx={{  backgroundColor: "#fff",  color: "#000",  fontWeight: "bold",  fontSize: 24, borderRadius: 1, padding: 2, marginTop: 1, }}  >
              {maxScore}
            </Box>
          </Box>
        </Box>

        <Box sx={{   padding: 2,  textAlign: "center", backgroundColor: "#F2F0E9",  minHeight: "400px", display: "flex", flexWrap: "wrap", justifyContent: "center", overflow: "hidden", }} >
          {bubbles.map((count, index) => ( <Box key={index} className="bubble"  onClick={() => handleBubbleClick(count)} sx={{backgroundColor: "#fff",  color: "#000",  width: 60,  height: 60,  margin: 1, borderRadius: "50%", fontSize: 24, fontWeight: "bold", lineHeight: "60px", cursor: "pointer",transition: "all 0.2s", display: "flex", justifyContent: "center",  alignItems: "center",}} >
              {count}
            </Box>
          ))}
        </Box>
      </Box>

      {gameOver && (
        <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <Typography variant="h4" color="#000">
            انتهت اللعبة!
          </Typography>
          <Typography variant="h5" color="#000">
            نتيجتك: {score}
          </Typography>
          <Typography variant="h6" color="#000">
            أعلى نتيجة: {maxScore}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={restartGame}
            sx={{
              backgroundColor: "#000", 
              color: "#fff", 
              "&:hover": {
                backgroundColor: "#333", 
              },
            }}
          >
            العب تاني
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Bubble;
