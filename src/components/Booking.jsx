import React, { useState } from "react";
import axios from 'axios';
import { Box, Typography, TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { doctors, services, sessions } from "../data/Booking";

const Form = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    doctor: "",
    service: "",
    session: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);

    try {
      console.log('Submitting form data:', formData); // Debug: Log form data
      const response = await axios.post('http://localhost:4000/Booking', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response status:', response.status); // Debug: Log HTTP status
      console.log('Backend response:', response.data); // Debug: Log full response

      if (response.status === 201) {
        setSuccess(response.data.message || "Booking created successfully!");
        setError("");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          doctor: "",
          service: "",
          session: ""
        });
      } else {
        setError(response.data.message || (response.data.errors ? response.data.errors.join(', ') : `Failed to create booking (Status: ${response.status})`));
        setSuccess("");
      }
    } catch (err) {
      console.error('Axios error:', err.message); // Debug: Log axios error
      console.error('Error details:', err.response ? err.response.data : 'No response from server'); // Debug: Log error details
      setError(`Failed to connect to the server. Please ensure the backend is running on http://localhost:4000 and MongoDB is active. Error: ${err.message}`);
      setSuccess("");
    }
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

              {error && <Typography color="error">{error}</Typography>}
              {success && <Typography color="success.main">{success}</Typography>}

              <Box component="form" noValidate autoComplete="off">
                <Typography variant="subtitle2" sx={{ mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px" }}>
                  Full Name
                </Typography>
                <TextField
                  fullWidth
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="First name"
                  margin="dense"
                  variant="outlined"
                  sx={{ backgroundColor: "#FFFFFF", borderRadius: "12px", "& .MuiOutlinedInput-root": { borderRadius: "12px", "& fieldset": { borderColor: "#EEEEEE" } } }}
                />

                <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px" }}>E-mail</Typography>
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@gmail.com"
                  margin="dense"
                  variant="outlined"
                  sx={{ backgroundColor: "#FFFFFF", borderRadius: "12px", "& .MuiOutlinedInput-root": { borderRadius: "12px", "& fieldset": { borderColor: "#EEEEEE" } } }}
                />

                <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px" }}>Phone Number</Typography>
                <TextField
                  fullWidth
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+62 800234756"
                  margin="dense"
                  variant="outlined"
                  sx={{ backgroundColor: "#FFFFFF", borderRadius: "12px", "& .MuiOutlinedInput-root": { borderRadius: "12px", "& fieldset": { borderColor: "#EEEEEE" } } }}
                />

                <Grid container spacing={2} sx={{ mt: 0 }}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", width: 400 }}>Doctor</Typography>
                    <FormControl fullWidth margin="dense" sx={{ backgroundColor: "#fff", borderRadius: "12px" }}>
                      <InputLabel sx={{ color: "#999", '&.Mui-focused': { color: 'black' } }}>Choose Doctor</InputLabel>
                      <Select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        label="Choose Doctor"
                        sx={{ borderRadius: "12px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#DDDDDD" } }}
                      >
                        {doctors.map((doctor) => (
                          <MenuItem key={doctor.value} value={doctor.value}>{doctor.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mt: -0.5, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", width: 250 }}>Service</Typography>
                    <FormControl fullWidth margin="dense" sx={{ backgroundColor: "#fff", borderRadius: "12px" }}>
                      <InputLabel sx={{ color: "#999", '&.Mui-focused': { color: 'black' } }}>Choose Service</InputLabel>
                      <Select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        label="Choose Service"
                        sx={{ borderRadius: "12px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#DDDDDD" } }}
                      >
                        {services.map((service) => (
                          <MenuItem key={service.value} value={service.value}>{service.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mt: -0.5, mb: 0.5, fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", width: 250 }}>Session</Typography>
                    <FormControl fullWidth margin="dense" sx={{ backgroundColor: "#fff", borderRadius: "12px" }}>
                      <InputLabel sx={{ color: "#999", '&.Mui-focused': { color: 'black' } }}>Choose Session</InputLabel>
                      <Select
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        label="Choose Session"
                        sx={{ borderRadius: "12px", "& .MuiOutlinedInput-notchedOutline": { borderColor: "#DDDDDD" } }}
                      >
                        {sessions.map((session) => (
                          <MenuItem key={session.value} value={session.value}>{session.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Box textAlign="right" sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "#1c1c1c",
                      fontSize: "13px",
                      textTransform: "none",
                      color: "#fff",
                      px: 2,
                      transform: isPressed ? "scale(1.1)" : "scale(1)",
                      "&:hover": { backgroundColor: "#000" },
                    }}
                    onClick={handleSubmit}
                  >
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