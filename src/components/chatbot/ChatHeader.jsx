import React from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Chat from "@mui/icons-material/Chat"; // Use Chat instead of ChatIcon
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { colors } from "../../data/chatbotData"; // Named import

export default function ChatHeader({ isMinimized, toggleMinimize, onClose }) {
  return (
    <Box
      style={{
        padding: "12px 16px",
        backgroundColor: colors.primary,
        color: colors.white,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar sx={{ bgcolor: colors.mediumBg, width: 32, height: 32, color: colors.primary }}>
          <SentimentSatisfiedAltIcon fontSize="small" />
        </Avatar>
        <Typography variant="subtitle1" fontWeight="600">
          Support Chat
        </Typography>
      </Box>
      <Box>
        <IconButton size="small" onClick={toggleMinimize} sx={{ color: colors.white, mr: 1 }}>
          {isMinimized ? <Chat fontSize="small" /> : <SelfImprovementIcon fontSize="small" />}
        </IconButton>
        <IconButton size="small" onClick={onClose} sx={{ color: colors.white }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}