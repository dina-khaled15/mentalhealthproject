import React from "react";
import { Box } from "@mui/material";

const BubbleGrid = ({ bubbles, onClick }) => (
  <Box sx={{ padding: 2, textAlign: "center", backgroundColor: "#F2F0E9", minHeight: "400px", display: "flex", flexWrap: "wrap", justifyContent: "center", overflow: "hidden" }}>
    {bubbles.map((count, index) => (
      <Box
        key={index}
        onClick={() => onClick(count)}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          width: 60,
          height: 60,
          margin: 1,
          borderRadius: "50%",
          fontSize: 24,
          fontWeight: "bold",
          lineHeight: "60px",
          cursor: "pointer",
          transition: "all 0.2s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {count}
      </Box>
    ))}
  </Box>
);

export default BubbleGrid;
