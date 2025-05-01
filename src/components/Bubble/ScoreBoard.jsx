import React from "react";
import { Box, Typography } from "@mui/material";

const ScoreBoard = ({ hitrm, timer, score, maxScore }) => (
  <Box sx={{ display: "flex", justifyContent: "space-around", backgroundColor: "#000", color: "#fff", padding: 2, flexWrap: "wrap" }}>
    {[
      { label: "الهدف", value: hitrm },
      { label: "الوقت", value: timer },
      { label: "النتيجة", value: score },
      { label: "أعلى نتيجة", value: maxScore },
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
