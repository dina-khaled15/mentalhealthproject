import React from "react";
import { Box, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";

const SafeMessage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F8F7F4",
        borderRadius: "16px",
        padding: "10px 32px",
        maxWidth: "660px",
        height:"70vh",
        mx: "auto",
        textAlign: "center",
        my: 3,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        color="black"
        fontFamily={"Manrope"}
        fontWeight={700}
        fontSize={"35px"}
      >
        Welcome to Your Safe Space!
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        mt={3}
        color="black"
        fontFamily={"Manrope"}
        fontWeight={600}
        fontSize={"30px"}
      >
        <strong>
          Hello, little heroes!{" "}
          <WavingHandIcon
            sx={{ fontSize: "40px", color: "#FFA500", verticalAlign: "middle" }}
          />
        </strong>
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color="black"
        fontFamily={"Manrope"}
        fontWeight={500}
        fontSize={"20px"}
      >
        We’re here to help you feel happy, understand yourself better,and learn
        how to take care of your mind and heart.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        color="black"
        fontFamily={"Manrope"}
        fontWeight={500}
        fontSize={"20px"}
      >
        On our website, you’ll find fun information, helpful games, and simple
        tips to help you grow stronger and happier every day.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        mt={3}
        color="black"
        fontFamily={"Manrope"}
        fontWeight={400}
        fontSize={"25px"}
      >
        <strong>Always remember:</strong>
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        color="black"
        fontFamily={"Manrope"}
        fontWeight={450}
        fontSize={"20px"}
      >
        - You are important.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color="black"
        fontFamily={"Manrope"}
        fontWeight={450}
        fontSize={"20px"}
      >
        - You are smart and brave.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color="black"
        fontFamily={"Manrope"}
        fontWeight={450}
        fontSize={"20px"}
      >
        - And every new day is a chance to be even better.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        mt={2}
        color="black"
        fontFamily={"Manrope"}
        fontWeight={700}
        fontSize={"30px"}
      >
        Ready to start this journey with us?{" "}
        <FontAwesomeIcon
          icon={faPlaneUp}
          size="lg"
          style={{ color: "#FFA500", verticalAlign: "middle" }}
        />
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color="black"
        fontFamily={"Manrope"}
        fontWeight={600}
        fontSize={"30px"}
      >
        We’re so happy you’re here!
      </Typography>
    </Box>
  );
};

export default SafeMessage;
