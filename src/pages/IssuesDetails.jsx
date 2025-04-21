import React from "react";
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
import managementImg from "../images/Management.png";
import groupImg from "../images/Group.png";
import aloneImg from "../images/Alone.png";
import image from "../images/1.png";
import black from "../images/black.png";

const Details = () => {
  const { title } = useParams();

  return (
    <>
      <Navbar />

      <Box sx={{ p: 4 }}>
        {/* Hero Section */}
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
              Stress
              <br />
              Management
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              fontFamily="Manrope"
              ml={14}
            >
              Stress is an inescapable part of modern life, but its impact
              <br />
              can be managed. Our stress management
              <br />
              program offers personalized solutions to help you
              <br /> regain control of your work and your life.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{ position: "relative", width: "100%", height: 400, mt: 5 }}
            >
              <Box
                component="img"
                src={managementImg}
                alt="Management"
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

        {/* New Stats Section */}
        <Grid container spacing={4} mt={4} ml={12}>
          {/* Group Image */}
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

          {/* Text Card with Black Background */}
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
                  “2 out of 10 <br />
                  Office Workers
                  <br />
                  Suffer from Stress”
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

          {/* Alone Image */}
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

        {/* What is it Section */}
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
              sx={{ width: "48%", fontFamily: "Manrope", fontSize: 18 }}
            >
              We understand that the weight of stress can take a toll on your
              well-
              <br />
              being.Introducing our personal and group therapy for the stress
              <br />
              Management Psychological Treatment, a holistic approach that
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ width: "48%", fontFamily: "Manrope", fontSize: 18 }}
            >
              empowers you to regain control over your life and find lasting
              relief
              <br />
              from the burdens of stress through our personalized assessments
              <br />
              practical coping techniques and regular therapy sessions.
            </Typography>
          </Box>
        </Box>

        {/* Benefits Section */}
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
            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <AddCircleIcon sx={{ fontSize: 30, color: "black", mt: 0.5 }} />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    fontFamily={"Manrope"}
                    fontSize={25}
                  >
                    Improved Mental <br />
                    Health
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                    fontFamily={"Manrope"}
                    fontSize={13}
                  >
                    Effective work life stress management
                    <br /> contributes to better physical and
                    <br /> mental health a long run.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <BatteryAlertIcon
                  sx={{ fontSize: 40, color: "black", mt: 0.5 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    fontFamily={"Manrope"}
                    fontSize={25}
                  >
                    Enhanced Mental
                    <br /> Resilience
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                    fontFamily={"Manrope"}
                    fontSize={13}
                  >
                    You will develop increeased resilience to
                    <br /> face more of life's challenges and ready
                    <br /> to manage more stress in your life.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <FavoriteBorderIcon
                  sx={{ fontSize: 40, color: "black", mt: 0.5 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    fontFamily={"Manrope"}
                    fontSize={25}
                  >
                    Better Personal
                    <br /> Relationships
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                    fontFamily={"Manrope"}
                    fontSize={13}
                  >
                    Reduced stress can lead to improved
                    <br /> life relationships and more effective
                    <br /> communication with each other.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <TipsAndUpdatesIcon
                  sx={{ fontSize: 40, color: "black", mt: 0.5 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    fontFamily={"Manrope"}
                    fontSize={25}
                  >
                    Enhanced Work <br />
                    Productivity
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                    fontFamily={"Manrope"}
                    fontSize={13}
                  >
                    You will discover increased productivity <br />
                    and enhanced focus, be it in your daily
                    <br /> life or your work life.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Image + How it works + Steps with Icons */}
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
              {/* Step 1 */}
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                {/* Step 1 */}
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

                {/* Step 2 */}
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

                {/* Step 3 */}
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
        {/* Testimonials Section */}
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
            “Thanks for their unwavering support during a challenging period in
            my life. The care and understanding of their team, coupled with
            effective therapeutic approaches, truly made a difference in my
            fulfilling life.”
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            <Avatar src={image} sx={{ width: 56, height: 56, mr: 2 }} />
            <Box>
              <Typography variant="subtitle1">Leonard V.</Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                fontFamily={"Manrope"}
              >
                Client From England
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
