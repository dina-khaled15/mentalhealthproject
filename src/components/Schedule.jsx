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

const scheduleData = [
  {
    day: "Monday",
    date: "August 26, 2024",
    booked: 30,
    available: 8,
    slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
  },
  {
    day: "Tuesday",
    date: "August 27, 2024",
    booked: 60,
    available: 5,
    slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
  },
  {
    day: "Wednesday",
    date: "August 28, 2024",
    booked: 80,
    available: 2,
    slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
  },
  {
    day: "Thursday",
    date: "August 29, 2024",
    booked: 0,
    available: 12,
    slots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
  },
];

const styles = {
  Tuesday: (slot) => {
    const whiteSlots = ["9:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "7:00 PM"];
    const greySlots = ["8:00 AM", "10:00 AM", "11:00 AM", "5:00 PM", "6:00 PM", "8:00 PM"];
    if (whiteSlots.includes(slot)) {
      return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
    } else if (greySlots.includes(slot)) {
      return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
    }
    return {};
  },
  Monday: (slot) => {
    if (["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"].includes(slot)) {
      return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
    } else if (["1:00 PM", "2:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].includes(slot)) {
      return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
    } else if (slot === "3:00 PM") {
      return { backgroundColor: "#000", color: "#fff" };
    }
    return {};
  },
  Wednesday: (slot) => {
    const whiteSlots = ["1:00 PM", "4:00 PM"];
    const greySlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
    if (whiteSlots.includes(slot)) {
      return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
    } else if (greySlots.includes(slot) || ["2:00 PM", "3:00 PM"].includes(slot)) {
      return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
    }
    return {};
  },
  Thursday: () => ({
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #000",
  }),
};

export default function Schedule() {
  const chunkSlots = (slots, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < slots.length; i += chunkSize) {
      chunks.push(slots.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", overflow: "hidden" }}>
      {/* Left Section with text */}
      <Stack spacing={2} sx={{ width: "55%", p: 4, bgcolor: "#fff" }}>
        <Button variant="outlined" sx={{width:"160px",height:"35px",borderRadius:"20px",border:"1px solid #D3D3D3",
          backgroundColor: "#fff",color: "#222222",textTransform: "none",}}>
          <RocketLaunchIcon sx={{ fontSize: "16px",fontWeight: 500, mr: 1,fontFamily: "Manrope"}} />
          Book Session
        </Button>

        <Typography variant="h5" fontWeight="600" fontSize={"30px"} fontFamily={"Manrope"}>
          Reserve Your Spot!<br />
          We’ve Got a Schedule for You
        </Typography>

        <Typography variant="body2" sx={{ color: "gray",fontFamily: "Manrope",fontSize: "16px", fontWeight: 400}}>
          Our upcoming counseling sessions, designed to support your mental health journey
        </Typography>
      </Stack>

      {/* Right Section with schedule cards */}
      <Box sx={{width: 1900, p: 2,overflowY: "auto",display: "flex",alignItems: "flex-end",flexDirection: "column",gap: 2,bgcolor: "#fff"}}>
        {scheduleData.map((day, index) => (
          <Card key={index} variant="outlined"
            sx={{ width: "55%",alignSelf: "flex-end",height: "280px",display: "flex",flexDirection: "column",backgroundColor: "#F8F7F4",borderRadius: "10px", }}>
            <CardContent sx={{ overflow: "hidden", p: 1 }}>
              <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle2" sx={{ color: "black", fontFamily: "Manrope",fontSize: '15px', fontWeight: 500 }}>
                    {day.day} - {day.date}
                </Typography>
                </Grid>
                <Grid item>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LinearProgress variant="determinate" value={day.booked} sx={{height: 5, borderRadius: 5,width: 80,backgroundColor: "#CAC8C2",
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: "#51504E",
                        },
                      }} />
                    <Typography variant="caption" sx={{ fontSize: '10px' }}>
                      {day.booked}% Booked
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ mt: 0.5, display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="body2" fontWeight="medium" 
                sx={{fontFamily: "Manrope",fontSize: "13px",fontWeight: 400,color: "#616161", textAlign: "right", marginBottom: "5px",}}>
                  <span style={{ fontWeight: 750,fontSize: "15px",fontFamily: "Manrope",
                      lineHeight: "17px",color: "#000000", marginRight: "6px"}} >
                    {day.available}
                  </span>
                  Available Time Slots
                </Typography>
              </Box>

            <Box sx={{ mt: 0.5, maxHeight: 150, overflowY: "auto" }}>
              {chunkSlots(day.slots, 6).map((slotChunk, i) => (
                <Grid container spacing={2} key={i} sx={{ mb: 1 }}>
                  {slotChunk.map((slot, i) => {
                    let chipStyles = {borderRadius: "2px",fontSize: "10px",paddingRight: "3px", fontWeight: 600,fontFamily: "Manrope",width: "65px"};

                    const styleFunc = styles[day.day];
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
                <Button variant="contained" size="small"
                  sx={{ width: "90px",height: "28px",fontFamily: "Manrope",fontWeight: 600,fontSize: "10px", borderRadius: "3px",
                    border: "1px solid",  textTransform: "none",
                     backgroundColor: day.day === "Monday" ? "#000" : "#F8F7F4",
                    color: day.day === "Monday" ? "#fff" : "#000",
                    borderColor: day.day === "Monday" ? "#000" : "#222222",}} >
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