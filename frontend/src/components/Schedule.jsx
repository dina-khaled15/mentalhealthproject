import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Stack,
} from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import schedule from "../data/sechedule";

export default function Schedule() {
  const chunkSlots = (slots, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < slots.length; i += chunkSize) {
      chunks.push(slots.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <Box sx={{ height: "115vh", display: "flex", overflow: "hidden" }}>
      <Stack spacing={2} sx={{ width: "55%", p: 4, bgcolor: "#fff" }}>
        <Button
          variant="outlined"
          sx={{
            width: "160px",
            height: "35px",
            borderRadius: "20px",
            border: "1px solid #D3D3D3",
            backgroundColor: "#fff",
            color: "#222222",
            textTransform: "none",
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "Manrope",
          }}
        >
          <RocketLaunchIcon sx={{ fontSize: "17px", mr: 1,}} />
          Book Session
        </Button>

        <Typography variant="h5" fontWeight="600" fontSize="30px" fontFamily="Manrope">
          Reserve Your Spot! We’ve Got a Schedule for You
        </Typography>

        <Typography variant="body2" sx={{ color: "gray", fontSize: "16px" }}>
          Our upcoming counseling sessions, designed to support your mental health journey
        </Typography>
      </Stack>

      <Box sx={{ width: 1900, p: 2, overflowY: "auto", display: "flex", alignItems: "flex-end", flexDirection: "column", gap: 2, bgcolor: "#fff" }}>
        {schedule.map((day, index) => (
          <Card key={index} variant="outlined"
            sx={{ width: "55%", height: "280px", display: "flex", flexDirection: "column", backgroundColor: "#F8F7F4", borderRadius: "10px" }}>
            <CardContent sx={{ overflow: "hidden", p: 1 }}>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="subtitle2" sx={{ color: "black", fontSize: '15px', fontWeight: 500 }}>
                    {day.day} - {day.date}
                  </Typography>
                </Grid>
                <Grid item>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LinearProgress variant="determinate" value={day.booked} sx={{ height: 5, borderRadius: 5, width: 80, backgroundColor: "#CAC8C2", '& .MuiLinearProgress-bar': { backgroundColor: "#51504E" } }} />
                    <Typography variant="caption" sx={{ fontSize: '10px' }}>{day.booked}% Booked</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ mt: 0.5, display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="body2" sx={{ fontSize: "13px", color: "#616161", textAlign: "right", mb: "5px" }}>
                  <span style={{ fontWeight: 750, fontSize: "15px", color: "#000", marginRight: "6px" }}>
                    {day.available}
                  </span>
                  Available Time Slots
                </Typography>
              </Box>

              <Box sx={{ mt: 0.5, maxHeight: 150, overflowY: "auto" }}>
                {chunkSlots(day.slots, 6).map((slotChunk, i) => (
                  <Grid container spacing={2} key={i} sx={{ mb: 1 }}>
                    {slotChunk.map((slot, i) => {
                      let chipStyles = {
                        borderRadius: "2px",
                        fontSize: "10px",
                        paddingRight: "3px",
                        fontWeight: 600,
                        fontFamily: "Manrope",
                        width: "65px",
                      };

                      const styleFunc = day.getStyle;
                      if (styleFunc) {
                        chipStyles = {
                          ...chipStyles,
                          ...styleFunc(slot),
                        };
                      }

                      return (
                        <Grid item key={i}>
                          <Chip label={slot} size="small" clickable sx={chipStyles} />
                        </Grid>
                      );
                    })}
                  </Grid>
                ))}
              </Box>

              <Box sx={{ mb: 7, display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    marginTop:"10px",
                    width: "100px",
                    height: "28px",
                    fontWeight: 700,
                    fontSize: "11px",
                    fontFamily: "Manrope",
                    borderRadius: "3px",
                    textTransform: "none",
                    backgroundColor: day.day === "Monday" ? "#000" : "#F8F7F4",
                    color: day.day === "Monday" ? "#fff" : "#000",
                    border: "1px solid",
                    borderColor: day.day === "Monday" ? "#000" : "#222222",
                  }}
                >
                  Book Session
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
