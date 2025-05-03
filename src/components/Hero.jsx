import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import HeaderImg from "../images/HeaderImg.png";

function CustomPlayArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: "#FCFCFB", overflowX: "auto" }}>
      {/* ✅ العنوان والوصف جنب بعض دايمًا */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap", // يمنع النزول تحت بعض
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: "800px", // عرض كافي يمنع الانفصال على الموبايل
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: "clamp(2rem, 5vw, 5rem)",
              fontFamily: "Manrope",
            }}
          >
            Find Peace of Mind with Wellthy
          </Typography>
        </Box>

        <Box sx={{ width: "48%" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "1.5rem",
              mb: 3,
              fontFamily: "Manrope",
            }}
          >
            Experience a comprehensive holistic approach to mental health care,
            fostering balance, tranquility, resilience, and renewed vitality in
            every aspect of your life.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#000",
                "&:hover": { backgroundColor: "#333" },
                fontFamily: "Manrope",
              }}
              startIcon={<CustomPlayArrowIcon />}
            >
              Start your journey
            </Button>

            <Button
              variant="text"
              startIcon={<CustomPlayArrowIcon />}
              sx={{
                textTransform: "none",
                color: "#000",
                fontFamily: "Manrope",
              }}
            >
              How can we help you start fresh?
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* ✅ صورة وكلمة WELLTHY في المنتصف */}
      <Box width="100%" mt={-10}>
        <Box
          component="img"
          src={HeaderImg}
          alt="Happy Woman"
          sx={{
            py: 2,
            width: "100%",
            height: "auto",
            maxHeight: "600px",
            objectFit: "contain",
            borderRadius: "20px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: "clamp(3rem, 15vw, 15rem)",
              fontFamily: "Manrope",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <span style={{ letterSpacing: "0.25em" }}>
            WELLTH
          </span>
          Y
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}