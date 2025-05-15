
import React from "react";
import { Box, Button } from "@mui/material";

const ColorOptions = ({ colors, onSelect }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
      {colors.map((color, i) => (
        <Button
          key={i}
          onClick={() => onSelect(color)}
          sx={{
            backgroundColor: color,
            width: "100px",
            height: "100px",
            borderRadius: "8px",
            minWidth: "unset",
          }}
        />
      ))}
    </Box>
  );
};

export default ColorOptions;
