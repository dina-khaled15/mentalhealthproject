import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faClock, faBrain, faDice, faCheck } from "@fortawesome/free-solid-svg-icons";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";

const EmotionDescription = ({ emotionData, emotionName, onStart, onBack }) => {
  const renderEmoji = (emoji) => {
    if (emoji === "FavoriteIcon") {
      return <FavoriteIcon sx={{ color: "#ec4899", fontSize: "24px", verticalAlign: "middle" }} />;
    }
    return <span style={{ fontSize: "24px", verticalAlign: "middle" }}>{emoji}</span>;
  };

  const renderDescription = (description) => {
    const lines = description.split("\n");
    return lines.map((line, index) => {
      // Handle headers
      if (line.startsWith("**")) {
        const headerText = line.replace(/\*\*/g, "").split(" [")[0];
        const iconMatch = line.match(/\[([^\]]+)\]/);
        const icon = iconMatch ? iconMatch[1] : null;
        return (
          <Typography
            key={index}
            component="div"
            sx={{
              fontFamily: "Manrope",
              fontWeight: "bold",
              fontSize: "22px",
              mb: 2,
              display: "flex",
              alignItems: "center",
              color: "black",
            }}
          >
            {icon === "faLightbulb" && (
              <FontAwesomeIcon icon={faLightbulb} style={{ color: "#facc15", marginRight: 8 }} />
            )}
            {icon === "faClock" && (
              <FontAwesomeIcon icon={faClock} style={{ color: "#3b82f6", marginRight: 8 }} />
            )}
            {icon === "faBrain" && (
              <FontAwesomeIcon icon={faBrain} style={{ color: "#E6BE8A", marginRight: 8 }} />
            )}
            {icon === "faDice" && (
              <FontAwesomeIcon icon={faDice} style={{ color: "#a855f7", marginRight: 8 }} />
            )}
            {icon === "StarRateIcon" && (
              <StarRateIcon sx={{ color: "#FFC107", marginRight: 0.5 }} />
            )}
            {headerText}
          </Typography>
        );
      }
      // Handle list items
      if (line.startsWith("- [faCheck]")) {
        return (
          <Typography
            key={index}
            component="div"
            sx={{
              fontFamily: "Manrope",
              fontWeight: "500",
              fontSize: "17px",
              ml: 1,
              display: "flex",
              alignItems: "center",
              mb: 1,
              color: "black",
            }}
          >
            <FontAwesomeIcon icon={faCheck} style={{ color: "green", marginRight: 8 }} />
            {line.replace("- [faCheck] ", "")}
          </Typography>
        );
      }
      // Handle regular text
      if (line.trim()) {
        return (
          <Typography
            key={index}
            component="div"
            sx={{
              fontFamily: "Manrope",
              fontWeight: "500",
              fontSize: "17px",
              ml: 1,
              mb: 1,
              color: "black",
            }}
          >
            {line}
          </Typography>
        );
      }
      return null;
    });
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 4,
        width: "80%",
        textAlign: "left",
        backgroundColor: "#F8F7F4",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "Manrope",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "black",
        }}
      >
        {renderEmoji(emotionData.emoji)} {emotionName.toUpperCase()}
      </Typography>
      <Typography
        component="div"
        sx={{
          backgroundColor: "#F8F7F4",
          padding: 2,
          borderRadius: 2,
          mb: 2,
        }}
      >
        {renderDescription(emotionData.description)}
      </Typography>
      {emotionData.questions.length > 0 && (
        <Button
          variant="contained"
          onClick={onStart}
          sx={{
            color: "black",
            backgroundColor: "#F8F7F4",
            border: "1px solid black",
            fontFamily: "Manrope",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#bfdbfe", borderColor: "black" },
          }}
        >
          Start Quiz
        </Button>
      )}
      <Button
        onClick={onBack}
        sx={{
          ml: 2,
          color: "black",
          backgroundColor: "#F8F7F4",
          border: "1px solid black",
          fontFamily: "Manrope",
          fontWeight: 600,
          textTransform: "none",
          fontSize: "16px",
          "&:hover": { backgroundColor: "#bfdbfe", borderColor: "black" },
        }}
      >
        Back to Emotions
      </Button>
    </Paper>
  );
};

export default EmotionDescription;