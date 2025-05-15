import React from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReplayIcon from "@mui/icons-material/Replay";
import { colors } from "../../data/chatbotData"; 

export default function ChatInput({ input, setInput, onSubmit, onReset, inputRef }) {
  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ p: 2, bgcolor: colors.mediumBg, display: "flex", alignItems: "center" }}
    >
      <TextField
        fullWidth
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        size="small"
        inputRef={inputRef}
        sx={{
          bgcolor: colors.white,
          borderRadius: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" disabled={!input.trim()} sx={{ color: colors.primary }}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <IconButton
        onClick={onReset}
        sx={{ ml: 1, color: colors.primary, bgcolor: colors.white, "&:hover": { bgcolor: colors.lightGray } }}
      >
        <ReplayIcon />
      </IconButton>
    </Box>
  );
}