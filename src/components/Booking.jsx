import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { doctors, services, sessions } from "../components/data/Booking";


const Form = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200); // إعادة الحجم الطبيعي بعد 200 مللي ثانية
  };

  return (
    <Grid container spacing={4} sx={{ minHeight: "100vh", p: 4, backgroundColor: "#fafaf8", alignItems: "center", justifyContent: "center", fontFamily: "Manrope" }}>
      <Grid item xs={12}>
        <Grid container spacing={15}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={500} sx={{ fontFamily: "Manrope", fontSize: "70px", lineHeight: "78px" }} gutterBottom>
              Schedule a <br />
              session with <Box component="span" sx={{ color: "#6e6c68" }}>our</Box> <br />
              <Box component="span" sx={{ color: "#6e6c68" }}>experts</Box> <Box component="span" fontWeight={500}>today.</Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ borderRadius: 3, p: 4, backgroundColor: "#f6f4f0", width: 650, maxWidth: "700px", height: 755 }}>
              <Typography variant="h5" fontWeight={500} fontSize={"33px"} gutterBottom>Booking Form</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: "18px", fontWeight: 400, fontFamily: "Manrope" }}>
                Fill out the form below, and one of our team members will get back to you shortly.
              </Typography>

              <Box component="form" noValidate autoComplete="off">
                {/* Full Name */}
                <Typography variant="subtitle2" sx={{ mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", }}>
                  Full Name
                </Typography>
                <TextField fullWidth placeholder="First name" margin="dense" variant="outlined" sx={{ backgroundColor: "#FFFFFF", borderRadius: "12px", "& .MuiOutlinedInput-root": { borderRadius: "12px", "& fieldset": { borderColor: "#EEEEEE" } } }} />

                {/* Email */}
                <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px" }}>E-mail</Typography>
                <TextField fullWidth placeholder="you@gmail.com" margin="dense" variant="outlined" sx={{ backgroundColor: "#FFFFFF", borderRadius: "12px", "& .MuiOutlinedInput-root": { borderRadius: "12px", "& fieldset": { borderColor: "#EEEEEE" } } }} />

                {/* Phone Number */}
                <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px" }}>Phone Number</Typography>
                <TextField fullWidth placeholder="+62 800234756" margin="dense" variant="outlined" sx={{ backgroundColor: "#FFFFFF", borderRadius: "12px", "& .MuiOutlinedInput-root": { borderRadius: "12px", "& fieldset": { borderColor: "#EEEEEE" } } }} />

                {/* Service and Session and Doctor Selection*/}
                <Grid container spacing={2} sx={{ mt: 0 }}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", width: 400 }}>Doctor</Typography>
                    <FormControl fullWidth margin="dense" sx={{ backgroundColor: "#fff", borderRadius: "12px" }}>
                    <InputLabel sx={{color: "#999",'&.Mui-focused': {color: 'black',},}}>Choose Doctor</InputLabel>
                      <Select label="Choose Doctor" defaultValue="" sx={{ borderRadius: "12px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#DDDDDD" } }}>
                        {doctors.map((doctor) => (
                          <MenuItem key={doctor.value} value={doctor.value}>{doctor.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mt: -0.5, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", width: 250 }}>Service</Typography>
                    <FormControl fullWidth margin="dense" sx={{ backgroundColor: "#fff", borderRadius: "12px" }}>
                      <InputLabel  sx={{color: "#999",'&.Mui-focused': {color: 'black',},}}>Choose Service</InputLabel>
                      <Select label="Choose Service" defaultValue="" sx={{ borderRadius: "12px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#DDDDDD" } }}>
                        {services.map((service) => (
                          <MenuItem key={service.value} value={service.value}>{service.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mt: -0.5, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", width: 250 }}>Session</Typography>
                    <FormControl fullWidth margin="dense" sx={{ backgroundColor: "#fff", borderRadius: "12px" }}>
                      <InputLabel  sx={{color: "#999",'&.Mui-focused': {color: 'black',},}}> Choose Session</InputLabel>
                      <Select label="Choose Session" defaultValue="" sx={{ borderRadius: "12px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#DDDDDD" } }}>
                        {sessions.map((session) => (
                          <MenuItem key={session.value} value={session.value}>{session.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Submit Button */}
                <Box textAlign="right" sx={{ mt: 3 }}>
                  <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />}
                    sx={{borderRadius: 1, backgroundColor: "#1c1c1c",fontSize: "13px",textTransform:"none",color: "#fff",px: 2,
                      transform: isPressed ? "scale(1.1)" : "scale(1)",
                      "&:hover": { backgroundColor: "#000" },
                    }}
                    onClick={handleButtonClick}>
                    Book Session
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
