import React from "react";
import { Typography, Chip, Box, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import benefitImg from "./benefit.png";

const Benefit = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        gap: 4,
        minHeight: "100vh",
        overflow: "hidden", // يمنع السكروول
        boxSizing: "border-box",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Image with Overlay */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", maxWidth: 600 }}>
          <Box
            component="img"
            src={benefitImg}
            alt="benefit"
            sx={{
              width: "600px",
              height: "700px",
              borderRadius: 2,
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Overlay box */}
          <Paper
            elevation={3}
            sx={{
              position: "absolute",
              bottom: 24,
              right: 24,
              padding: 3,
              width: "70%",
              maxWidth: 300,
              display: { xs: "none", md: "block" },
              backgroundColor: "white",
              borderRadius: 2,
              textAlign: "left",
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Experience Professionals
            </Typography>
            <Typography variant="body2">
              Our team is made up of skilled and compassionate mental health
              experts with years of experience in providing effective care.
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Text Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          gap: 2,
          px: { xs: 2, md: 0 },
        }}
      >
        <Chip
          icon={<FavoriteIcon />}
          label="Benefits"
          sx={{
            fontSize: "0.875rem",
            fontWeight: 500,
            px: 1.5,
            py: 0.5,
          }}
        />
        <Typography variant="h4" fontWeight={600}>
          The Benefits of Choosing Wellthy
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.6 }}>
          Wellthy combines experienced professionals, personalized care, and a
          supportive environment to provide comprehensive mental health services
          that meet your unique needs, ensuring privacy, comfort, and lasting
          support.
        </Typography>
        <Box component="ul" sx={{ pl: 0, listStyle: "none", m: 0 }}>
          {[
            "Experience Professionals",
            "Personalized Care",
            "Confidential and Safe",
            "Comprehensive Service",
            "Supportive Community",
          ].map((item, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                fontSize: "1.125rem",
                color: "#555",
                fontWeight: 500,
                mb: 1,
              }}
            >
              {index === 0 ? <strong>{item}</strong> : item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Benefit;
