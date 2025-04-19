import React, { useState } from 'react';
import {Box,Typography,Container,TextField,MenuItem,Checkbox,FormControlLabel,Button,
    Paper,Divider,List,ListItemText,Grid} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Rating from '@mui/material/Rating';


const pharmacies = [
    {
      name: 'HealthFirst Pharmacy – New York',
      hours: 'Open: 9am – 9pm',
      service: 'Free home delivery',
      rating: 4.5
    },
    {
      name: 'MedCare Hub – Los Angeles',
      hours: 'Open: 8am – 8pm',
      service: 'Same-day pickup',
      rating: 4
    },
    {
      name: 'Wellness Pharmacy – Chicago',
      hours: 'Open: 10am – 6pm',
      service: 'Consultation available',
      rating: 5
    }
  ];

const cities = ['New York', 'Los Angeles', 'Chicago'];

const PartnerPharmaciesPage = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    medication: '',
    branch: '',
    confidential: false
  });

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

  return (
    <Container maxWidth="md" sx={{ py: 6, bgcolor: '#F4F2ED' }}>
    <Typography variant="h4" fontWeight="bold" fontFamily="Manrope" fontSize={33} gutterBottom>
        Partner Pharmacies
    </Typography>

    <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontFamily: 'Manrope', fontSize: 16, fontWeight: 500 }}>
        A list of pharmacies we currently collaborate with to ensure safe and accessible medication delivery.
    </Typography>

    <Paper elevation={1} sx={{ mb: 3, mt:-3, p: 2, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="medium" gutterBottom fontFamily={'Manrope'} fontWeight={600} fontSize={25}>
        List of Pharmacies
        </Typography>
        <List>
        {pharmacies.map((pharmacy, index) => (
            <ListItemText primary={
            <Typography variant="body1" fontWeight="bold" fontFamily={'Manrope'}>
                {pharmacy.name}
            </Typography>
            }
            secondary={
            <>
        <Typography component="span" variant="body2" fontFamily={'Manrope'} sx={{ display: 'block', mt: 0.5,mb: 0.5 }}>
            <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
            {pharmacy.hours}
        </Typography>
        <Typography component="span" variant="body2" color ="#1976d2" sx={{ display: 'block',fontFamily:'Manrope'}}>
            <LocalShippingIcon  sx={{ mr: 0.5, verticalAlign: 'middle' }} />
            {pharmacy.service}
        </Typography>
        <Rating value={pharmacy.rating} precision={0.5} readOnly size="small" sx={{ mt: 0.5}} />
            </>
            }/>
        ))}
        </List>
    </Paper>

    <Divider sx={{ mb: 2 }} />

    <Typography variant="h6" fontWeight="medium" gutterBottom fontFamily={'Manrope'} fontWeight={600}>
    Request Medication
    </Typography>


    <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
        <Box component="form" noValidate autoComplete="off">
        <TextField fullWidth label="Patient Name" name="name" value={form.name} onChange={handleChange} variant="outlined"
        sx={{mb: 3,
            "& .MuiOutlinedInput-root": {
            "& fieldset": {borderColor: "black", 
            },
            "&:hover fieldset": {borderColor: "black",
            },
            "&.Mui-focused fieldset": {borderColor: "black",

            },
        },
        }}
        InputLabelProps={{
            sx: {fontSize: '16px',fontWeight: '400',fontFamily:'Manrope',color: 'black', // Label color when not focused
                "&.Mui-focused": {color: 'black', // Label color when the field is focused
            },
        },
    }}
        InputProps={{
            sx: {fontSize: '16px',fontFamily: 'Manrope',color: 'black',
        },
  }}/>
        <TextField fullWidth label="Patient Location" placeholder="e.g. Brooklyn, NY" name="location" value={form.location} onChange={handleChange} variant="outlined"
            sx={{mb: 3,
                "& .MuiOutlinedInput-root": {
                "& fieldset": {borderColor: "black", 
                    },
                "&:hover fieldset": {borderColor: "black", 
                    },
                "&.Mui-focused fieldset": {borderColor: "black",
                },
            },
            }}
            InputLabelProps={{
                sx: {
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Manrope',
                  color: 'black',
                  "&.Mui-focused": {
                    color: 'black',
                  },
                },
              }}
              InputProps={{
                sx: {fontSize: '16px',fontFamily: 'Manrope',color: 'black',},}}/>
                <TextField fullWidth label="Medication Name" name="medication" value={form.medication} onChange={handleChange} variant="outlined"
                sx={{mb: 3,
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {borderColor: "black",},
                    "&:hover fieldset": {borderColor: "black",},
                    "&.Mui-focused fieldset": {borderColor: "black",},
                },
                }}
            InputLabelProps={{
                sx: {fontSize: '16px',fontWeight: '400',fontFamily: 'Manrope',color: 'black',
                    "&.Mui-focused": {color: 'black',},
                },
                            }}
            InputProps={{
                sx: {fontSize: '16px',fontFamily: 'Manrope',color: 'black',
                },
                        }}/>

    <TextField fullWidth select label="Nearest Branch" name="branch" value={form.branch} onChange={handleChange} variant="outlined"
    sx={{mb: 3,
    "& .MuiOutlinedInput-root": {
    "& fieldset": {borderColor: "black",},
    "&:hover fieldset": {borderColor: "black", },
    "&.Mui-focused fieldset": {
        borderColor: "black", 
    },
    },}}
    InputLabelProps={{
        sx: {fontSize: '16px',fontWeight: '400',fontFamily: 'Manrope',color: 'black',
        "&.Mui-focused": {color: 'black',},
    },
    }}
    InputProps={{
        sx: {fontSize: '16px',fontFamily: 'Manrope',color: 'black',
    },
    }}>
    {cities.map((city, index) => (
    <MenuItem key={index} value={city}>
    {city}
    </MenuItem>
))}
</TextField>

    <FormControlLabel control={
        <Checkbox checked={form.confidential} onChange={handleChange}name="confidential"/>
            }
            label="Pick up medication confidentially"
            sx={{ mb: 3 }}/>
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" size="large" sx={{textTransform: 'none',bgcolor: '#F8F7F4',border: '1px solid black',
                borderRadius: '4px',fontFamily: 'Manrope',fontWeight: 800,color: 'black',}}>
            Submit Request
            </Button>
            <Button variant="outlined" color="secondary"size="large"onClick={clearForm}
            sx={{textTransform: 'none',bgcolor: '#F8F7F4',border: '1px solid black',borderRadius: '4px',fontFamily: 'Manrope',
                fontWeight: 800,color: 'black',}}>
            Clear Form
            </Button>
        </Box>

        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 2, fontFamily: 'Manrope',fontWeight: '400',fontSize: '14px',}}>
            We ensure your data is handled securely. Confidential pickup hides your name during collection.
        </Typography>
        </Box>
    </Paper>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom fontWeight="medium" fontFamily={'Manrope'} fontWeight={600} fontSize={20}>
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
  );
};

export default PartnerPharmaciesPage;