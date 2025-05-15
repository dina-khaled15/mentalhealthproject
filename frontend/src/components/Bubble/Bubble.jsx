import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import ScoreBoard from "./ScoreBoard";
import BubbleGrid from "./BubbleGrid";
import GameOver from "./GameOver";
import Navbar from "../Navbar/Navbar";

// Function to generate random bubbles
const generateBubbles = () => {
    const newBubbles = [];
    for (let i = 1; i <= 100; i++) {
        const count = Math.floor(Math.random() * 10);
        newBubbles.push(count);
    }
    return newBubbles;
};

const BubbleGame = () => {
    // State management
    const [timer, setTimer] = useState(30);
    const [score, setScore] = useState(0);
    const [hitrm, setHitrm] = useState(Math.floor(Math.random() * 10));
    const [maxScore, setMaxScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [bubbles, setBubbles] = useState(generateBubbles());
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    
    // Debug function to help diagnose authentication issues
    const debugAuthState = () => {
        console.log("BubbleGame AUTH DEBUG INFO:");
        console.log("- Token exists:", !!localStorage.getItem("token"));
        console.log("- Stored username:", localStorage.getItem("username"));
        console.log("- Component username state:", username);
        console.log("- isLoggedIn state:", isLoggedIn);
    };
    
    // Get user details when component mounts
    useEffect(() => {
        debugAuthState(); // Log initial auth state
        
        const token = localStorage.getItem("token");
        
        // Start with fresh state - don't rely on stored username yet
        if (!token) {
            setIsLoggedIn(false);
            setUsername("");
            setMaxScore(0);
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
            }
        } catch (error) {
            console.error("Error fetching user details:", error.message);
            setIsLoggedIn(false);
            setUsername("");
        }
    };

    // Fetch max score from backend
    const fetchMaxScore = async (user) => {
        if (!user) return;
        
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.log("No token found in localStorage.");
                return;
            }
            
            console.log(`Fetching max score for user: ${user}`);
            const response = await fetch(`http://localhost:4000/api/auth/max/${user}`, {
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
                console.log(`Max score for ${user}: ${data.score}`);
            } else {
                console.log("No score data received:", data);
            }
        } catch (error) {
            console.error("Error fetching max score:", error.message);
        }
    };

    // Timer management
    useEffect(() => {
        if (timer <= 0) {
            if (intervalId) clearInterval(intervalId); // Clear interval when timer reaches 0
            setGameOver(true);
            
            // Only save high score if logged in, have username, and score is higher than max
            if (isLoggedIn && username && score > maxScore) {
                saveHighScore(score);
                setMaxScore(score);
            }
            return;
        }

        const id = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0)); // Ensure timer doesn't go negative
        }, 1000);
        
        setIntervalId(id); // Store interval ID

        return () => {
            if (intervalId) clearInterval(intervalId); // Cleanup on unmount or re-render
        };
    }, [timer, score, maxScore, isLoggedIn, username, intervalId]);

    // Save high score function
    const saveHighScore = async (newScore) => {
        if (!isLoggedIn || !username) {
            console.warn("Cannot save score: No user logged in.");
            return;
        }
        
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.warn("No token available for saving score.");
                return;
            }
            
            // Always use the username from state, not localStorage
            console.log(`Saving high score for ${username}: ${newScore}`);
            const response = await fetch("http://localhost:4000/api/auth/save", {
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
            console.log("Score saved successfully:", data);
            
            // Update max score state after saving
            if (data.success && data.maxScore) {
                setMaxScore(data.maxScore);
            }
        } catch (error) {
            console.error("Error saving score:", error.message);
        }
    };

    // Handle bubble click
    const handleBubbleClick = (clickedNum) => {
        if (clickedNum === hitrm) {
            setScore((prev) => prev + 10);
            setBubbles(generateBubbles());
            setHitrm(Math.floor(Math.random() * 10));
        }
    };

    // Restart game function
    const restartGame = () => {
        if (intervalId) clearInterval(intervalId); // Clear existing interval
        setTimer(30);
        setScore(0);
        setBubbles(generateBubbles());
        setHitrm(Math.floor(Math.random() * 10));
        setGameOver(false);
        setIntervalId(null); // Reset interval ID
    };

    return (
        <>
            <Navbar />
            <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", backgroundColor: "#F8F7F4", padding: 0 }}>
                <Box sx={{ width: "100%", background: "#F2F0E9", borderRadius: "20px", boxShadow: "0 0 15px #ccc", padding: 2 }}>
                    {isLoggedIn && username ? (
                        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                            Welcome, {username}! Your max score: {maxScore}
                        </Typography>
                    ) : (
                        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
                            Guest Mode - Scores won't be saved
                        </Typography>
                    )}
                    <ScoreBoard hitrm={hitrm} timer={timer} score={score} maxScore={maxScore} />
                    <BubbleGrid bubbles={bubbles} onClick={handleBubbleClick} />
                    {gameOver && <GameOver score={score} maxScore={maxScore} onRestart={restartGame} />}
                </Box>
            </Container>
        </>
    );
};

export default BubbleGame;