// GameOver.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const GameOver = ({ score, resetGame, gameOver, matchedPairs, cardImages }) => {
  return (
    gameOver && (
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
        <Typography variant="h6" sx={{ color: "#000" }}>
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
    )
  );
};

export default GameOver;
