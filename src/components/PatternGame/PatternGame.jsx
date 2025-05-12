import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./PatternGame.module.css";
import { colors, levels } from "../../data/Pattern";
import PatternDisplay from "../PatternComponents/PatternDisplay";
import ColorOptions from "../PatternComponents/ColorOptions";
import UserPatternDisplay from "../PatternComponents/UserPatternDisplay";
import Navbar from "../Navbar/Navbar";

const PatternGame = () => {
  // State management
  const [currentLevel, setCurrentLevel] = useState(1);
  const [pattern, setPattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);
  const [showPattern, setShowPattern] = useState(true);
  const [message, setMessage] = useState("");
  const [maxScore, setMaxScore] = useState(0);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Debug function to help diagnose authentication issues
  const debugAuthState = () => {
    console.log("PatternGame AUTH DEBUG INFO:");
    console.log("- Token exists:", !!localStorage.getItem("token"));
    console.log("- Stored username:", localStorage.getItem("username"));
    console.log("- Component username state:", username);
    console.log("- isLoggedIn state:", isLoggedIn);
  };

  // Check login status and get username when component mounts
  useEffect(() => {
    debugAuthState(); // Log initial auth state
    
    const token = localStorage.getItem("token");
    
    // Start with fresh state - don't rely on stored username
    if (!token) {
      setIsLoggedIn(false);
      setUsername("");
      setMaxScore(0);
      generatePattern(); // Generate pattern for guest users
      return;
    }
    
    // Always verify the token and get fresh user data
    fetchUserDetails(token);
  }, []);

  // Fetch user details from backend
  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/me", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        // If token is invalid, clear localStorage and update state
        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
        }
        
        setIsLoggedIn(false);
        setUsername("");
        generatePattern(); // Generate pattern for guest users
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.data) {
        const fetchedUsername = data.data.userName;
        console.log("Fetched user details, username:", fetchedUsername);
        
        // Update both state and localStorage with fresh data
        setUsername(fetchedUsername);
        localStorage.setItem("username", fetchedUsername);
        setIsLoggedIn(true);
        
        // Fetch max score using the fetched username directly
        fetchMaxScore(fetchedUsername);
      } else {
        console.error("Failed to fetch user details:", data);
        setIsLoggedIn(false);
        setUsername("");
        generatePattern(); // Generate pattern if user details fetch fails
      }
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      setIsLoggedIn(false);
      setUsername("");
      generatePattern(); // Generate pattern if fetch throws error
    }
  };

  // Fetch max score for Pattern game if logged in
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
          // Handle expired/invalid token
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
      
      // Generate pattern after fetching score
      generatePattern();
    } catch (error) {
      console.error("Error fetching pattern max score:", error.message);
      generatePattern(); // Generate pattern even if score fetch fails
    }
  };

  // Generate a new pattern when level changes
  useEffect(() => {
    if (pattern.length === 0) {
      return; // Skip if pattern hasn't been initialized yet (will be done in fetchMaxScore)
    }
    generatePattern();
  }, [currentLevel]);

  // Generate a new pattern for the current level
  const generatePattern = () => {
    const levelConfig = levels.find((l) => l.level === currentLevel);
    if (!levelConfig) return; // Safety check
    
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

  // Handle color selection by the user
  const handleSelect = (color) => {
    setUserPattern((prev) => {
      const newPattern = [...prev, color];
      if (newPattern.length === pattern.length) {
        checkPattern(newPattern);
      }
      return newPattern;
    });
  };

  // Check if the user's pattern matches the generated pattern
  const checkPattern = async (userInput) => {
    if (JSON.stringify(userInput) === JSON.stringify(pattern)) {
      setMessage("رائع! انتقل للمستوى التالي ✨");
      
      // Calculate score based on level and pattern length
      const newScore = currentLevel * pattern.length;
      
      // Save high score if logged in and score is higher than max
      if (isLoggedIn && username && newScore > maxScore) {
        await saveHighScore(newScore);
        setMaxScore(newScore);
      }
      
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

  // Save the high score to the backend
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
      
      // Always use the username from state, not localStorage
      console.log(`Saving pattern score for ${username}: ${newScore}`);
      const response = await fetch("http://localhost:4000/api/auth/pattern/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          score: newScore, 
          username: username  // Use component state instead of localStorage
        }),
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          // Handle expired/invalid token
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          setIsLoggedIn(false);
          setUsername("");
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Pattern score saved successfully:", data);
      
      // Update max score state after saving
      if (data.success && data.maxScore) {
        setMaxScore(data.maxScore);
      }
    } catch (error) {
      console.error("Error saving pattern score:", error.message);
    }
  };

  // Reset the game to level 1
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
            تتبع النمط - المستوى {currentLevel}
          </Typography>

          <UserPatternDisplay userPattern={userPattern} />
          <PatternDisplay pattern={pattern} showPattern={showPattern} userPattern={userPattern} />

          {!showPattern && <ColorOptions colors={colors} onSelect={handleSelect} />}

          {message && (
            <Typography sx={{ fontSize: "20px", marginTop: "20px", color: "#000" }}>
              {message}
            </Typography>
          )}

          {currentLevel === 5 && message === "أحسنت! أنهيت جميع المستويات 🏆" && (
            <Button
              variant="contained"
              onClick={resetGame}
              sx={{
                marginTop: "20px",
                backgroundColor: "#4CAF50",
                "&:hover": { backgroundColor: "#45a049" },
              }}
            >
              إعادة اللعب
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PatternGame;