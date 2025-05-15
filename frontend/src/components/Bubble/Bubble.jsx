import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import ScoreBoard from "./ScoreBoard";
import BubbleGrid from "./BubbleGrid";
import GameOver from "./GameOver";
import Navbar from "../Navbar/Navbar";

const generateBubbles = () => {
    const newBubbles = [];
    for (let i = 1; i <= 100; i++) {
        const count = Math.floor(Math.random() * 10);
        newBubbles.push(count);
    }
    return newBubbles;
};

const BubbleGame = () => {
    const [timer, setTimer] = useState(30);
    const [score, setScore] = useState(0);
    const [hitrm, setHitrm] = useState(Math.floor(Math.random() * 10));
    const [maxScore, setMaxScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [bubbles, setBubbles] = useState(generateBubbles());
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const debugAuthState = () => {
        console.log("BubbleGame AUTH DEBUG INFO:");
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
            }
        } catch (error) {
            console.error("Error fetching user details:", error.message);
            setIsLoggedIn(false);
            setUsername("");
        }
    };
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
            if (intervalId) clearInterval(intervalId); 
            setGameOver(true);
            
            if (isLoggedIn && username && score > maxScore) {
                saveHighScore(score);
                setMaxScore(score);
            }
            return;
        }

        const id = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0)); 
        }, 1000);
        
        setIntervalId(id);

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [timer, score, maxScore, isLoggedIn, username, intervalId]);
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
            console.log(`Saving high score for ${username}: ${newScore}`);
            const response = await fetch("http://localhost:4000/api/auth/save", {
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
            console.log("Score saved successfully:", data);
            
            if (data.success && data.maxScore) {
                setMaxScore(data.maxScore);
            }
        } catch (error) {
            console.error("Error saving score:", error.message);
        }
    };
    const handleBubbleClick = (clickedNum) => {
        if (clickedNum === hitrm) {
            setScore((prev) => prev + 10);
            setBubbles(generateBubbles());
            setHitrm(Math.floor(Math.random() * 10));
        }
    };

    const restartGame = () => {
        if (intervalId) clearInterval(intervalId); 
        setTimer(30);
        setScore(0);
        setBubbles(generateBubbles());
        setHitrm(Math.floor(Math.random() * 10));
        setGameOver(false);
        setIntervalId(null); 
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