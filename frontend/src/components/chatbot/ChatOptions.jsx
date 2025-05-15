import React from "react";
import { Box, Button } from "@mui/material";
import { colors } from "../../data/chatbotData"; 

export default function ChatOptions({ options, onOptionClick }) {
  return (
    <Box sx={{ px: 2, py: 1, bgcolor: colors.mediumBg }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}>
        {options.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => onOptionClick(option)}
            sx={{
              bgcolor: option.text === "Chat with us" ? colors.darkGray : (option.color || colors.buttonPrimary),
              color: option.color === colors.buttonSecondary ? colors.darkGray : colors.white,
              "&:hover": {
                bgcolor: option.text === "Chat with us" ? "#4F4F4F" : (option.color === colors.buttonSecondary ? "#E8E6DF" : "#333333"),
              },
              borderRadius: "8px",
              textTransform: "none",
              justifyContent: "space-between",
              paddingY: 1,
            }}
          >
            {option.text}
            {!option.text.toLowerCase().includes("back") && (
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: option.text === "Chat with us" ? colors.white : (option.color === colors.buttonSecondary ? colors.primary : colors.white),
                  color: option.text === "Chat with us" ? colors.darkGray : (option.color === colors.buttonSecondary ? colors.white : colors.primary),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  marginLeft: 5,
                }}
              >
                ✓
              </span>
            )}
          </Button>
        ))}
      </Box>
    </Box>
  );
}