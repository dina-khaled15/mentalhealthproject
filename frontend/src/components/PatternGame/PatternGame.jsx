import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./PatternGame.module.css";
import { colors, levels } from "../../data/Pattern";
import PatternDisplay from "../PatternComponents/PatternDisplay";
import ColorOptions from "../PatternComponents/ColorOptions";
import UserPatternDisplay from "../PatternComponents/UserPatternDisplay";
import Navbar from "../Navbar/Navbar";

const PatternGame = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [pattern, setPattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);
  const [showPattern, setShowPattern] = useState(true);
  const [message, setMessage] = useState("");
  const [maxScore, setMaxScore] = useState(0);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const debugAuthState = () => {
    console.log("PatternGame AUTH DEBUG INFO:");
    console.log("- Token exists:", !!localStorage.getItem("token"));
    console.log("- Stored username:", localStorage.getItem("username"));
    console.log("- Component username state:", username);
    console.log("- isLoggedIn state:", isLoggedIn);
  };
  useEffect(() => {
    debugAuthState(); 
    
    const token = localStorage.getItem("token");
    
    if (!token) {
      setIsLoggedIn(false);
      setUsername("");
      setMaxScore(0);
      generatePattern(); 
      return;
    }
    
    fetchUserDetails(token);
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/me", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
        }
        
        setIsLoggedIn(false);
        setUsername("");
        generatePattern(); 
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data) {
        const fetchedUsername = data.data.userName;
        console.log("Fetched user details, username:", fetchedUsername);
        setUsername(fetchedUsername);
        localStorage.setItem("username", fetchedUsername);
        setIsLoggedIn(true);
        fetchMaxScore(fetchedUsername);
      } else {
        console.error("Failed to fetch user details:", data);
        setIsLoggedIn(false);
        setUsername("");
        generatePattern();
      }
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      setIsLoggedIn(false);
      setUsername("");
      generatePattern(); 
    }
  };
  const fetchMaxScore = async (user) => {
    if (!user) {
      generatePattern();
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found in localStorage.");
        generatePattern();
        return;
      }
      
      console.log(`Fetching pattern max score for user: ${user}`);
      const response = await fetch(`http://localhost:4000/api/auth/pattern/max/${user}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          setIsLoggedIn(false);
          setUsername("");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.score !== undefined) {
        setMaxScore(data.score);
        console.log(`Pattern max score for ${user}: ${data.score}`);
      } else {
        console.log("No pattern score data received:", data);
      }
      
      generatePattern();
    } catch (error) {
      console.error("Error fetching pattern max score:", error.message);
      generatePattern(); 
    }
  };

  useEffect(() => {
    if (pattern.length === 0) {
      return; 
    }
    generatePattern();
  }, [currentLevel]);

  const generatePattern = () => {
    const levelConfig = levels.find((l) => l.level === currentLevel);
    if (!levelConfig) return;
    
    const { items } = levelConfig;
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

  const checkPattern = async (userInput) => {
    if (JSON.stringify(userInput) === JSON.stringify(pattern)) {
     setMessage("Great! Move to the next level ✨");
      const newScore = currentLevel * pattern.length;
      if (isLoggedIn && username && newScore > maxScore) {
        await saveHighScore(newScore);
        setMaxScore(newScore);
      }
      
      setTimeout(() => {
        if (currentLevel < 5) {
          setCurrentLevel((prev) => prev + 1);
        } else {
         setMessage("Well done! You completed all the levels 🏆");
        }
      }, 1500);
    } else {
      setMessage("Try again with a smile! 😊");
      setTimeout(() => {
        generatePattern();
      }, 1500);
    }
  };
  const saveHighScore = async (newScore) => {
    if (!isLoggedIn || !username) {
      console.warn("Cannot save pattern score: No user logged in.");
      return;
    }
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token available for saving pattern score.");
        return;
      }
      
      console.log(`Saving pattern score for ${username}: ${newScore}`);
      const response = await fetch("http://localhost:4000/api/auth/pattern/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          score: newScore, 
          username: username  
        }),
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          setIsLoggedIn(false);
          setUsername("");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Pattern score saved successfully:", data);
      if (data.success && data.maxScore) {
        setMaxScore(data.maxScore);
      }
    } catch (error) {
      console.error("Error saving pattern score:", error.message);
    }
  };
  const resetGame = () => {
    setCurrentLevel(1);
    setMessage("");
    generatePattern();
  };

  return (
    <>
      <Navbar />
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
        {isLoggedIn && username ? (
          <Typography variant="h6" sx={{ mb: 2 }}>
            Welcome, {username}! Your max score: {maxScore}
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ mb: 2 }}>
            Guest Mode - Scores won't be saved
          </Typography>
        )}
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
           Pattern Follow - Level{currentLevel}
          </Typography>

          <UserPatternDisplay userPattern={userPattern} />
          <PatternDisplay pattern={pattern} showPattern={showPattern} userPattern={userPattern} />

          {!showPattern && <ColorOptions colors={colors} onSelect={handleSelect} />}

          {message && (
            <Typography sx={{ fontSize: "20px", marginTop: "20px", color: "#000" }}>
              {message}
            </Typography>
          )}

          {currentLevel === 5 && message === "Well done! You’ve completed all the levels 🏆" && (
            <Button
              variant="contained"
              onClick={resetGame}
              sx={{
                marginTop: "20px",
                backgroundColor: "#4CAF50",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              "Play Again"
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PatternGame;