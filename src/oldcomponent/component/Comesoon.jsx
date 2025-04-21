import React from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    TextField,
    Typography,
    Paper
} from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

export default function ContactForm() {
    return (
        <Box sx={{
            p: 5, backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',

        }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} alignItems="flex-start">


                <Box sx={{ flex: 1 }}>

                    <Typography
                        variant="caption"
                        sx={{
                            display: 'inline-block',
                            backgroundColor: '#eee',
                            px: 2,
                            py: 0.5,
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            mb: 2
                        }}
                    >
                        🖊️ Form
                    </Typography>


                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                        Fill out the form,
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'grey.700' }}>
                        we will get back to you soon!
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{
                        mt: 3,
                        color: "#6C6C6C"
                    }}>
                        <Button variant="outlined" startIcon={<Phone />}
                            sx={{ color: "#6C6C6C" }}
                        >
                            (123) 456-7890
                        </Button>
                        <Button variant="outlined" startIcon={<Email />}
                            sx={{ color: "#6C6C6C" }}
                        >
                            support@wellthymentalhealth.com
                        </Button>
                    </Stack>
                </Box>


                <Paper elevation={2} sx={{ p: 3, maxWidth: 600, width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField label="First Name" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Last Name" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="E-mail" type="email" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Phone Number" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Message" multiline rows={4} fullWidth required />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3 }}>
                        <Button
                            sx={{
                                color: "#6C6C7C",
                                backgroundColor: "#222222"
                            }}
                        >
                            Submit Inquiry
                        </Button>
                    </Box>
                </Paper>
            </Stack>
        </Box>
    );
}
