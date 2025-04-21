import React from 'react';
import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStairs } from '@fortawesome/free-solid-svg-icons';

const Personalized = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: '#fff',maxWidth: '1000px', mx: 'auto',fontFamily: 'Manrope',}}>
       <Stack direction="row" alignItems="center" spacing={1} mb={4}>
        <Paper
          elevation={1}
          sx={{px: 2, py: 0.5,borderRadius: 4,border: '1px solid #D3D3D3',display: 'flex',alignItems: 'center',}}>
          <FontAwesomeIcon icon={faStairs} style={{ marginRight: 8, color: '#000'}} />
          <Typography fontSize={15} fontWeight={600} fontFamily={'Manrope'}>
            Who Are We
          </Typography>
        </Paper>
      </Stack>

      <Grid container spacing={4} alignItems="flex-start" mb={6}>
        <Grid item xs={12} md={6}>
          <Typography  variant="h4" fontWeight={700} lineHeight={1.3}
            sx={{ fontFamily: 'Manrope' }}>
            Personalized Mental
            <br />
            Health Support
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="text.secondary"
            sx={{ fontFamily: 'Manrope' }}>
            Wellthy is a dedicated mental health platform providing<br />personalized
            support through a variety of professional <br />counseling services. We
            believe in fostering emotional resilience <br />and mental well-being for
            individuals of all ages. With a team of <br />licensed therapists and
            counselors, we aim to provide accessible <br />mental health care tailored
            to your unique needs.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>1000+</Typography>
          <Typography color="text.secondary" fontFamily={'Manrope'} fontWeight={400}>Clients helped globally</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>200+</Typography>
          <Typography color="text.secondary" fontFamily={'Manrope'} fontWeight={400}>Licensed professionals</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>95%</Typography>
          <Typography color="text.secondary" fontFamily={'Manrope'} fontWeight={400}>Client satisfaction rate</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>15+</Typography>
          <Typography color="text.secondary" fontFamily={'Manrope'} fontWeight={400}>Years of experience</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Personalized;
