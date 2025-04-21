import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import styles from "./QA.module.css";

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
const FAQHeader = () => {
  return (
    <Box
      className={`${styles.faqHeader}`}
      sx={{
        backgroundColor: "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        margin: "auto",
        border: "1px solid #444",
        borderRadius: "12px",
        padding: "10px 16px",
        width: "fit-content",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#333",
        },
      }}
    >
      <InfoOutlinedIcon sx={{ fontSize: 24, color: "white" }} />
      <Typography variant="h6" sx={{ fontSize: "1rem", color: "white" }}>
        FAQ
      </Typography>
    </Box>
  );
};

const QA = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      className={`${styles.pageContainer} ${styles.darkBackground}`}
      sx={{ width: "100vw" }}
    >
      {/* FAQ Content */}
      <Box className={styles.faqContainer} sx={{ backgroundColor: "#111" }}>
        <Box className={styles.faqHeader}>
          <FAQHeader />
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
              className={`${styles.faqItem} ${styles.faqItemDark}`}
              onClick={() => handleClick(index)}
            >
              <Box className={styles.questionRow}>
                <Typography variant="body1">{faq.question}</Typography>
                <Typography
                  className={styles.toggleArrow}
                  sx={{
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {openIndex === index ? "▴" : "▾"}
                </Typography>
              </Box>
              {openIndex === index && (
                <Typography
                  className={styles.answerText}
                  sx={{ color: "#aaa" }}
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
