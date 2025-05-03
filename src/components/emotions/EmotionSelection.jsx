import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const EmotionSelection = ({ emotions, onSelect }) => {
  const renderEmoji = (emoji) => {
    if (emoji === "FavoriteIcon") {
      return <FavoriteIcon sx={{ color: "#ec4899", fontSize: "19px", mr: 1, verticalAlign: "middle" }} />;
    }
    return <span style={{ fontSize: "19px", marginRight: 8, verticalAlign: "middle" }}>{emoji}</span>;
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        borderRadius: 4,
        width: "60%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F2F0E9",
      }}
    >
      <Typography
        variant="h5"
        mb={2}
        color="black"
        fontFamily="Manrope"
        fontWeight={700}
        fontSize={"25px"}
      >
        Choose an Emotion to Explore
      </Typography>
      {Object.keys(emotions).map((key) => (
        <Button
          key={key}
          onClick={() => onSelect(key)}
          variant="contained"
          sx={{
            color: "black",
            m: 1,
            backgroundColor: "white",
            borderRadius: 2,
            width: "100%",
            fontFamily: "Manrope",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            justifyContent: "center",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          {renderEmoji(emotions[key].emoji)}
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </Button>
      ))}
    </Paper>
  );
};

export default EmotionSelection;