import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const faqs = [
  {
    question: "Q: What services does Wellthy offer?",
    answer:
      "We offer a wide range of mental health services including individual therapy, group therapy, online counseling, and more.",
  },
  {
    question: "Q: How can I book a session?",
    answer: "You can book a session through our website or mobile app.",
  },
  {
    question: "Q: Do you accept insurance?",
    answer:
      "Yes, we accept various insurance plans. Please check our website for more details.",
  },
  {
    question: "Q: Are online sessions available?",
    answer: "Yes, we provide online counseling sessions for your convenience.",
  },
];

const FAQHeader = ({ darkMode }) => {
  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#222" : "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        margin: "auto",
        border: "1px solid",
        borderColor: darkMode ? "#444" : "#ddd",
        borderRadius: "12px",
        padding: "10px 16px",
        width: "fit-content",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: darkMode ? "#333" : "#f5f5f5",
        },
      }}
    >
      <InfoOutlinedIcon
        sx={{ fontSize: 24, color: darkMode ? "white" : "black" }}
      />
      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", color: darkMode ? "white" : "black" }}
      >
        FAQ
      </Typography>
    </Box>
  );
};

const QA = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#111" : "#f9f9f9",
        color: darkMode ? "white" : "black",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        transition: "background-color 0.3s ease, color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        padding: "40px 20px",
      }}
    >
      {/* Dark/Light Toggle Button */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 60,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "20px",
            backgroundColor: darkMode ? "#ddd" : "#333",
            color: darkMode ? "#000" : "#fff",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </Box>

      {/* FAQ Box */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "12px",
          boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
          padding: "20px",
          backgroundColor: darkMode ? "#111" : "#fff",
        }}
      >
        <Box textAlign="center" mb={3}>
          <FAQHeader darkMode={darkMode} />
          <Typography variant="h4" mt={2} fontWeight="bold">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" mt={1}>
            Some of the most common things people ask us about Wellthy
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Box
              key={index}
              onClick={() => handleClick(index)}
              sx={{
                borderBottom: `1px solid ${darkMode ? "#444" : "#ccc"}`,
                padding: "15px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: darkMode ? "#222" : "#e0e0e0",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">{faq.question}</Typography>
                <Typography
                  sx={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    fontSize: "1.2rem",
                  }}
                >
                  {openIndex === index ? "▴" : "▾"}
                </Typography>
              </Box>
              {openIndex === index && (
                <Typography
                  sx={{
                    padding: "10px 5px 0",
                    fontSize: "0.95rem",
                    color: darkMode ? "#aaa" : "#333",
                  }}
                >
                  {faq.answer}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default QA;
