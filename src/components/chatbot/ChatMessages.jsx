import React from "react";
import { Box, Avatar, Typography, Button, CircularProgress } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../../data/chatbotData"; 

export default function ChatMessages({ messages, isTyping, onOptionClick, messagesEndRef }) {
  return (
    <Box
      style={{
        flexGrow: 1,
        overflowY: "auto",
        padding: "16px",
        backgroundColor: colors.lightBg,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {messages.map((msg, idx) => (
        <Box
          key={idx}
          sx={{
            display: "flex",
            justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
            mb: 2,
          }}
        >
          {msg.from === "bot" && (
            <Avatar
              sx={{
                bgcolor: colors.mediumBg,
                color: colors.primary,
                width: 32,
                height: 32,
                mr: 1,
                mt: 0.5,
                flexShrink: 0,
              }}
            >
              <SentimentSatisfiedAltIcon fontSize="small" />
            </Avatar>
          )}
          <Box
            sx={{
              maxWidth: "75%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                backgroundColor: msg.from === "user" ? colors.userBubble : colors.botBubble,
                color: colors.darkGray,
                padding: "10px 14px",
                borderRadius: msg.from === "user" ? "15px 15px 0 15px" : "15px 15px 15px 0",
                boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography variant="body2">{msg.text}</Typography>
            </Box>
            {msg.from === "bot" && msg.buttons && msg.buttons.length > 0 && (
              <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                {msg.buttons.map((button, btnIdx) => (
                  <Button
                    key={btnIdx}
                    variant="contained"
                    size="small"
                    endIcon={<ArrowForwardIcon fontSize="small" />}
                    onClick={() => onOptionClick(button)}
                    sx={{
                      bgcolor: colors.buttonPrimary,
                      color: colors.white,
                      "&:hover": { bgcolor: "#333333" },
                      borderRadius: "8px",
                      textTransform: "none",
                      alignSelf: "flex-start",
                      py: 0.75,
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {button.text}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
          {msg.from === "user" && (
            <Avatar
              sx={{
                bgcolor: colors.primary,
                color: colors.white,
                width: 32,
                height: 32,
                ml: 1,
                mt: 0.5,
                flexShrink: 0,
              }}
            >
              U
            </Avatar>
          )}
        </Box>
      ))}
      {isTyping && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 2,
          }}
        >
          <Avatar
            sx={{
              bgcolor: colors.mediumBg,
              color: colors.primary,
              width: 32,
              height: 32,
              mr: 1,
              flexShrink: 0,
            }}
          >
            <SentimentSatisfiedAltIcon fontSize="small" />
          </Avatar>
          <Box
            sx={{
              backgroundColor: colors.botBubble,
              color: colors.darkGray,
              padding: "12px 18px",
              borderRadius: "15px 15px 15px 0",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CircularProgress size={16} thickness={5} sx={{ color: colors.primary }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Typing...
            </Typography>
          </Box>
        </Box>
      )}
      <div ref={messagesEndRef} />
    </Box>
  );
}