// PatternGame/PatternDisplay.jsx

import React from "react";
import { Box, Typography } from "@mui/material";

const PatternDisplay = ({ pattern, showPattern, userPattern }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
      {showPattern ? (
        pattern.map((color, idx) => (
          <Box
            key={idx}
            sx={{
              backgroundColor: color,
              width: "100px",
              height: "100px",
              margin: "10px",
              borderRadius: "8px",
            }}
          />
        ))
      ) : userPattern.length < pattern.length ? (
        <Typography sx={{ fontSize: "18px", color: "#000" }}>
          الآن حان دورك لإعادة النمط!
        </Typography>
      ) : null}
    </Box>
  );
};

export default PatternDisplay;
