import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  LinearProgress,
  Grid,
} from "@mui/material";

const emotions = {
  happiness: {
    emoji: "😊",
    description: `💡 What does it mean?
  Happiness is when you feel good inside, your heart is light, and you want to laugh, play, and share with others.
  
  🕒 When do we feel it?
  - When you play your favorite game
  - When mom or dad gives you a hug
  - When you succeed in something you’ve been trying for
  
  🧠 How to deal with it?
  ✅ Share your happiness with others
  ✅ Draw, sing, or play – these things make happiness grow
  ✅ Say "I'm happy" and smile 😊
  
  🌟 Example:
  "When I found out that mom hid a surprise for me, I felt like my heart was flying from joy!"
  
  🎲 Fun Activity:
  Every night before sleep, think about one thing that made you happy today.`,
    questions: [
      {
        q: "What can I do when I'm happy?",
        options: ["Share a smile", "Hide it", "Cry", "Get angry"],
        correct: 0,
      },
      {
        q: "How can I help others feel happy?",
        options: ["Be kind", "Ignore them", "Yell at them", "Take their toys"],
        correct: 0,
      },
    ],
  },
  sadness: {
    emoji: "😢",
    description: `💡 What does it mean?
Sadness comes when you lose something you love, miss someone, or something hurts your heart.

🕒 When do we feel it?
- When you lose your toy
- When someone scolds you
- When you're far away from someone you love

🧠 How to deal with it?
✅ Talk to mom, dad, or your teacher
✅ Draw or write your sadness
✅ Cry if you need to, crying is not weakness, it comforts the heart

🌟 Example:
"I was really sad when my friend didn't play with me, I felt my tears falling on their own."

🎲 Fun Activity:
Draw a sad heart, then draw around it things that make you happy like hearts, sunshine, and friends.`,
    questions: [
      {
        question: "What can you do when you feel sad?",
        options: ["Cry", "Talk to someone", "Stay alone", "Ignore it"],
        answer: "Talk to someone",
      },
      {
        question: "When was the last time you felt sad?",
        options: [
          "When I lost a toy",
          "When my friend was mean",
          "When I missed someone",
          "I never felt sad",
        ],
        answer: "When I missed someone",
      },
    ],
  },
  anger: {
    emoji: "😠",
    description: `💡 What does it mean?
Anger is a small fire inside you when someone does something you don't like, like taking your stuff or bothering you.

🕒 When do we feel it?
- When someone laughs at you
- When your brother takes your toy
- When you can’t express yourself

🧠 How to deal with it?
✅ Take three deep breaths
✅ Count to 10 before you speak
✅ Say "I'm upset because you... and it bothers me"

🌟 Example:
"I was about to hit my brother when he broke my toy, but I waited and counted to 10, then told him I was upset."

🎲 Fun Activity:
Make a "Calm Anger Bottle": Fill it with water and beads, and watch it calm down when you get angry.`,
    questions: [
      {
        q: "What should you do when you’re angry?",
        options: ["Take deep breaths", "Throw things", "Shout", "Run away"],
        correct: 0,
      },
      {
        q: "How can you help others calm down when they're angry?",
        options: ["Be calm", "Yell at them", "Ignore them", "Laugh at them"],
        correct: 0,
      },
    ],
  },
  fear: {
    emoji: "😱",
    description: `💡 What does it mean?
Fear is a feeling that makes us want to protect ourselves, but sometimes we’re scared of things that aren't really dangerous.

🕒 When do we feel it?
- When it's dark
- When there's a loud sound
- When you're not sure what will happen next

🧠 How to deal with it?
✅ Stay with someone you love
✅ Say loudly "I am brave!"
✅ Draw or talk about what scared you

🌟 Example:
"I was afraid to sleep alone, but mom told me a story and stayed with me until I fell asleep."

🎲 Fun Activity:
Draw the "Fear Monster" and turn it into something funny – add a hat or glasses 😄`,
    questions: [
      {
        q: "What can you do when you feel scared?",
        options: [
          "Talk to someone you trust",
          "Hide in a corner",
          "Cry",
          "Stay alone",
        ],
        correct: 0,
      },
      {
        q: "How can you help someone who is afraid?",
        options: [
          "Stay with them",
          "Ignore them",
          "Make fun of their fear",
          "Leave them alone",
        ],
        correct: 0,
      },
    ],
  },
  shyness: {
    emoji: "😳",
    description: `💡 What does it mean?
Shyness is when you feel like everyone is looking at you, your face turns red, and you want to hide.

🕒 When do we feel it?
- When someone laughs at you
- When you make a mistake in front of others
- When you're asked to speak in front of the class

🧠 How to deal with it?
✅ Remember that everyone gets shy sometimes
✅ Keep in mind that you're special and talented
✅ Try talking to someone you feel comfortable with

🌟 Example:
"I felt shy when the teacher asked me to sing alone, but I sang quietly, and people clapped for me!"

🎲 Fun Activity:
Make a list of 3 brave things you’ve done, even if they were small.`,
    questions: [
      {
        q: "What should you do when you feel shy?",
        options: ["Talk to someone", "Hide", "Keep quiet", "Leave the room"],
        correct: 0,
      },
      {
        q: "How can you help a friend who feels shy?",
        options: [
          "Encourage them to speak",
          "Ignore them",
          "Laugh at them",
          "Make fun of their shyness",
        ],
        correct: 0,
      },
    ],
  },
  comfort: {
    emoji: "😌",
    description: `💡 What does it mean?
Feeling safe is when you feel like you're in the arms of people you love, and there’s nothing to be scared of.

🕒 When do we feel it?
- When you sleep in your bed
- When you're with your family
- When someone pats you on the back

🧠 How to deal with it?
✅ Enjoy this beautiful feeling
✅ Keep it in mind when you feel scared
✅ Hug a toy or person you love

🌟 Example:
"When dad hugged me, I felt like I was in a world with no fear."

🎲 Fun Activity:
Create a "Comfort Corner" at home: Put in a blanket, a toy you love, and a favorite book.`,
    questions: [
      {
        q: "What can help you feel safe and comfortable?",
        options: [
          "Being with your family",
          "Staying alone",
          "Watching a scary movie",
          "Ignoring your feelings",
        ],
        correct: 0,
      },
      {
        q: "How can you comfort someone who is sad?",
        options: [
          "Give them a hug",
          "Tell them to stop crying",
          "Ignore them",
          "Laugh at them",
        ],
        correct: 0,
      },
    ],
  },
  jealousy: {
    emoji: "💚",
    description: `💡 What does it mean?
Jealousy is when you feel unhappy about something that happened, or something someone else has, like when you see someone with something you want.

🕒 When do we feel it?
- When someone takes a toy you love
- When a friend gets a gift and you didn't receive anything
- When someone treats someone else better than you

🧠 How to deal with it?
✅ Try to see the beautiful things you already have
✅ Tell yourself "I am special too"
✅ Talk to the person close to you and share your feelings

🌟 Example:
"I felt jealous when my friend got a new car, but mom told me: 'You also have beautiful things like your favorite toy!'"

🎲 Fun Activity:
Draw a picture of yourself with the things you love, and find three things that make your life special.`,
    questions: [
      {
        q: "What should you do when you feel jealous?",
        options: [
          "Talk about it",
          "Hide your feelings",
          "Get upset",
          "Yell at others",
        ],
        correct: 0,
      },
      {
        q: "How can you help someone who feels jealous?",
        options: [
          "Tell them how special they are",
          "Make fun of them",
          "Ignore them",
          "Keep things from them",
        ],
        correct: 0,
      },
    ],
  },
  excitement: {
    emoji: "🤩",
    description: `💡 What does it mean?
Excitement is the feeling of energy and power, and it’s when you’re ready to start something new or challenge yourself.

🕒 When do we feel it?
- When you start a new game
- When there’s something amazing in front of you
- When you’re excited about a big event like your birthday

🧠 How to deal with it?
✅ Let excitement help you think of new ideas
✅ Keep going with excitement and don’t stop
✅ Ask yourself "What's the next step?"

🌟 Example:
"I was so excited when I found out I was going on a school trip, I had so much energy I didn't want to stop!"

🎲 Fun Activity:
Take a piece of paper and start planning something new you want to do, and make every step filled with excitement!`,
    questions: [
      {
        q: "What can you do when you're excited?",
        options: [
          "Share your excitement",
          "Stay calm and quiet",
          "Hide your feelings",
          "Get scared",
        ],
        correct: 0,
      },
      {
        q: "How can you help others feel excited?",
        options: [
          "Share fun things",
          "Ignore them",
          "Tell them to be calm",
          "Stop them from being happy",
        ],
        correct: 0,
      },
    ],
  },
  amazement: {
    emoji: "😲",
    description: `💡 What does it mean?
Amazement is when something surprising happens in front of you, and you can't believe what’s going on, and you open your mouth in astonishment.

🕒 When do we feel it?
- When you see something big or strange for the first time
- When someone does something amazing in front of you
- When you get a lovely surprise like a gift you didn’t expect

🧠 How to deal with it?
✅ Let your eyes widen in amazement, and try to focus on the details
✅ Say "Wow! That’s amazing!"
✅ After seeing something amazing, try telling someone else the story

🌟 Example:
"I saw the smallest bird for the first time in the park, it was so beautiful that I stood amazed."

🎲 Fun Activity:
Make an "Amazement Book": When you see something amazing, write about it in a small notebook and share it with your family.`,
    questions: [
      {
        q: "What should you do when you’re amazed?",
        options: [
          "Share your surprise",
          "Hide your feelings",
          "Ignore it",
          "Feel upset",
        ],
        correct: 0,
      },
      {
        q: "How can you help someone who is amazed?",
        options: [
          "Share in their excitement",
          "Tell them to calm down",
          "Ignore them",
          "Make fun of them",
        ],
        correct: 0,
      },
    ],
  },
  independence: {
    emoji: "💪",
    description: `💡 What does it mean?
Independence is when you feel capable of doing things by yourself without needing help from mom or dad.

🕒 When do we feel it?
- When you dress yourself
- When you do your homework alone
- When you cook something simple in the kitchen

🧠 How to deal with it?
✅ Be proud of what you can accomplish by yourself
✅ Try to learn new things every day
✅ Set small challenges for yourself to boost your confidence

🌟 Example:
"I felt proud when I was able to tie my shoes by myself without anyone helping me."

🎲 Fun Activity:
Make a list of 3 things you'd like to learn to do on your own, and start with one of them.`,
    questions: [
      {
        q: "What should you do when you feel independent?",
        options: [
          "Try new things by yourself",
          "Wait for help",
          "Do nothing",
          "Ask someone to do it for you",
        ],
        correct: 0,
      },
      {
        q: "How can you help others feel independent?",
        options: [
          "Encourage them to try",
          "Do things for them",
          "Tell them they can't do it",
          "Leave them alone",
        ],
        correct: 0,
      },
    ],
  },
  enjoyment: {
    emoji: "😋",
    description: `💡 What does it mean?
Enjoyment is when you feel happy and relaxed while doing something you love.

🕒 When do we feel it?
- When you play with your friends
- When you watch your favorite movie
- When you eat your favorite food

🧠 How to deal with it?
✅ Make the most of every enjoyable moment
✅ Say "I’m happy" or "I’m enjoying this right now"
✅ Take your time and enjoy the little things

🌟 Example:
"I was really enjoying myself playing in the garden, the sun was nice, and the air was fresh."

🎲 Fun Activity:
Create a "Happiness Schedule": Think of 3 things that make you happy, and try to do them every day.`,
    questions: [
      {
        q: "What can you do when you're enjoying something?",
        options: [
          "Keep enjoying it",
          "Stop and leave",
          "Ignore the fun",
          "Be quiet",
        ],
        correct: 0,
      },
      {
        q: "How can you help others enjoy themselves?",
        options: [
          "Share fun things with them",
          "Tell them to stop",
          "Ignore them",
          "Be serious",
        ],
        correct: 0,
      },
    ],
  },
};
const EmotionAdventure = () => {
  const [currentEmotion, setCurrentEmotion] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleEmotionClick = (emotion) => {
    setCurrentEmotion(emotion);
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

  return (
    <Box
      sx={{
        p: 2,
        padding: "20px",
        textAlign: "center",
        backgroundColor: "white",
        height: "95vh",
        width: "97vw",
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
          mb: 4,
          width: "100%",
          fontFamily: "Manrope",
        }}
      >
        🎭 Welcome to Emotion Adventure!
      </Typography>

      {!currentEmotion && (
        <Paper
          elevation={4}
          sx={{
            p: 2,
            borderRadius: 4,
            width: "60%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F2F0E9",
          }}
        >
          <Typography variant="h5" mb={2} color="black" fontFamily="Manrope">
            Choose an Emotion to Explore
          </Typography>
          {Object.keys(emotions).map((key) => (
            <Button
              key={key}
              onClick={() => handleEmotionClick(key)}
              variant="contained"
              sx={{
                color: "black",
                m: 1,
                backgroundColor: "white",
                borderRadius: 2,
                width: "100%",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              {emotions[key].emoji} {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
        </Paper>
      )}

      {currentEmotion && !showQuiz && !showScore && (
        <Paper
          elevation={4}
          sx={{
            p: 3,
            borderRadius: 4,
            width: "80%",
            textAlign: "left",
            whiteSpace: "pre-line",
            backgroundColor: "#F8F7F4",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {emotions[currentEmotion].emoji} {currentEmotion.toUpperCase()}
          </Typography>
          <Typography
            mb={2}
            sx={{ backgroundColor: "#F8F7F4", padding: 2, borderRadius: 2 }}
          >
            {emotions[currentEmotion].description}
          </Typography>
          {emotions[currentEmotion].questions.length > 0 && (
            <Button
              variant="contained"
              onClick={handleStartQuiz}
              sx={{ backgroundColor: "black" }}
            >
              Start Quiz
            </Button>
          )}
          <Button
            onClick={restart}
            sx={{ ml: 2, color: "white", backgroundColor: "black" }}
          >
            Back to Emotions
          </Button>
        </Paper>
      )}

      {showQuiz && (
        <Paper
          elevation={4}
          sx={{ p: 3, borderRadius: 4, width: "60%", textAlign: "left" }}
        >
          <Typography variant="h5" gutterBottom>
            Question {currentQuestion + 1}:
          </Typography>
          <Typography mb={2}>
            {emotions[currentEmotion].questions[currentQuestion].q}
          </Typography>
          <Grid container spacing={2}>
            {emotions[currentEmotion].questions[currentQuestion].options.map(
              (option, i) => (
                <Grid item xs={6} key={i}>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{ color: "white", backgroundColor: "black" }}
                    onClick={() => handleAnswer(i)}
                  >
                    {option}
                  </Button>
                </Grid>
              )
            )}
          </Grid>
          <LinearProgress
            variant="determinate"
            value={
              ((currentQuestion + 1) /
                emotions[currentEmotion].questions.length) *
              100
            }
            sx={{
              mt: 2,
              height: 10,
              backgroundColor: "#CAC8C2", // لون الخلفية
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#51504E", // لون شريط التقدم
              },
            }}
          />
        </Paper>
      )}

      {showScore && (
        <Paper
          elevation={4}
          sx={{ p: 3, borderRadius: 4, width: "60%", textAlign: "center" }}
        >
          <Typography
            variant="h4"
            gutterBottom
            fontFamily={"Manrope"}
            fontWeight={600}
          >
            🏁 Quiz Finished!
          </Typography>
          <Typography variant="h5" fontFamily={"Manrope"} fontWeight={500}>
            Your Score: {score}/{emotions[currentEmotion].questions.length}
          </Typography>
          <Button
            onClick={restart}
            sx={{
              mt: 2,
              color: "white",
              backgroundColor: "black",
              textTransform: "none",
            }}
          >
            Try Another Emotion
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default EmotionAdventure;
