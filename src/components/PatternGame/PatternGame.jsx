import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./PatternGame.module.css";
import { colors, levels } from "../../data/Pattern";
import PatternDisplay from "../PatternComponents/PatternDisplay";
import ColorOptions from "../PatternComponents/ColorOptions";
import UserPatternDisplay from "../PatternComponents/UserPatternDisplay";

const PatternGame = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [pattern, setPattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);
  const [showPattern, setShowPattern] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    generatePattern();
  }, [currentLevel]);

  const generatePattern = () => {
    const { items } = levels.find((l) => l.level === currentLevel);
    const newPattern = [];
    let availableColors = [...colors];
    for (let i = 0; i < items; i++) {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      newPattern.push(availableColors[randomIndex]);
      availableColors.splice(randomIndex, 1);
    }
    setPattern(newPattern);
    setShowPattern(true);
    setUserPattern([]);
    setMessage("");

    setTimeout(() => {
      setShowPattern(false);
    }, 3000);
  };

  const handleSelect = (color) => {
    setUserPattern((prev) => {
      const newPattern = [...prev, color];
      if (newPattern.length === pattern.length) {
        checkPattern(newPattern);
      }
      return newPattern;
    });
  };

  const checkPattern = (userInput) => {
    if (JSON.stringify(userInput) === JSON.stringify(pattern)) {
      setMessage("رائع! انتقل للمستوى التالي ✨");
      setTimeout(() => {
        if (currentLevel < 5) {
          setCurrentLevel((prev) => prev + 1);
        } else {
          setMessage("أحسنت! أنهيت جميع المستويات 🏆");
        }
      }, 1500);
    } else {
      setMessage("حاول مرة أخرى بابتسامة! 😊");
      setTimeout(() => {
        generatePattern();
      }, 1500);
    }
  };

  const resetGame = () => {
    setCurrentLevel(1);
    setMessage("");
    generatePattern();
  };

  return (
    <Box
      className={styles.container}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #F2F0E9, #F8F7F4)",
      }}
    >
      <Box
        className={styles.gameContainer}
        sx={{
          backgroundColor: "#F8F7F4",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          تتبع النمط - المستوى {currentLevel}
        </Typography>

        <UserPatternDisplay userPattern={userPattern} />
        <PatternDisplay pattern={pattern} showPattern={showPattern} userPattern={userPattern} />

        {!showPattern && (
          <ColorOptions colors={colors} onSelect={handleSelect} />
        )}

        {message && (
          <Typography sx={{ fontSize: "20px", marginTop: "20px", color: "#000" }}>
            {message}
          </Typography>
        )}

        {currentLevel === 5 && message === "أحسنت! أنهيت جميع المستويات 🏆" && (
          <Button
            variant="contained"
            onClick={resetGame}
            sx={{ marginTop: "20px", backgroundColor: "#4CAF50", "&:hover": { backgroundColor: "#45a049" } }}
          >
            إعادة اللعب
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default PatternGame;
