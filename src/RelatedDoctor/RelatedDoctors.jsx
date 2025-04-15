import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const RelatedDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Liam Carter',
      specialty: 'Grief Counseling, Substance Abuse, Addiction Recovery',
      image: "/images/7.png"
    },
    {
      id: 2,
      name: 'Dr. Sophia Hughes',
      specialty: 'Adolescent Therapy, Bullying, Peer Relationships',
      image:"/images/8.png"
    },
    {
      id: 3,
      name: 'Dr. Marcus Lee',
      specialty: 'Cognitive Behavioral Therapy (CBT), Process Work, Depression',
      image: "/images/9.png"
    },
    {
      id: 4,
      name: 'Dr. Isabella Collins',
      specialty: 'Marriage Counseling, Relationship Therapy, Couples Therapy',
      image: "/images/10.png"
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
        py: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: '1300px',
          width: '90%',
          mx: 'auto',
          textAlign: 'center', // المركزية
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: '#1E1E1E',
          }}
        >
          Related Doctors
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // محاذاة الكروت في المنتصف
            gap: 4,
            flexWrap: 'wrap', // لتوزيع الكروت بشكل مناسب
            pb: 2,
          }}
        >
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              sx={{
                width: 240,
                flexShrink: 0,
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={doctor.image}
                alt={doctor.name}
                sx={{ objectFit: 'cover' }} // لضبط الصور بشكل جيد من غير ما تتأكل
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 'bold', fontSize: '1rem', color: '#1E1E1E' }}
                >
                  {doctor.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: '0.85rem', color: '#555' }}
                >
                  {doctor.specialty}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedDoctors;
