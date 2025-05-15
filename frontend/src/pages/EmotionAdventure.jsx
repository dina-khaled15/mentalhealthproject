import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress } from "@mui/material";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import EmotionSelection from "../components/emotions/EmotionSelection";
import EmotionDescription from "../components/emotions/EmotionDescription";
import EmotionQuiz from "../components/emotions/EmotionQuiz";
import EmotionScore from "../components/emotions/EmotionScore";

const EmotionAdventure = () => {
  const [emotions, setEmotions] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentEmotion, setCurrentEmotion] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchEmotions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/Emotions"); 
        const data = response.data.data;

        const mapped = {};
        data.forEach((e) => {
          mapped[e.name] = {
            emoji: e.emoji,
            description: e.description,
            questions: e.questions,
          };
        });

        setEmotions(mapped);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching emotions:", error);
        setLoading(false);
      }
    };

    fetchEmotions();
  }, []);

  const handleEmotionClick = (emotionId) => {
    setCurrentEmotion(emotionId);
    setCurrentQuestion(0);
    setScore(0);
    setShowQuiz(false);
    setShowScore(false);
  };

  const handleStartQuiz = () => setShowQuiz(true);

  const handleAnswer = (index) => {
    const correct = emotions[currentEmotion].questions[currentQuestion].correct;
    if (index === correct) setScore((s) => s + 1);

    setTimeout(() => {
      const next = currentQuestion + 1;
      if (next < emotions[currentEmotion].questions.length) {
        setCurrentQuestion(next);
      } else {
        setShowQuiz(false);
        setShowScore(true);
      }
    }, 800);
  };

  const restart = () => {
    setCurrentEmotion(null);
    setShowScore(false);
  };

  if (loading) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography>Loading emotions...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: 2,
        padding: "20px",
        textAlign: "center",
        backgroundColor: "white",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "bold",
          fontSize: "44px",
          mb: 4,
          width: "100%",
          gap: 3,
          fontFamily: "Manrope",
        }}
      >
        <TheaterComedyIcon sx={{ color: "#ec4899", fontSize: 70 }} />
        Welcome to Emotion Adventure!
      </Typography>

      {!currentEmotion && (
        <EmotionSelection
          emotions={emotions}
          onSelect={handleEmotionClick}
        />
      )}

      {currentEmotion && !showQuiz && !showScore && (
        <EmotionDescription
          emotionData={emotions[currentEmotion]}
          emotionName={currentEmotion}
          onStart={handleStartQuiz}
          onBack={restart}
        />
      )}

      {showQuiz && (
        <EmotionQuiz
          questionData={emotions[currentEmotion].questions[currentQuestion]}
          questionIndex={currentQuestion}
          total={emotions[currentEmotion].questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {showScore && (
        <EmotionScore
          score={score}
          total={emotions[currentEmotion].questions.length}
          onRetry={restart}
        />
      )}
    </Box>
  );
};

export default EmotionAdventure;
