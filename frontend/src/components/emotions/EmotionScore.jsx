import { Paper, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EmotionScore = ({ score, total, onRetry }) => (
  <Paper
    elevation={4}
    sx={{
      p: 3,
      borderRadius: 4,
      width: "60%",
      backgroundColor: "#F4F2ED",
    }}
  >
    <CheckCircleIcon sx={{ fontSize: 40, color: "#3b82f6" }} />
    <Typography variant="h4" gutterBottom fontFamily="Manrope" fontWeight={600} fontSize="35px" color="black">
      Quiz Finished!
    </Typography>
    <Typography variant="h5" fontFamily="Manrope" fontWeight={500} color="black">
      Your Score: {score}/{total}
    </Typography>
    <Button
      onClick={onRetry}
      sx={{
        mt: 2,
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
        fontFamily: "Manrope",
        fontWeight: 600,
        textTransform: "none",
      }}
    >
      Try Another Emotion
    </Button>
  </Paper>
);

export default EmotionScore;