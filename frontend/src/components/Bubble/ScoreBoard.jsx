import React from "react";
import { Box, Typography } from "@mui/material";

const ScoreBoard = ({ hitrm, timer, score, maxScore }) => (
  <Box sx={{ display: "flex", justifyContent: "space-around", backgroundColor: "#000", color: "#fff", padding: 2, flexWrap: "wrap" }}>
    {[
     { label: "Target", value: hitrm },
     { label: "Time", value: timer },
     { label: "Score", value: score },
     { label: "High Score", value: maxScore },

    ].map((item, index) => (
      <Box key={index} sx={{ textAlign: "center", margin: 1 }}>
        <Typography variant="h6">{item.label}</Typography>
        <Box sx={{ backgroundColor: "#fff", color: "#000", fontWeight: "bold", fontSize: 24, borderRadius: 1, padding: 2, marginTop: 1 }}>
          {item.value}
        </Box>
      </Box>
    ))}
  </Box>
);

export default ScoreBoard;
