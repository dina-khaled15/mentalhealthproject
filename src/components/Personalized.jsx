import React from 'react';
import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStairs } from '@fortawesome/free-solid-svg-icons';

const Personalized = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 8,
        backgroundColor: '#fff',
        maxWidth: '1000px',
        mx: 'auto',
        fontFamily: 'Manrope',
      }}
    >
      {/* العنوان والنص جنب بعض */}
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="flex-start" gap={6} mb={6}>
        {/* الشمال: الزر  والعنوان */}
        <Box flex={1} sx={{mt:-5, mr: { md: -4, lg: -23 }, ml: { md: -4, lg: -23 } }}>
          <Stack direction="column" spacing={2} >
            <Paper
              elevation={1}
              sx={{
                width: 'fit-content',
                px: 2,
                py: 0.5,
                borderRadius: 4,
                border: '1px solid #D3D3D3',
                display: 'flex',
                alignItems: 'center',
                
              }}
            >
              <FontAwesomeIcon icon={faStairs} style={{ marginRight: 8, color: '#000' }} />
              <Typography fontSize={15} fontWeight={500}>
                Who Are We
              </Typography>
            </Paper>

            <Typography variant="h4" fontWeight={600} fontFamily="Manrope" lineHeight={1.3}>
              Personalized Mental
              <br />
              Health Support
            </Typography>
          </Stack>
        </Box>

        {/* اليمين: الباراجراف */}
        <Box flex={1}>
          <Typography variant="body1" color="text.secondary" fontFamily="Manrope" fontWeight={400} mb={10}  textAlign={"justify"}>
            Wellthy is a dedicated mental health platform providing personalized
            support through a variety of professional counseling services. We believe
            in fostering emotional resilience and mental well-being for individuals
            of all ages. With a team of blicensed therapists and counselors, we aim to
            provide accessible mental health care tailored to your unique needs.
          </Typography>
        </Box>
      </Box>

      {/* الإحصائيات */}
      <Grid container spacing={4}>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>1000+</Typography>
          <Typography color="text.secondary">Clients helped globally</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>200+</Typography>
          <Typography color="text.secondary">Licensed professionals</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>95%</Typography>
          <Typography color="text.secondary">Client satisfaction rate</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h4" fontFamily={'Manrope'} fontWeight={600}>15+</Typography>
          <Typography color="text.secondary">Years of experience</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Personalized;