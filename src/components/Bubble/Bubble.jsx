// import React, { useState, useEffect } from "react";
// import { Container, Box } from "@mui/material";
// import ScoreBoard from "./ScoreBoard";
// import BubbleGrid from "./BubbleGrid";
// import GameOver from "./GameOver";
// const [score, setScore] = useState(0);
// const [maxScore, setMaxScore] = useState(0);

// const generateBubbles = () => {
//   const newBubbles = [];
//   for (let i = 1; i <= 100; i++) {
//     const count = Math.floor(Math.random() * 10);
//     newBubbles.push(count);
//   }
//   return newBubbles;
// };

// const BubbleGame = () => {
//   const [timer, setTimer] = useState(30);
//   const [score, setScore] = useState(0);
//   const [hitrm, setHitrm] = useState(Math.floor(Math.random() * 10));
//   const [maxScore, setMaxScore] = useState(localStorage.getItem("maxScore") || 0);
//   const [gameOver, setGameOver] = useState(false);
//   const [bubbles, setBubbles] = useState(generateBubbles());

//   useEffect(() => {
//     const timerInt = setInterval(() => {
//       if (timer > 0) {
//         setTimer((prevTimer) => prevTimer - 1);
//       } else {
//         clearInterval(timerInt);
//         setGameOver(true);
//         if (score > maxScore) {
//           localStorage.setItem("maxScore", score);
//           setMaxScore(score);
//         }
//       }
//     }, 1000);
//     return () => clearInterval(timerInt);
//   }, [timer, score, maxScore]);

//   const handleBubbleClick = (clickedNum) => {
//     if (clickedNum === hitrm) {
      
//       setScore(score + 10);
//       setBubbles(generateBubbles());
//       setHitrm(Math.floor(Math.random() * 10));
//     } else {
     
//     }
//   };

//   const restartGame = () => {
//     setTimer(30);
//     setScore(0);
//     setBubbles(generateBubbles());
//     setHitrm(Math.floor(Math.random() * 10));
//     setGameOver(false);
//   };

//   return (
//     <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", backgroundColor: "#F8F7F4", padding: 0 }}>
//       <Box sx={{ width: "100%", background: "#F2F0E9", borderRadius: "20px", boxShadow: "0 0 15px #ccc", padding: 2 }}>
//         <ScoreBoard hitrm={hitrm} timer={timer} score={score} maxScore={maxScore} />
//         <BubbleGrid bubbles={bubbles} onClick={handleBubbleClick} />
//         {gameOver && <GameOver score={score} maxScore={maxScore} onRestart={restartGame} />}
//       </Box>
//     </Container>
//   );
// };

// export default BubbleGame;

import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import ScoreBoard from "./ScoreBoard";
import BubbleGrid from "./BubbleGrid";
import GameOver from "./GameOver";

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

  // ✅ Fetch highest score from backend
  useEffect(() => {
    const fetchMaxScore = async () => {
      try {
        const response = await fetch("http://localhost:4000/bubble/max");
        const data = await response.json();
        if (data && data.score !== undefined) {
          setMaxScore(data.score);
        }
      } catch (error) {
        console.error("Error fetching max score:", error);
      }
    };
    fetchMaxScore();
  }, []);

  // ✅ Timer logic
  useEffect(() => {
    const timerInt = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      } else {
        clearInterval(timerInt);
        setGameOver(true);
        // ✅ Save score if it's higher
        if (score > maxScore) {
          saveHighScore(score);
          setMaxScore(score);
        }
      }
    }, 1000);

    return () => clearInterval(timerInt);
  }, [timer]);

  // ✅ Save new high score
  const saveHighScore = async (newScore) => {
    try {
      await fetch("http://localhost:4000/bubble/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ score: newScore, player: "Anonymous" }) // يمكنك استبدال "Anonymous" باسم اللاعب
      });
    } catch (error) {
      console.error("Error saving score:", error);
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
    setTimer(30);
    setScore(0);
    setBubbles(generateBubbles());
    setHitrm(Math.floor(Math.random() * 10));
    setGameOver(false);
  };

  return (
    <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", backgroundColor: "#F8F7F4", padding: 0 }}>
      <Box sx={{ width: "100%", background: "#F2F0E9", borderRadius: "20px", boxShadow: "0 0 15px #ccc", padding: 2 }}>
        <ScoreBoard hitrm={hitrm} timer={timer} score={score} maxScore={maxScore} />
        <BubbleGrid bubbles={bubbles} onClick={handleBubbleClick} />
        {gameOver && <GameOver score={score} maxScore={maxScore} onRestart={restartGame} />}
      </Box>
    </Container>
  );
};

export default BubbleGame;
