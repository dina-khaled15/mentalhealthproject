// GameControls.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const GameControls = ({ moves, timer, score }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        mb: 3,
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "#000" }}>
        Moves: {moves}
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        <AccessTimeIcon sx={{ verticalAlign: "middle" }} /> Time: {timer}s
      </Typography>
      <Typography variant="h6" sx={{ color: "#000" }}>
        Score: {score}
      </Typography>
    </Box>
  );
};

export default GameControls;
