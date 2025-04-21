import React, { useState } from "react";
import {Box,Typography,Button,Paper,LinearProgress,Grid,} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { faClock, faLightbulb, faBrain,  faDice ,faCheck } from '@fortawesome/free-solid-svg-icons';
import StarRateIcon from '@mui/icons-material/StarRate';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const emotions = {
  happiness: {
    emoji: "😊",
    description: (
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Happiness is when you feel good inside, your heart is light, and you want to laugh, play, and share with others.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When you play your favorite game.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When mom or dad gives you a hug.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When you succeed in something you’ve been trying for.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Share your happiness with others.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope',fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Draw, sing, or play – these things make happiness grow.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Say "I'm happy" and smile. 
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
            <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1  }}>
            Example:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            When I found out that mom hid a surprise for me, I felt like my heart was flying from joy!
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
          Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Every night before sleep, think about one thing that made you happy today.
          </Typography>
          </p>
          </>
          ),
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
    description: (
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Sadness comes when you lose something you love, miss someone, or something hurts your heart.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When you lose your toy.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When someone scolds you.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When you're far away from someone you love.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Talk to mom, dad, or your teacher.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope',fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Draw or write your sadness.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Cry if you need to, crying is not weakness, it comforts the heart. 
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
            <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1  }}>
            Example:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            I was really sad when my friend didn't play with me, I felt my tears falling on their own.
            </Typography>
        </p>
        <p>
            <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
            <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
            Fun Activity:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            Draw a sad heart, then draw around it things that make you happy like hearts, sunshine, and friends.
          </Typography>
          </p>
          </>
          ),
          questions: [
            {
              q: "What can you do when you feel sad?",
              options: ["Cry", "Talk to someone", "Stay alone", "Ignore it"],
              correct: 0,
            },
            {
              q: "When was the last time you felt sad?",
              options: ["When I lost a toy","When my friend was mean","When I missed someone","I never felt sad"],
              correct: 0,
            },
          ],
        },
  anger: {
    emoji: "😠",
    description:(
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Anger is a small fire inside you when someone does something you don't like, like taking your stuff or bothering you.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When someone laughs at you.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When your brother takes your toy.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When you can’t express yourself.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Take three deep breaths.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope',fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Count to 10 before you speak.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Say "I'm upset because you... and it bothers me"
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
            <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1  }}>
            Example:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            I was about to hit my brother when he broke my toy, but I waited and counted to 10, then told him I was upset.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
          Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Make a "Calm Anger Bottle": Fill it with water and beads, and watch it calm down when you get angry
          </Typography>
          </p>
          </>
          ),
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
    emoji: "😠",
    description:(
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Fear is a feeling that makes us want to protect ourselves, but sometimes we’re scared of things that aren't really dangerous.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When it's dark.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When there's a loud sound.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When you're not sure what will happen next.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Stay with someone you love.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope',fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Say loudly "I am brave!"
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Draw or talk about what scared you 
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
            <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1  }}>
              Example:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            I was afraid to sleep alone, but mom told me a story and stayed with me until I fell asleep.
            </Typography>
        </p>
        <p>
            <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
            <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
              Fun Activity:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            Draw the "Fear Monster" and turn it into something funny – add a hat or glasses.
          </Typography>
          </p>
          </>
          ),
          questions: [
            {
              q: "What can you do when you feel scared?",
              options: ["Talk to someone you trust","Hide in a corner","Cry","Stay alone"],
              correct: 0,
            },
            {
              q: "How can you help someone who is afraid?",
              options: ["Stay with them","Ignore them","Make fun of their fear","Leave them alone",],
              correct: 0,
            },
          ],
        },   
  shyness: {
    emoji: "😳",
    description:(
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Fear is a feeling that makes us want to protect ourselves, but sometimes we’re scared of things that aren't really dangerous.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When it's dark.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When there's a loud sound.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          When you're not sure what will happen next.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1, mb: 2 }}>
          How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Stay with someone you love.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope',fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Say loudly "I am brave!"
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
          Draw or talk about what scared you 
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
            <Typography component="strong" sx={{ fontFamily: 'Manrope',fontWeight: 'bold', fontSize: '22px',ml: 1  }}>
              Example:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            I was afraid to sleep alone, but mom told me a story and stayed with me until I fell asleep.
            </Typography>
        </p>
        <p>
            <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
            <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
              Fun Activity:
            </Typography><br />
            <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500',fontSize: '17px', ml: 1 }}>
            Draw the "Fear Monster" and turn it into something funny – add a hat or glasses.
          </Typography>
          </p>
          </>
          ),
          questions: [
            {
              q: "What can you do when you feel scared?",
              options: ["Talk to someone you trust","Hide in a corner","Cry","Stay alone",],
              correct: 0,
            },
            {
              q: "How can you help someone who is afraid?",
              options: ["Stay with them","Ignore them","Make fun of their fear","Leave them alone"],
              correct: 0,
            },
          ],
        },   
  comfort: {
    emoji: "😌",
    description: (
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
          What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          Feeling safe is when you feel like you're in the arms of people you love, and there’s nothing to be scared of.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you sleep in your bed.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you're with your family.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When someone pats you on the back.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Enjoy this beautiful feeling.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Keep it in mind when you feel scared.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Hug a toy or person you love.
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1 }}>
            Example:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            When dad hugged me, I felt like I was in a world with no fear.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
            Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Create a "Comfort Corner" at home: Put in a blanket, a toy you love, and a favorite book.
          </Typography>
        </p>
      </>
    ),
    questions: [
      {
        q: "What can help you feel safe and comfortable?",
        options: ["Being with your family","Staying alone","Watching a scary movie","Ignoring your feelings",],
        correct: 0,
      },
      {
        q: "How can you comfort someone who is sad?",
        options: ["Give them a hug","Tell them to stop crying","Ignore them","Laugh at them",],
        correct: 0,
      },
    ],
        },
  jealousy: {
    emoji: <FavoriteIcon style={{ color: "#ec4899" ,fontSize: "19px"}} />,
    description: (
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
          What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          Feeling safe is when you feel like you're in the arms of people you love, and there’s nothing to be scared of.
          </Typography>
        </p><p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you sleep in your bed.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you're with your family.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When someone pats you on the back.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Enjoy this beautiful feeling.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Keep it in mind when you feel scared.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Hug a toy or person you love.
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1 }}>
            Example:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            When dad hugged me, I felt like I was in a world with no fear.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
            Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Create a "Comfort Corner" at home: Put in a blanket, a toy you love, and a favorite book.
          </Typography>
        </p>
      </>
    ),
    questions: [
      {
        q: "What should you do when you feel jealous?",
        options: ["Talk about it","Hide your feelings","Get upset","Yell at others",],
        correct: 0,
      },
      {
        q: "How can you help someone who feels jealous?",
        options: ["Tell them how special they are","Make fun of them","Ignore them","Keep things from them",],
        correct: 0,
      },
    ],
        },
  excitement: {
    emoji: "🤩",
    description: (
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Excitement is the feeling of energy and power, and it’s when you’re ready to start something new or challenge yourself.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you start a new game.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When there’s something amazing in front of you.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you’re excited about a big event like your birthday.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Let excitement help you think of new ideas.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Keep going with excitement and don’t stop.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Ask yourself "What's the next step?"
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1 }}>
            Example:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            I was so excited when I found out I was going on a school trip, I had so much energy I didn't want to stop!
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
            Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Take a piece of paper and start planning something new you want to do, and make every step filled with excitement!
          </Typography>
        </p>
      </>
    ),
    questions: [
      {
        q: "What can you do when you're excited?",
        options: ["Share your excitement","Stay calm and quiet","Hide your feelings","Get scared"],
        correct: 0,
      },
      {
        q: "How can you help others feel excited?",
        options: ["Share fun things","Ignore them","Tell them to be calm","Stop them from being happy"],
        correct: 0,
      },
    ],
        },
  amazement: {
    emoji: "😲",
    description:(
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Amazement is when something surprising happens in front of you, and you can't believe what’s going on, and you open your mouth in astonishment.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            When you see something big or strange for the first time.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            When someone does something amazing in front of you.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            When you get a lovely surprise like a gift you didn’t expect.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Let your eyes widen in amazement, and try to focus on the details.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Say "Wow! That’s amazing!"
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            After seeing something amazing, try telling someone else the story.
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1 }}>
            Example:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            I saw the smallest bird for the first time in the park, it was so beautiful that I stood amazed.
          </Typography>
        </p><p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
            Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Make an "Amazement Book": When you see something amazing, write about it in a small notebook and share it with your family.
          </Typography>
        </p>
      </>
    ),
    questions: [
      {
        q: "What should you do when you’re amazed?",
        options: ["Share your surprise","Hide your feelings","Ignore it","Feel upset",],
        correct: 0,
      },
      {
        q: "How can you help someone who is amazed?",
        options: ["Share in their excitement","Tell them to calm down","Ignore them","Make fun of them"],
        correct: 0,
      },
    ],
        },
  independence: {
    emoji: "💪",
    description: (
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Independence is when you feel capable of doing things by yourself without needing help from mom or dad.
          </Typography>
        </p>
    
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
          When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you dress yourself.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            When you do your homework alone.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            When you cook something simple in the kitchen.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Be proud of what you can accomplish by yourself.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Try to learn new things every day.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Set small challenges for yourself to boost your confidence.
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1 }}>
            Example:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            I felt proud when I was able to tie my shoes by myself without anyone helping me.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
            Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Make a list of 3 things you'd like to learn to do on your own, and start with one of them.
          </Typography>
        </p>
      </>
    ),
    questions: [
      {
        q: "What should you do when you feel independent?",
        options: ["Try new things by yourself","Wait for help","Do nothing","Ask someone to do it for you"],
        correct: 0,
      },
      {
        q: "How can you help others feel independent?",
        options: ["Encourage them to try","Do things for them","Tell them they can't do it","Leave them alone"],
        correct: 0,
      },
    ],
  },
  enjoyment: {
    emoji: "😋",
    description:(
      <>
        <p>
          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#facc15' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            What does it mean?
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Enjoyment is when you feel happy and relaxed while doing something you love.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3b82f6' }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            When do we feel it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you play with your friends.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you watch your favorite movie.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
          When you eat your favorite food.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faBrain} style={{ color: '#E6BE8A' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1, mb: 2 }}>
            How to deal with it?
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Make the most of every enjoyable moment.
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Say "I’m happy" or "I’m enjoying this right now".
          </Typography><br />
          <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Take your time and enjoy the little things.
          </Typography>
        </p>
        <p>
          <StarRateIcon style={{ color: "#FFC107" }} /> 
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '22px', ml: 1 }}>
            Example:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            I was really enjoying myself playing in the garden, the sun was nice, and the air was fresh.
          </Typography>
        </p>
        <p>
          <FontAwesomeIcon icon={faDice} style={{ color: '#a855f7' }} />
          <Typography component="strong" sx={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: '20px', ml: 1 }}>
            Fun Activity:
          </Typography><br />
          <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: '17px', ml: 1 }}>
            Create a "Happiness Schedule": Think of 3 things that make you happy, and try to do them every day.
          </Typography>
        </p>
      </>
    ),
    questions: [
      {
        q: "What can you do when you're enjoying something?",
        options: ["Keep enjoying it","Stop and leave","Ignore the fun","Be quiet"],
        correct: 0,
      },
      {
        q: "How can you help others enjoy themselves?",
        options: ["Share fun things with them","Tell them to stop","Ignore them","Be serious"],
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

  return (<Box sx={{p: 2,padding: "20px",textAlign: "center",backgroundColor: "white",minHeight: "80vh",display: "flex",
        flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
      <Typography variant="h3" sx={{color: "black",fontWeight: "bold",fontSize: "44px",mb: 4,width: "100%", gap: 3,fontFamily: "Manrope" }}>
        <TheaterComedyIcon sx={{ color: "#ec4899", fontSize: 50 }} />
        Welcome to Emotion Adventure!
      </Typography>
   
      {!currentEmotion && (
        <Paper elevation={4} sx={{p: 2,borderRadius: 4,width: "60%",boxSizing: "border-box",display: "flex",
          flexDirection: "column",alignItems: "center",backgroundColor: "#F2F0E9"}}>
          <Typography variant="h5" mb={2} color="black" fontFamily="Manrope" fontWeight={700} fontSize={"25px"}>
            Choose an Emotion to Explore
          </Typography>
          {Object.keys(emotions).map((key) => (
            <Button key={key} onClick={() => handleEmotionClick(key)} variant="contained"
              sx={{color: "black",m: 1,backgroundColor: "white",borderRadius: 2,width: "100%",
                "&:hover": { backgroundColor: "#f5f5f5" }}}>
              {emotions[key].emoji} {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
        </Paper>
      )}
      
      {currentEmotion && !showQuiz && !showScore && (
        <Paper elevation={4}
          sx={{p: 3,borderRadius: 4,width: "80%",textAlign: "left",whiteSpace: "pre-line",backgroundColor: "#F8F7F4"}}>
          <Typography variant="h4" gutterBottom >
            {emotions[currentEmotion].emoji} {currentEmotion.toUpperCase()}
          </Typography>
          <Typography mb={2} sx={{ backgroundColor: "#F8F7F4", padding: 2, borderRadius: 2 }}>
            {emotions[currentEmotion].description}
          </Typography>
          {emotions[currentEmotion].questions.length > 0 && (
            <Button variant="contained" onClick={handleStartQuiz} sx={{color: "black", backgroundColor:"#F8F7F4",
              border: '1px solid black',fontFamily: "Manrope",fontWeight: 600,textTransform: "none",fontSize: "16px",
              "&:hover": {
               backgroundColor: "#bfdbfe",
               borderColor: "black",
             } }}>
              Start Quiz
            </Button>
          )}
          <Button onClick={restart} sx={{ ml: 2, color: "black", backgroundColor:"#F8F7F4",border: '1px solid black',
          fontFamily: "Manrope",fontWeight: 600,textTransform: "none",fontSize: "16px",
             "&:hover": {
              backgroundColor: "#bfdbfe",
              borderColor: "black",
            }
          }}>
            Back to Emotions
          </Button>
        </Paper>
      )}

      {showQuiz && (
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, width: "60%", textAlign: "left",bgcolor:"#F8F7F4",color:"black",
          }}>
          <Typography variant="h5" gutterBottom fontFamily={'Manrope'} fontWeight={900} fontSize={"24px"}>
            Question {currentQuestion + 1}:
          </Typography>
          <Typography mb={2} fontFamily={'Manrope'} fontWeight={500} fontSize={"19px"}>
            {emotions[currentEmotion].questions[currentQuestion].q}
          </Typography>
          <Grid container spacing={2}>
            {emotions[currentEmotion].questions[currentQuestion].options.map(
              (option, i) => (
                <Grid item xs={6} key={i} >
                  <Button fullWidth variant="outlined" sx={{color: "black",backgroundColor:"#F8F7F4",border: '1px solid black',
                    fontFamily: "Manrope",fontWeight: 600,textTransform: "none",fontSize: "16px",
                  "&:hover": {
               backgroundColor: "#EEEEEE",
               borderColor: "black",
             }}} 
                    onClick={() => handleAnswer(i)}>
                    {option}
                  </Button>
                </Grid>
              )
            )}
          </Grid>
          <LinearProgress variant="determinate" value={
              ((currentQuestion + 1) /
                emotions[currentEmotion].questions.length) *
              100}
            sx={{ mt: 2,height: 10,backgroundColor: "#CAC8C2",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#51504E",
              },
            }}/>
        </Paper>
      )}

      {showScore && (
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, width: "60%" ,backgroundColor: "#F4F2ED"}}>
          <CheckCircleIcon sx={{ fontSize: 40, color: '#3b82f6' }} />
          <Typography variant="h4" gutterBottom fontFamily={"Manrope"} fontWeight={600} fontSize={"35px"} color="black">
          Quiz Finished!
          </Typography>
          <Typography variant="h5" fontFamily={"Manrope"} fontWeight={500} color ="black">
          Your Score: {score}/{emotions[currentEmotion].questions.length}
          </Typography>
          <Button
            onClick={restart}
            sx={{mt: 2,color: "black",backgroundColor: "white",border: "1px solid black",fontFamily: "Manrope",fontWeight: 600,textTransform: "none"}}>
            Try Another Emotion
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default EmotionAdventure;