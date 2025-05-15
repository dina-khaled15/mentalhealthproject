import React from "react";
import { Box, Typography, Button } from "@mui/material";

const GameOver = ({ score, maxScore, onRestart }) => (
  <Box sx={{ textAlign: "center", marginTop: 3 }}>
    <Typography variant="h4" color="#000">انتهت اللعبة!</Typography>
    <Typography variant="h5" color="#000">نتيجتك: {score}</Typography>
    <Typography variant="h6" color="#000">أعلى نتيجة: {maxScore}</Typography>
    <Button
      variant="contained"
      onClick={onRestart}
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#333",
        },
        marginTop: 2,
      }}
    >
      العب تاني
    </Button>
  </Box>
);

export default GameOver;
