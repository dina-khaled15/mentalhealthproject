import React from 'react';
import { Link } from 'react-router-dom';
import {Box,Grid,Typography,Card,CardMedia,CssBaseline,} from '@mui/material';

import depressionImg from './Depression.png';
import stressImg from './Stress.png';
import anxietyImg from './Anxeity.png';
import relationshipImg from './Relationship.png';
import griefImg from './Loss.jpg';
import selfconfidenceImg from './Confidence.png';
import eatingImg from './Eating.png';
import substanceImg from './Abuse.png';
import socialImg from './Social.png';

const services = [
  { title: 'Depression', image: depressionImg, category: 'Personal Issues' },
  { title: 'Anxiety', image: anxietyImg, category: 'Personal Issues' },
  { title: 'Grief & Loss', image: griefImg, category: 'Personal Issues' },
  { title: 'Self-Confidence', image: selfconfidenceImg, category: 'Personal Issues' },
  { title: 'Stress Management', image: stressImg, category: 'Work Issues' },
  { title: 'Relationship Issues', image: relationshipImg, category: 'Couple Issue' },
  { title: 'Eating Disorder', image: eatingImg, category: 'Medical Issues' },
  { title: 'Substance Abuse', image: substanceImg, category: 'Medical Issues' },
  { title: 'Social Anxiety', image: socialImg, category: 'Social Issues' },
];

const Issues = () => (
  <>
    <CssBaseline />
    <Box sx={{ p: 3, fontFamily: 'Manrope'}}>
      <Typography variant="h4" align="center" sx={{fontWeight: 'bold',color: '#000',mb: 4,fontSize: "40px", fontFamily: 'Manrope' }}>
        Issues We Tackle
      </Typography>

      <Grid container spacing={2}>
        {services.map((service, idx) => (
          <Grid item xs={12} sm={6} md={service.title === 'Substance Abuse' ? 2 : 3} key={idx} sx={{ml: 4, mt: 4 }}>
            <Link to={`/service/${encodeURIComponent(service.title)}`} style={{ textDecoration: 'none' }}>
              <Card sx={{position: 'relative',borderRadius: 2,boxShadow: 3,overflow: 'hidden',fontFamily: 'Manrope',
                  width: '90%',marginLeft: 'auto',marginRight: 'auto',display: 'block',}}>
                <CardMedia component="img" image={service.image}
                  alt={service.title}
                  sx={{height: 200,width: 430,objectFit: 'cover',margin: 0}}/>

                <Box sx={{ position: 'absolute',top: 8,left: 8,bgcolor: 'rgba(224, 224, 224, 0.7)',px: 1,py: 0.5, borderRadius: 1}}>
                  <Typography variant="caption" sx={{color: '#000',fontWeight: 'bold',fontSize: '0.7rem',fontFamily: 'Manrope',}}>
                    {service.category}
                  </Typography>
                </Box>

                <Box sx={{position: 'absolute',bottom: 16,width: '100%',textAlign: 'center'}}>
                  <Typography variant="subtitle1" sx={{color: '#fff',fontWeight: 'bold',textShadow: '1px 1px 3px rgba(0,0,0,0.8)', fontFamily: 'Manrope'}}>
                    {service.title}
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  </>
);

export default Issues;