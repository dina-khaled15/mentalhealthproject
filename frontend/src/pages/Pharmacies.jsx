import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Container, TextField, MenuItem, Checkbox, FormControlLabel, Button,
  Paper, Divider, List, ListItemText, Grid, Snackbar, Alert
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Rating from '@mui/material/Rating';
import Navbar from '../components/Navbar/Navbar';
import FooterComponent from "../components/footer/contact";
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const PartnerPharmaciesPage = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const [form, setForm] = useState({
    name: '',
    location: '',
    medication: '',
    branch: '',
    confidential: false
  });

  // Fetch pharmacies and cities from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch pharmacies
        const pharmaciesRes = await axios.get(`${API_URL}/pharmacies`);
        setPharmacies(pharmaciesRes.data);
        
        // Fetch cities
        const citiesRes = await axios.get(`${API_URL}/pharmacies/cities`);
        setCities(citiesRes.data);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const clearForm = () => {
    setForm({
      name: '',
      location: '',
      medication: '',
      branch: '',
      confidential: false
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!form.name || !form.location || !form.medication || !form.branch) {
      setSnackbar({
        open: true,
        message: 'Please fill all required fields',
        severity: 'error'
      });
      return;
    }
    
    try {
      // Submit form data to API
      await axios.post(`${API_URL}/medication-requests`, form);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Your medication request has been submitted successfully',
        severity: 'success'
      });
      
      // Clear form
      clearForm();
    } catch (err) {
      console.error('Error submitting form:', err);
      setSnackbar({
        open: true,
        message: 'Failed to submit your request. Please try again.',
        severity: 'error'
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Container maxWidth="md" sx={{ py: 6, bgcolor: '#F4F2ED' }}>
          <Typography>Loading...</Typography>
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <Container maxWidth="md" sx={{ py: 6, bgcolor: '#F4F2ED' }}>
          <Typography color="error">{error}</Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <Container maxWidth="md" sx={{ py: 6, bgcolor: '#F4F2ED' }}>
        <Typography variant="h4" fontWeight="bold" fontFamily="Manrope" fontSize={33} gutterBottom>
          Partner Pharmacies
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontFamily: 'Manrope', fontSize: 16, fontWeight: 500 }}>
          A list of pharmacies we currently collaborate with to ensure safe and accessible medication delivery.
        </Typography>

        <Paper elevation={1} sx={{ mb: 3, mt: -3, p: 2, borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom fontFamily={'Manrope'} fontWeight={600} fontSize={25}>
            List of Pharmacies
          </Typography>
          <List>
            {pharmacies.map((pharmacy, index) => (
              <ListItemText 
                key={pharmacy._id || index}
                primary={
                  <Typography variant="body1" fontWeight="bold" fontFamily={'Manrope'}>
                    {pharmacy.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography component="span" variant="body2" fontFamily={'Manrope'} sx={{ display: 'block', mt: 0.5, mb: 0.5 }}>
                      <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                      {pharmacy.hours}
                    </Typography>
                    <Typography component="span" variant="body2" color="#1976d2" sx={{ display: 'block', fontFamily: 'Manrope' }}>
                      <LocalShippingIcon sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                      {pharmacy.service}
                    </Typography>
                    <Rating value={pharmacy.rating} precision={0.5} readOnly size="small" sx={{ mt: 0.5 }} />
                  </>
                }
              />
            ))}
          </List>
        </Paper>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" gutterBottom fontFamily={'Manrope'} fontWeight={600}>
          Request Medication
        </Typography>

        <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Patient Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Manrope',
                  color: 'black',
                  "&.Mui-focused": { color: 'black' },
                },
              }}
              InputProps={{
                sx: { fontSize: '16px', fontFamily: 'Manrope', color: 'black' },
              }}
            />
            
            <TextField
              fullWidth
              label="Patient Location"
              placeholder="e.g. Brooklyn, NY"
              name="location"
              value={form.location}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Manrope',
                  color: 'black',
                  "&.Mui-focused": { color: 'black' },
                },
              }}
              InputProps={{
                sx: { fontSize: '16px', fontFamily: 'Manrope', color: 'black' },
              }}
            />
            
            <TextField
              fullWidth
              label="Medication Name"
              name="medication"
              value={form.medication}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Manrope',
                  color: 'black',
                  "&.Mui-focused": { color: 'black' },
                },
              }}
              InputProps={{
                sx: { fontSize: '16px', fontFamily: 'Manrope', color: 'black' },
              }}
            />

            <TextField
              fullWidth
              select
              label="Nearest Branch"
              name="branch"
              value={form.branch}
              onChange={handleChange}
              variant="outlined"
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" },
                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Manrope',
                  color: 'black',
                  "&.Mui-focused": { color: 'black' },
                },
              }}
              InputProps={{
                sx: { fontSize: '16px', fontFamily: 'Manrope', color: 'black' },
              }}
            >
              {cities.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>

            <FormControlLabel
              control={
                <Checkbox
                  checked={form.confidential}
                  onChange={handleChange}
                  name="confidential"
                />
              }
              label="Pick up medication confidentially"
              sx={{ mb: 3 }}
            />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  textTransform: 'none',
                  bgcolor: '#F8F7F4',
                  border: '1px solid black',
                  borderRadius: '4px',
                  fontFamily: 'Manrope',
                  fontWeight: 800,
                  color: 'black',
                }}
              >
                Submit Request
              </Button>
              
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                onClick={clearForm}
                sx={{
                  textTransform: 'none',
                  bgcolor: '#F8F7F4',
                  border: '1px solid black',
                  borderRadius: '4px',
                  fontFamily: 'Manrope',
                  fontWeight: 800,
                  color: 'black',
                }}
              >
                Clear Form
              </Button>
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              sx={{
                mt: 2,
                fontFamily: 'Manrope',
                fontWeight: '400',
                fontSize: '14px',
              }}
            >
              We ensure your data is handled securely. Confidential pickup hides your name during collection.
            </Typography>
          </Box>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom fontFamily={'Manrope'} fontWeight={600} fontSize={20}>
            How It Works
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box>
                <AssignmentTurnedInIcon color="primary" fontSize="large" />
                <Typography variant="subtitle1" fontWeight="bold" fontFamily={'Manrope'}>1. Fill the form</Typography>
                <Typography variant="body2" fontFamily={'Manrope'}>Enter your personal and medication details.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <LocationOnIcon color="primary" fontSize="large" />
                <Typography variant="subtitle1" fontWeight="bold" fontFamily={'Manrope'}>2. We forward your request</Typography>
                <Typography variant="body2" fontFamily={'Manrope'}>We'll send it to the nearest pharmacy.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <DoneOutlineIcon color="primary" fontSize="large" />
                <Typography variant="subtitle1" fontWeight="bold" fontFamily={'Manrope'}>3. Pick up safely</Typography>
                <Typography variant="body2" fontFamily={'Manrope'}>Collect your medication confidentially.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <FooterComponent variant="dark" />
      </Box>
      
      {/* Snackbar for notifications */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PartnerPharmaciesPage;