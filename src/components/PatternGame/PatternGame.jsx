import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import styles from "./PatternGame.module.css";

const colors = [
  "#FF6B6B", 
  "#198C4E", 
  "#3E32FA", 
  "#FFD93D", 
  "#4D1DA3", 
  "#47EAEB", 
  "#FF8C00", 
  "#8B4513", 
  "#32CD32", 
  "#C71585", 
  "#1B166E", 
  "#9992D1", 
];
const levels = [
  { level: 1, items: 2 },
  { level: 2, items: 3 },
  { level: 3, items: 4 },
  { level: 4, items: 5 },
  { level: 5, items: 6 },
];

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
    }, 5000);
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
          setCurrentLevel(currentLevel + 1);
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
        background: `linear-gradient(to bottom, #F2F0E9, #F8F7F4)`,
      }}
    >
      <Box
        className={styles.gameContainer}
        sx={{
          backgroundColor: "#F8F7F4", // اللون الفاتح
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          maxWidth: "600px", // تحديد أقصى عرض
        }}
      >
        <Typography
          variant="h4"
          className={styles.title}
          sx={{
            textAlign: "center",
            mb: 4,
            fontSize: "36px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          تتبع النمط - المستوى {currentLevel}
        </Typography>

        {/* عرض الألوان المختارة */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
          {userPattern.map((color, idx) => (
            <Box
              key={idx}
              sx={{
                backgroundColor: color,
                width: "80px",
                height: "80px",
                borderRadius: "8px",
              }}
            ></Box>
          ))}
        </Box>

        {/* عرض النمط الذي سيختاره اللاعب */}
        <Box className={styles.patternArea} sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          {showPattern
            ? pattern.map((color, idx) => (
                <Box
                  key={idx}
                  className={styles.patternItem}
                  sx={{
                    backgroundColor: color,
                    width: "100px",
                    height: "100px",
                    margin: "10px",
                    borderRadius: "8px",
                  }}
                ></Box>
              ))
            : userPattern.length < pattern.length && (
                <Typography sx={{ fontSize: "18px", color: "#000" }}>
                  الآن حان دورك لإعادة النمط!
                </Typography>
              )}
        </Box>

        {!showPattern && (
          <Box className={styles.optionsArea} sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            {colors.map((color, i) => (
              <Button
                key={i}
                className={styles.optionButton}
                onClick={() => handleSelect(color)}
                sx={{
                  backgroundColor: color,
                  width: "100px",
                  height: "100px",
                  borderRadius: "8px",
                }}
              />
            ))}
          </Box>
        )}

        {message && (
          <Typography
            sx={{
              fontSize: "20px",
              marginTop: "20px",
              color: "#000",
              textAlign: "center",
            }}
          >
            {message}
          </Typography>
        )}

        {currentLevel === 5 && message === "أحسنت! أنهيت جميع المستويات 🏆" && (
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={resetGame}
              sx={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                "&:hover": {
                  backgroundColor: "#45a049",
                },
              }}
            >
              إعادة اللعب
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PatternGame;

