// Card.js
import React from 'react';
import { Card, CardMedia, Typography } from '@mui/material';

const CardComponent = ({ card, index, flipCard }) => {
  return (
    <Card
      onClick={() => flipCard(index)}
      sx={{
        width: 100,
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 2,
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        backgroundColor:
          card.flipped || card.matched ? "transparent" : "#F2F0E9", 
        transition: "transform 0.3s",
        transform: card.flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      {card.flipped || card.matched ? (
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 2,
          }}
          image={card.image}
          alt="card"
        />
      ) : (
        <Typography
          variant="h4"
          sx={{
            color: "#000", 
          }}
        >
          ?
        </Typography>
      )}
    </Card>
  );
};

export default CardComponent;
