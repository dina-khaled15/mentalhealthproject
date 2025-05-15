import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid, Card, CardContent, LinearProgress, Chip, Stack } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import axios from "axios";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get("http://localhost:4000/schedule");
        setSchedule(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const chunkSlots = (slots, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < slots.length; i += chunkSize) {
      chunks.push(slots.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const getStyle = (day, slot) => {
    switch (day.day) {
      case "Monday":
        if (["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"].includes(slot)) {
          return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
        } else if (["1:00 PM", "2:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].includes(slot)) {
          return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
        } else if (slot === "3:00 PM") {
          return { backgroundColor: "#000", color: "#fff" };
        }
        return {};
      case "Tuesday":
        const whiteSlotsTuesday = ["9:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "7:00 PM"];
        const greySlotsTuesday = ["8:00 AM", "10:00 AM", "11:00 AM", "5:00 PM", "6:00 PM", "8:00 PM"];
        if (whiteSlotsTuesday.includes(slot)) {
          return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
        } else if (greySlotsTuesday.includes(slot)) {
          return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
        }
        return {};
      case "Thursday":
        return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
      case "Saturday":
        const whiteSlotsSaturday = ["1:00 PM", "4:00 PM"];
        const greySlotsSaturday = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];
        if (whiteSlotsSaturday.includes(slot)) {
          return { backgroundColor: "#fff", color: "#000", border: "1px solid #000" };
        } else if (greySlotsSaturday.includes(slot) || ["2:00 PM", "3:00 PM"].includes(slot)) {
          return { backgroundColor: "#EEEEEE", color: "#B5B5B5", border: "1px solid #B5B5B5" };
        }
        return {};
      default:
        return {};
    }
  };

  if (loading) {
    return <Typography>Loading.....</Typography>;
  }

  if (error) {
    return <Typography color="error">خطأ: {error}</Typography>;
  }

  return (
    <Box sx={{overflow: "hidden",display: "flex",
        minHeight: { xs: "auto", md: "115vh" },
        flexDirection: { xs: "column", md: "row" },}}>
    <Stack spacing={2} sx={{bgcolor: "#fff",alignItems: "flex-start",
          width: { xs: "100%", md: "50%" },
          p: { xs: 2, md: 3 },
          ml: { xs: 0, md: 10 },
          mr: { xs: 0, md: 0 },}}>
    <Button variant="outlined" sx={{width: "160px",borderRadius: "20px",border: "1px solid #D3D3D3",textTransform: "none",
            color: "#222222",backgroundColor: "#fff",alignSelf: "flex-start",fontFamily: "Manrope",fontWeight: 500,
            height: { xs: "32px", md: "35px" },
            fontSize: { xs: "14px", md: "15px" },}} >
    <RocketLaunchIcon sx={{ fontSize: { xs: "16px", md: "17px" }, mr: 1 }} />
          Book Session
    </Button>
    <Typography variant="h5" fontWeight="600" fontFamily="Manrope" fontSize={{ xs: "36px", md: "48px" }} sx={{ textAlign: "left" }}>
          Reserve Your Spot! <br /> We’ve Got a Schedule<br /> for You
    </Typography>
    <Typography variant="body2" sx={{color: "gray",fontFamily: "Manrope",fontWeight: 400,textAlign: "left",
    fontSize: { xs: "16px", md: "20px" },}}>
    Our upcoming counseling sessions, designed to <br /> support your mental health journey
    </Typography>
    </Stack>
    <Box sx={{flexDirection: "column",gap: 2,bgcolor: "#fff",overflowY: "auto",display: "flex",
    width: {xs: "102%",sm: "100%",md: "600px",lg: "700px",},
    p: { xs: 1, md: 0.1 },
    alignItems: { xs: "center", md: "flex-end" },}}>
      {schedule.map((day, index) => (
      <Card key={index} variant="outlined"
      sx={{display: "flex",flexDirection: "column",backgroundColor: "#F8F7F4",borderRadius: "10px",
        width: { xs: "100%", md: "75%" },
        height: { xs: "180px", md: "190px" },}}>
        <CardContent sx={{ overflow: "hidden", p: 1 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="subtitle2" sx={{color: "black",fontWeight: 600,fontFamily: "Manrope",
              fontSize: { xs: "14px", md: "16px" },}}>
                {day.day} - {day.date}
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LinearProgress variant="determinate" value={day.booked} sx={{height:5,borderRadius: 5,backgroundColor: "#CAC8C2",
                        width: { xs: 70, md: 80 },
                        '& .MuiLinearProgress-bar': { backgroundColor: "#51504E" },}}/>
                <Typography variant="caption" sx={{fontFamily: "Manrope",fontWeight: 700,fontSize: { xs: "11px", md: "13px" },}}>
                {day.booked}% Booked
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 0.5, display: "flex", justifyContent: "flex-end" }}>
            <Typography variant="body2" sx={{fontWeight: 400,color: "#616161",textAlign: "right",mb: "5px",
            fontSize: { xs: "14px", md: "16px" },}}>
              <span style={{ fontWeight: 750, fontSize: { xs: "13px", md: "15px" }, color: "#000", marginRight: "6px" }}>
                {day.available}
                </span>
                Available Time Slots
            </Typography>
          </Box>
          <Box sx={{ mt: 0.5, maxHeight: { xs: "90px", md: "150px" }, overflowY: "auto" }}>
            {chunkSlots(day.slots, 6).map((slotChunk, i) => (
              <Grid container spacing={1} key={i} sx={{ mb: 1 }}>
                {slotChunk.map((slot, i) => {
                  let chipStyles = {borderRadius: "2px",paddingRight: "3px",fontWeight: 700,fontFamily: "Manrope",
                    fontSize: { xs: "7.4px", md: "10px" },
                    width: { xs: "50px", md: "65px" },
                  };
                  chipStyles = {
                    ...chipStyles,
                    ...getStyle(day, slot),
                  };
                  return (
                  <Grid item key={i}>
                    <Chip label={slot} size="small" clickable sx={chipStyles} />
                  </Grid>
                  );
                  })}
          </Grid>
        ))}
        </Box>
        <Box sx={{ mb: { xs: 2, md: 7 }, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" size="small"sx={{marginTop: "10px",fontFamily: "Manrope",borderRadius: "3px",
          height: "28px",textTransform: "none",fontWeight: 700,border: "1px solid",
          width: { xs: "90px", md: "100px" },
          fontSize: { xs: "10px", md: "11px" },
          backgroundColor: day.day === "Monday" ? "#000" : "#F8F7F4",
          color: day.day === "Monday" ? "#fff" : "#000",
          borderColor: day.day === "Monday" ? "#000" : "#222222",}}>
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