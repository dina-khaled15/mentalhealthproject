import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { RadioButtonChecked } from '@mui/icons-material';

const Areas = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Box
      sx={{minHeight: '100vh',backgroundColor: '#222222',color: '#fff',fontFamily: 'Manrope',px: 4,py: 2,pl: '3rem',pt: '50px',
        position: 'relative'}}>
      {/* Mental Issues button centered */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 4}}>
        <Button
          variant="outlined"
          startIcon={<FontAwesomeIcon icon={faBrain} style={{ fontSize: '14px', color: '#ccc' }} />}
          sx={{ borderColor: '#FCFCFC',color: '#fff',borderRadius: '16px',textTransform: 'none',
            fontWeight: 400,fontSize: '13px',fontFamily: 'Manrope',
            '&:hover': {
              borderColor: '#777', 
            }
          }}>
          Mental Issues
        </Button>
      </Box>

      {/* Main Title */}
      <Typography
        align="center"
        sx={{fontWeight: 500,fontFamily: 'Manrope',fontSize: '46px',mb: 1 }}>
        We Care About your Life for Better
      </Typography>

      {/* Personal Issues button aligned right */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mr: 8,
          mb: 3,
          position: 'absolute',
          top: '32%',
          right: '13%',
        }}
      >
        <Button
          variant="contained"
          startIcon={
            <RadioButtonChecked sx={{ fontSize: '12px', color: '#4A6F6A' }} />
          }
          sx={{fontFamily: 'Manrope',fontWeight: 530,fontSize: '12px',backgroundColor:'#A1A09B',borderRadius: '6px',textTransform: 'none',
            color: '#000',
            '&:hover': {
              backgroundColor: '#777',
            },
          }}
        >
          Personal Issues
        </Button>
      </Box>

      {/* List section */}
      <Box sx={{ maxWidth: 700, pl: 3, position: 'absolute', top: '28%', left: '15%' }}>
        {/* Anxiety Disorders */}
        <Box sx={{ py: 3, width: '100%' }}>
          <Typography
            sx={{fontFamily: 'Manrope',fontWeight: 400,fontSize: '18px',lineHeight: '28px',color: '#FCFCFC',}}>
            Anxiety Disorders
          </Typography>
          <Box sx={{ borderBottom: '2px solid #555', width: '90%', mt: 2, ml: '-10px' }} />
        </Box>

        {/* Depression */}
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{fontFamily: 'Manrope',fontWeight: 600,fontSize: '18px',lineHeight: '28px',color: '#FCFCFC',mb: 2}}>
            Depression
          </Typography>
          <Typography
            variant="body1"
            sx={{fontFamily: 'Manrope',fontWeight: 90,fontSize: '13px',color: '#ccc',pr: 6 ,mt: 1, mb: 3}}>
            Comprehensive care and support for individuals struggling with<br />depression.
          </Typography>
          <Box sx={{ borderBottom: '2px solid #555', width: '90%', mt: 2, ml: '-10px' }} />
        </Box>

        {/* Stress Management */}
        <Box sx={{ py: 2, width: '100%' }}>
          <Typography
            sx={{fontFamily:'Manrope',fontWeight: 400,fontSize:'18px',lineHeight:'28px',width:'548px',height:'28px',color: '#FCFCFC',mt: '5px',mb: '20px',}}>
            Stress Management
          </Typography>
          <Box sx={{ borderBottom: '2px solid #555', width: '90%', mt: 2, ml: '-10px' }} />
        </Box>

        {/* Trauma and PTSD */}
        <Box sx={{ width: '100%' }}>
          <Typography
            sx={{
              fontFamily: 'Manrope',fontWeight: 400,lineHeight: '28px',width: '548px',height: '28px',color: '#FCFCFC',mt: '6px',mb: '20px ' }}>
            Trauma and PTSD
          </Typography>
          <Box sx={{ borderBottom: '2px solid #555', width: '90%', mt: 2, ml: '-10px' }} />
        </Box>

        {/* Relationship Issues */}
        <Box sx={{ py: 2, width: '100%' }}>
          <Typography
            sx={{fontFamily:'Manrope',fontWeight: 400,fontSize: '18px',lineHeight: '28px',width:'548px',height:'28px',mb:'20px',color:'#FCFCFC',}}>
            Relationship Issues
          </Typography>
          <Box sx={{ borderBottom: '2px solid #555', width: '90%', mt: 2, ml: '-10px' }} />
        </Box>
      </Box>

      {/* DEPRESSION big title OUTSIDE the borders */}
      <Typography
        align="center"
        sx={{fontFamily: 'Manrope',fontWeight: 550, fontSize: '28px',position: 'absolute',top: '70%',
          left: '59%',bottom: '5%',color: '#FCFCFC',transform: 'translateX(-50%)',}}>
        DEPRESSION
      </Typography>
    </Box>
  );
};

export default Areas;
