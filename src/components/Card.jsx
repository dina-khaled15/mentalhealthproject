import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from './Card.module.css';

export default function ActionAreaCard({ name, des, img }) {
  return (
    <div>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={img}
            alt="green iguana"
          />
          <CardContent className={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
              {name}
            </Typography>
            <Typography variant="body2" className={styles.cardDescription}>
              {des}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
