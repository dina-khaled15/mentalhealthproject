// PatternGame/UserPatternDisplay.jsx

import React from "react";
import { Box } from "@mui/material";

const UserPatternDisplay = ({ userPattern }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
      {userPattern.map((color, idx) => (
        <Box
          key={idx}
          sx={{
            backgroundColor: color,
            width: "80px",
            height: "80px",
            borderRadius: "8px",
          }}
        />
      ))}
    </Box>
  );
};

export default UserPatternDisplay;
