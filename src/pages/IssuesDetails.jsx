import React, { useEffect, useState } from "react";
import Navbar from "../components/navmodule/Navbar";
import FooterComponent from "../components/footer/contact";
import "../App.css";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
// Import all images
import managementImg from "../images/Management.png";
import groupImg from "../images/Group.png";
import aloneImg from "../images/Alone.png";
import image from "../images/1.png";
import black from "../images/black.png";
import depressionImg from "../images/Depression.png";
import stressImg from "../images/Stress.png";
import anxietyImg from "../images/Anxeity.png";
import relationshipImg from "../images/Relationship.png";
import griefImg from "../images/Loss.jpg";
import selfconfidenceImg from "../images/Confidence.png";
import eatingImg from "../images/Eating.png";
import substanceImg from "../images/Abuse.png";
import socialImg from "../images/Social.png";
import FaceIcon from '@mui/icons-material/Face';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import BuildIcon from '@mui/icons-material/Build';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GavelIcon from '@mui/icons-material/Gavel';
import FavoriteIcon from '@mui/icons-material/Favorite';  // بديل لـ HeartIcon
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import LoopIcon from '@mui/icons-material/Loop';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SpaIcon from '@mui/icons-material/Spa';  // بديل لـ RelaxationIcon

const issueContents = {
  "Stress Management": {
    title: "Stress Management",
    mainImage: stressImg,
    description: "Stress is an inescapable part of modern life, but its impact can be managed. Our stress management program offers personalized solutions to help you regain control of your work and your life.",
    whatIsIt: "We understand that the weight of stress can take a toll on your well-being. Introducing our personal and group therapy for the Stress Management Psychological Treatment, a holistic approach that empowers you to regain control over your life and find lasting relief from the burdens of stress through our personalized assessments, practical coping techniques and regular therapy sessions.",
    benefits: [
      {
        title: "Improved Mental Health",
        description: "Effective work life stress management contributes to better physical and mental health a long run.",
        icon: <AddCircleIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
      },
      {
        title: "Enhanced Mental Resilience",
        description: "You will develop increased resilience to face more of life's challenges and ready to manage more stress in your life.",
        icon: <BatteryAlertIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "Better Personal Relationships",
        description: "Reduced stress can lead to improved life relationships and more effective communication with each other.",
        icon: <FavoriteBorderIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "Enhanced Work Productivity",
        description: "You will discover increased productivity and enhanced focus, be it in your daily life or your work life.",
        icon: <TipsAndUpdatesIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      }
    ],
    testimonial: {
      text: "Thanks for their unwavering support during a challenging period in my life. The care and understanding of their team, coupled with effective therapeutic approaches, truly made a difference in my fulfilling life.",
      name: "Leonard V.",
      role: "Client From England"
    },
    statistic: "2 out of 10 Office Workers Suffer from Stress"
  },
  "Depression": {
    title: "Depression",
    mainImage: depressionImg,
    description: "Depression affects millions worldwide, often silently. Our depression treatment program provides compassionate care and evidence-based approaches to help you find your way back to joy and fulfillment.",
    whatIsIt: "Depression is more than just feeling sad—it's a complex condition that affects your mind, body, and spirit. Our depression treatment combines personalized therapy, medication management when appropriate, and lifestyle support to address all aspects of your wellbeing and help you rebuild a meaningful life.",
    benefits: [
      {
        title: "Renewed Hope",
        description: "Regain a sense of possibility and optimism as you work through your depression with proven therapeutic techniques.",
        icon: <AddCircleIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
      },
      {
        title: "Improved Daily Functioning",
        description: "Gradually recover your energy, motivation, and ability to engage in activities that bring you fulfillment.",
        icon: <BatteryAlertIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "Better Self-Understanding",
        description: "Gain insights into your thought patterns and develop healthier ways of relating to yourself and others.",
        icon: <FavoriteBorderIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "Long-term Resilience",
        description: "Build skills to manage future challenges and prevent relapse through sustainable coping strategies.",
        icon: <TipsAndUpdatesIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      }
    ],
    testimonial: {
      text: "After years of struggling with depression, I finally found a team that truly understood what I was going through. Their comprehensive approach has given me back my life and taught me how to navigate difficult emotions.",
      name: "Sarah M.",
      role: "Client From Canada"
    },
    statistic: "1 in 5 Adults Experience Depression in Their Lifetime"
  },
  "Anxiety": {
    title: "Anxiety",
    mainImage: anxietyImg,
    description: "Anxiety can feel overwhelming, but it doesn't have to control your life. Our anxiety treatment program helps you understand, manage, and eventually overcome the constant worry and fear.",
    whatIsIt: "Our anxiety treatment program combines cognitive-behavioral techniques, mindfulness practices, and personalized coping strategies to help you break free from the cycle of anxiety. We focus on both immediate symptom relief and developing long-term skills for lasting peace of mind.",
    benefits: [
      {
        title: "Reduced Physical Symptoms",
        description: "Learn techniques to manage the physical manifestations of anxiety like rapid heartbeat, shallow breathing, and muscle tension.",
        icon: <AddCircleIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
      },
      {
        title: "Mental Clarity",
        description: "Clear the mental fog of anxious thoughts and develop a more balanced perspective on life's challenges.",
        icon: <BatteryAlertIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "Improved Social Confidence",
        description: "Reconnect with others without the interference of social anxiety or constant worry about judgment.",
        icon: <FavoriteBorderIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "Greater Life Engagement",
        description: "Stop avoiding situations due to anxiety and start fully participating in activities that bring you joy and fulfillment.",
        icon: <TipsAndUpdatesIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      }
    ],
    testimonial: {
      text: "The tools I've gained through this anxiety program have completely transformed how I respond to stress. Instead of being paralyzed by worry, I now have practical strategies that help me stay grounded and move forward.",
      name: "Michael T.",
      role: "Client From Australia"
    },
    statistic: "Anxiety Disorders Affect 40 Million Adults in the United States"
  },

  "Grief & Loss": {
    title: "Grief & Loss",
    mainImage: griefImg,
    description: "Grief is a natural response to loss, but navigating it alone can be overwhelming. Our grief therapy provides a compassionate space to process your emotions and find a path forward while honoring your loss.",
    whatIsIt: "Our grief therapy acknowledges that everyone's grief journey is unique. We offer a supportive environment where you can express your feelings without judgment, make sense of your loss, and gradually rebuild your life while maintaining meaningful connections to what has been lost.",
    benefits: [
      {
        title: "Emotional Processing",
        description: "Find healthy ways to express and work through complex emotions associated with grief including sadness, anger, guilt, and relief.",
        icon: <AddCircleIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
      },
      {
        title: "Meaning Making",
        description: "Develop a narrative that helps you make sense of your loss and integrate it into your life story in a meaningful way.",
        icon: <BatteryAlertIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "Coping Strategies",
        description: "Learn practical ways to manage grief triggers, difficult anniversaries, and the day-to-day challenges of life after loss.",
        icon: <FavoriteBorderIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      },
      {
        title: "New Identity Formation",
        description: "Discover who you are now and how to move forward while keeping the memory of what you've lost as part of your life.",
        icon: <TipsAndUpdatesIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
      }
    ],
    testimonial: {
      text: "I never thought I would smile again after my loss, but the gentle guidance I received helped me find joy without feeling guilty. They taught me that healing doesn't mean forgetting - it means finding a new way to carry what matters.",
      name: "Rebecca L.",
      role: "Client From Ireland"
    },
    statistic: "Over 2 Million People Experience the Death of a Loved One Each Year"
  },
  "Self-Confidence": {
  title: "Self-Confidence",
  mainImage: selfconfidenceImg,
  description: "Self-confidence is the belief in your abilities and judgment. It's the foundation of mental health and personal development. Our self-confidence therapy helps you build a positive self-image and the courage to take on life's challenges.",
  whatIsIt: "Our self-confidence therapy focuses on enhancing your self-worth, breaking through negative self-beliefs, and developing the tools to assert yourself in both personal and professional life. We create a supportive space to empower you to thrive.",
  benefits: [
    {
      title: "Self-Awareness",
      description: "Gain a clear understanding of your strengths and areas for growth, enabling you to embrace your true self.",
      icon: <FaceIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
    },
    {
      title: "Positive Thinking",
      description: "Learn techniques to overcome self-doubt and foster a mindset that supports success and personal growth.",
      icon: <StarOutlineIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Resilience Building",
      description: "Develop strategies to overcome setbacks and remain positive in challenging situations.",
      icon: <BuildIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Assertiveness Training",
      description: "Learn to express yourself with confidence, set boundaries, and communicate your needs effectively.",
      icon: <SendIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    }
  ],
  testimonial: {
    text: "Working on my self-confidence transformed my life. I no longer feel small or incapable – I can face challenges with optimism and conviction.",
    name: "John D.",
    role: "Client From USA"
  },
  statistic: "Over 60% of adults report low self-confidence impacting their daily lives."
},
"Relationship Issues": {
  title: "Relationship Issues",
  mainImage: relationshipImg,
  description: "Relationship issues can stem from communication breakdowns, trust issues, or differing expectations. Our therapy helps couples and individuals navigate these challenges, enhancing understanding and fostering healthy connections.",
  whatIsIt: "Our therapy focuses on improving communication, rebuilding trust, and creating healthier patterns in relationships. Whether you're navigating a romantic partnership, family dynamic, or friendship, we offer practical tools to resolve conflicts and strengthen bonds.",
  benefits: [
    {
      title: "Improved Communication",
      description: "Learn how to express your needs and listen effectively to others, fostering mutual respect and understanding.",
      icon: <ChatIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
    },
    {
      title: "Trust Building",
      description: "Rebuild trust by addressing past hurts, clarifying expectations, and developing openness in your relationship.",
      icon: <LockOpenIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Conflict Resolution",
      description: "Gain strategies to navigate disagreements respectfully, promoting compromise and resolution.",
      icon: <GavelIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Strengthening Emotional Connection",
      description: "Reignite emotional intimacy and create deeper bonds based on empathy, affection, and respect.",
      icon: <FavoriteIcon  sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    }
  ],
  testimonial: {
    text: "Our relationship was on the brink of falling apart. With the therapist's guidance, we rebuilt our connection and now communicate better than ever.",
    name: "Sophia and Liam",
    role: "Couple From Canada"
  },
  statistic: "Around 40% of marriages in the U.S. experience significant relationship challenges."
},
"Eating Disorder": {
  title: "Eating Disorder",
  mainImage: eatingImg,
  description: "Eating disorders are complex conditions that affect mental health and physical well-being. Our therapy offers a compassionate, evidence-based approach to address the underlying causes of disordered eating behaviors.",
  whatIsIt: "We provide a holistic approach to healing from eating disorders, focusing on developing a healthy relationship with food, body acceptance, and emotional regulation. Our therapists work collaboratively with you to understand the root causes of your behaviors and provide the tools to achieve long-term recovery.",
  benefits: [
    {
      title: "Body Image Healing",
      description: "Work through negative body image and learn to appreciate your body for what it can do, not how it looks.",
      icon: <FitnessCenterIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
    },
    {
      title: "Mindful Eating",
      description: "Learn how to eat mindfully, making choices that support your body and emotional health.",
      icon: <RestaurantIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Emotional Regulation",
      description: "Gain tools to cope with emotions without turning to food, fostering healthier responses to stress and triggers.",
      icon: <SentimentDissatisfiedIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Behavioral Change",
      description: "Break free from the cycles of restrictive eating or bingeing, adopting healthier habits and mindsets.",
      icon: <LoopIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    }
  ],
  testimonial: {
    text: "I thought I would never be free from my eating disorder, but with the support I received, I’ve rebuilt my relationship with food and my body.",
    name: "Emily W.",
    role: "Client From UK"
  },
  statistic: "1 in 10 people will struggle with an eating disorder at some point in their lives."
},
"Substance Abuse": {
  title: "Substance Abuse",
  mainImage: substanceImg,
  description: "Substance abuse can have a significant impact on every aspect of life. Our therapy helps individuals break free from addiction, heal emotionally, and rebuild a healthy lifestyle.",
  whatIsIt: "Our substance abuse therapy focuses on understanding the root causes of addiction, offering support through detoxification, and helping individuals develop coping mechanisms and strategies for long-term recovery.",
  benefits: [
    {
      title: "Addiction Recovery",
      description: "Develop a personalized plan to overcome substance dependence and gain the strength to stay sober.",
      icon: <LocalDrinkIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
    },
    {
      title: "Coping Strategies",
      description: "Learn healthy ways to cope with triggers and stress without turning to substances.",
      icon: <ThermostatIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Relapse Prevention",
      description: "Build resilience and a support network to prevent relapse and maintain your sobriety.",
      icon: <AddAlertIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Life Skills Development",
      description: "Develop essential life skills to navigate social situations, work, and personal relationships effectively.",
      icon: <SchoolIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    }
  ],
  testimonial: {
    text: "Thanks to the therapy I received, I’ve been sober for over a year now and am living a life full of hope and purpose.",
    name: "Michael S.",
    role: "Client From Australia"
  },
  statistic: "Over 20 million people in the U.S. struggle with a substance use disorder."
},
"Social Anxiety": {
  title: "Social Anxiety",
  mainImage: socialImg,
  description: "Social anxiety affects your ability to interact confidently in social situations. Our therapy provides tools to manage anxiety, increase self-esteem, and empower you to engage more comfortably in social environments.",
  whatIsIt: "Social anxiety therapy helps you face your fears of judgment, embarrassment, and rejection. We work together to build confidence, challenge negative thoughts, and increase your ability to navigate social situations with ease.",
  benefits: [
    {
      title: "Cognitive Restructuring",
      description: "Identify and challenge negative beliefs that fuel your anxiety, replacing them with healthier, realistic thoughts.",
      icon: <PsychologyIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
    },
    {
      title: "Exposure Therapy",
      description: "Gradually face feared social situations to desensitize yourself to anxiety-provoking experiences.",
      icon: <GroupIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Confidence Building",
      description: "Develop the skills and mindset needed to interact confidently, whether in small groups or large gatherings.",
      icon: <GroupAddIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    },
    {
      title: "Relaxation Techniques",
      description: "Learn techniques such as deep breathing and mindfulness to calm your nerves before and during social interactions.",
      icon: <SpaIcon sx={{ fontSize: 40, color: "black", mt: 0.5 }} />
    }
  ],
  testimonial: {
    text: "Therapy helped me overcome my social anxiety, and now I feel comfortable in situations I used to avoid. I’ve regained control of my social life.",
    name: "Sarah T.",
    role: "Client From Germany"
  },
  statistic: "Approximately 15 million adults in the U.S. struggle with social anxiety disorder."
},
};

