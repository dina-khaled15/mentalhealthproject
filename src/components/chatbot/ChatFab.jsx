import React from "react";
import { Fab } from "@mui/material";
import Chat from "@mui/icons-material/Chat"; // Corrected import
import { colors } from "../../data/chatbotData"; 

export default function ChatFab({ onClick }) {
  return (
    <Fab
      color="default"
      aria-label="chat"
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: colors.mediumBg,
        color: colors.primary,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <Chat />
    </Fab>
  );
}