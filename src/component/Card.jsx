import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard({name, des, img}) {
  return (
    <div>
    <Card sx={{ maxWidth: 397.33, borderRadius: "20px", border: "1px solid rgb(211, 211, 211)", boxShadow: 'none', padding: 0}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={img} 
          alt="green iguana"
          
        />
        <CardContent sx={{ height: 168 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Manrope',  fontWeight: 600, marginTop: 1}} >
            {name}
          </Typography>
          <Typography variant="body2" sx={{fontFamily: 'Manrope', color: 'text.secondary', fontSize: 16, marginTop: 2 }} >
            {des}          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
