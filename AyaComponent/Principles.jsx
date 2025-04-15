import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BoltIcon from "@mui/icons-material/Bolt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DiamondIcon from "@mui/icons-material/Diamond";

const values = [
  {
    icon: <AccessTimeIcon sx={{ fontSize: 30 }} />,
    title: "24/7 Customer Support",
    description:
      "Our team is here 24/7 to assist with any questions or concerns.",
  },
  {
    icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
    title: "Direct Access to Experts",
    description:
      "Connect with licensed professionals for personalized advice and answers.",
  },
  {
    icon: <BoltIcon sx={{ fontSize: 30 }} />,
    title: "Timely Responses",
    description:
      "We respond quickly and efficiently to ensure you get the help you need.",
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 30 }} />,
    title: "Tailored Solutions",
    description: "We offer tailored mental health services to meet your needs.",
  },
];

export default function PrinciplesSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        px: { xs: 2, md: 10 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: 8,
      }}
    >
      {/* Right side: العنوان */}
      <Box
        sx={{
          flex: 1,
          textAlign: "left",
        }}
      >
        <Button
          startIcon={<DiamondIcon />}
          variant="outlined"
          sx={{
            borderColor: "#555",
            color: "#fff",
            textTransform: "none",
            borderRadius: "30px",
            px: 3,
          }}
        >
          Values
        </Button>
        <Typography variant="h3" fontWeight="600" lineHeight={1.2}>
          Principles That
        </Typography>
        <Typography variant="h3" fontWeight="600" lineHeight={1.2}>
          Drives Us
        </Typography>
      </Box>

      {/* Left side: العناصر 2x2 جنب بعض */}
      <Box
        sx={{
          flex: 1.5,
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {values.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "calc(50% - 16px)", // علشان كل سطر فيه عنصرين
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#1E1E1E",
                p: 2,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 56,
                width: 56,
              }}
            >
              {item.icon}
            </Box>
            <Typography variant="h6" fontWeight="600">
              {item.title}
            </Typography>
            <Typography variant="body1" color="#A0A0A0">
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
