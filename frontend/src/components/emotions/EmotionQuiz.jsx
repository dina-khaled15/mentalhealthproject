import { Paper, Typography, Button, Grid, LinearProgress } from "@mui/material";

const EmotionQuiz = ({ questionData, questionIndex, total, onAnswer }) => (
  <Paper
    elevation={4}
    sx={{
      p: 3,
      borderRadius: 4,
      width: "60%",
      textAlign: "left",
      bgcolor: "#F8F7F4",
      color: "black",
    }}
  >
    <Typography variant="h5" gutterBottom fontFamily="Manrope" fontWeight={900} fontSize="24px">
      Question {questionIndex + 1}:
    </Typography>
    <Typography mb={2} fontFamily="Manrope" fontWeight={500} fontSize="19px">
      {questionData.q}
    </Typography>
    <Grid container spacing={2}>
      {questionData.options.map((option, i) => (
        <Grid item xs={6} key={i}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => onAnswer(i)}
            sx={{
              color: "black",
              backgroundColor: "#F8F7F4",
              border: "1px solid black",
              fontFamily: "Manrope",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#EEEEEE",
                borderColor: "black",
              },
            }}
          >
            {option}
          </Button>
        </Grid>
      ))}
    </Grid>
    <LinearProgress
      variant="determinate"
      value={((questionIndex + 1) / total) * 100}
      sx={{
        mt: 2,
        height: 10,
        backgroundColor: "#CAC8C2",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#51504E",
        },
      }}
    />
  </Paper>
);

export default EmotionQuiz;