const Details = () => {
  const { title } = useParams();
  const [issueData, setIssueData] = useState(null);
  
  useEffect(() => {
    // Set issue data based on the title parameter
    const decodedTitle = decodeURIComponent(title);
    
    // If we have content for this issue, use it; otherwise use default (Stress Management)
    if (issueContents[decodedTitle]) {
      setIssueData(issueContents[decodedTitle]);
    } else {
      setIssueData(issueContents["Stress Management"]);
    }
  }, [title]);

  // Return loading state while data is being fetched
  if (!issueData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              fontWeight={500}
              fontSize={80}
              fontFamily={"Manrope"}
              gutterBottom
              sx={{ ml: 14 }}
            >
              {issueData.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              fontFamily="Manrope"
              ml={14}
            >
              {issueData.description}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{ position: "relative", width: "100%", height: 400, mt: 5 }}
            >
              <Box
                component="img"
                src={issueData.mainImage}
                alt={issueData.title}
                sx={{
                  width: 500,
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                  ml: 20,
                }}
              />
              <PlayCircleOutlineIcon
                sx={{
                  fontSize: 40,
                  color: "#fff",
                  position: "absolute",
                  top: 16,
                  left: 16,
                  ml: 20,
                  borderRadius: "50%",
                  padding: "4px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} mt={4} ml={12}>
          <Grid item xs={12} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={groupImg}
                alt="Group"
                sx={{
                  width: 580,
                  height: 210,
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Card
              sx={{
                height: 210,
                width: 250,
                backgroundColor: "#F2F0E9",
                color: "black",
                borderRadius: 5,
              }}
            >
              <CardContent sx={{ mr: 2 }}>
                <Typography
                  variant="h6"
                  fontFamily={"Manrope"}
                  fontSize={21}
                  fontWeight={700}
                  mt={1}
                  mb={1}
                >
                  "{issueData.statistic}"
                </Typography>
                <Typography
                  variant="caption"
                  color="inherit"
                  fontFamily={"Manrope"}
                  fontSize={16}
                  fontWeight={500}
                >
                  - Psychological Studies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={aloneImg}
                alt="Alone"
                sx={{
                  width: 300,
                  height: 210,
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box mt={10} ml={13}>
          <Typography
            variant="h5"
            fontWeight={800}
            fontSize={40}
            fontFamily={"Manrope"}
            gutterBottom
          >
            What is it?
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ width: "100%", fontFamily: "Manrope", fontSize: 18 }}
            >
              {issueData.whatIsIt}
            </Typography>
          </Box>
        </Box>
        <Box mt={6} ml={13} mb={10}>
          <Typography
            variant="h5"
            fontWeight={1000}
            fontFamily={"Manrope"}
            fontSize={40}
            gutterBottom
            sx={{ mb: 6, mt: 9 }}
          >
            What will you get?
          </Typography>
          <Grid container spacing={3}>
            {issueData.benefits.map((benefit, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  {benefit.icon}
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={800}
                      fontFamily={"Manrope"}
                      fontSize={25}
                    >
                      {benefit.title.split(' ').map((word, i, arr) => (
                        <React.Fragment key={i}>
                          {word}
                          {i === arr.length - 1 ? '' : ' '}
                          {i === 1 && <br />}
                        </React.Fragment>
                      ))}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight={600}
                      fontFamily={"Manrope"}
                      fontSize={13}
                    >
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={4} ml={13}>
          <Grid container spacing={9}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 570,
                  borderRadius: 4,
                  overflow: "hidden",
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src={black}
                  alt="black background"
                  sx={{ width: 700, height: 450, objectFit: "cover" }}
                />

                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    textTransform: "none",
                    fontSize: "13px",
                    fontFamily: "Manrope",
                    fontWeight: 600,
                    top: 16,
                    left: 16,
                    border: "2px solid #D3D3D3",
                    borderRadius: "30px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                >
                  # How it Works
                </Button>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  fontFamily={"Manrope"}
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: 16,
                    color: "black",
                    fontSize: "35px",
                    ml: 1,
                  }}
                >
                  Your Path
                  <br /> to Wellness
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box
                  mb={4}
                  display="flex"
                  alignItems="flex-start"
                  gap={2}
                  position="relative"
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: 22,
                      position: "relative",
                      ml: "-103px",
                      zIndex: 1,
                    }}
                  >
                    1
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      fontFamily="Manrope"
                      gutterBottom
                      fontSize="25px"
                      ml={4}
                    >
                      Assessment
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily="Manrope"
                      fontSize="14px"
                      ml={4}
                    >
                      Our experienced therapist will assess and understand your
                      <br />
                      mental health needs through conversation and tests.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  mb={4}
                  display="flex"
                  alignItems="flex-start"
                  gap={2}
                  position="relative"
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: 22,
                      position: "relative",
                      ml: "-103px",
                      zIndex: 1,
                    }}
                  >
                    2
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      fontFamily="Manrope"
                      gutterBottom
                      fontSize="25px"
                      ml={4}
                    >
                      Sessions
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily="Manrope"
                      fontSize="14px"
                      ml={4}
                    >
                      We will decide on regular counseling or group support and
                      execute
                      <br />
                      based on the assessment with a therapist.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  gap={2}
                  position="relative"
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: 22,
                      position: "relative",
                      ml: "-103px",
                      zIndex: 1,
                    }}
                  >
                    3
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      fontFamily="Manrope"
                      gutterBottom
                      fontSize="25px"
                      ml={4}
                    >
                      Tracking
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily="Manrope"
                      fontSize="14px"
                      ml={4}
                    >
                      The therapist assigned to your case will monitor and
                      adjust your
                      <br />
                      therapy session progress to make sure you get the best
                      experience.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box mt={8} sx={{ backgroundColor: "#F2F0E9", p: 4, borderRadius: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Button
              variant="contained"
              sx={{
                border: "2px solid #D3D3D3",
                borderRadius: "4px",
                textTransform: "none",
                backgroundColor: "white",
                fontFamily: "Manrope",
                fontWeight: "700px",
                color: "black",
              }}
            >
              # Testimonials
            </Button>
          </Box>

          <Typography
            variant="h5"
            gutterBottom
            textAlign="center"
            fontWeight={600}
            fontFamily={"Manrope"}
          >
            "{issueData.testimonial.text}"
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            <Avatar src={image} sx={{ width: 56, height: 56, mr: 2 }} />
            <Box>
              <Typography variant="subtitle1">{issueData.testimonial.name}</Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontFamily={"Manrope"}
              >
                {issueData.testimonial.role}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
};

export default Details;