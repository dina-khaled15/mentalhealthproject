import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom"; // استيراد Link
import Navbar from "../components/navbar";
import FooterComponent from "../components/footer/contact";

const games = [
  {
    title: "focusing game",
    image: "/images/bubble.png", // الصورة موجودة في مجلد public
    link: "/bubble", // الرابط للعبة
  },
  {
    title: "brain game",
    image: "/images/brain.png", // الصورة الموجودة في public
    link: "/card-matching", // الرابط للعبة
  },
];

const GameCard = ({ title, image, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: 450, // تكبير الكرت
          boxShadow: 3,
          borderRadius: 4, // إضافة حواف دائرية للكرت
          mx: "auto",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)", // تكبير الكرت عند التمرير عليه
          },
        }}
      >
        <CardMedia
          component="img"
          height="200" // زيادة الارتفاع قليلاً
          image={image}
          alt={title}
          sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
        />
        <CardContent>
          <Typography variant="h6" component="div" textAlign="center">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

const GamesPage = () => {
  return (
    <>
      <Navbar />

      {/* المحتوى الرئيسي */}
      <Box
        sx={{
          bgcolor: "#fff",
          pt: 20, // المسافة من الأعلى
          pb: 12, // المسافة من الأسفل
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowX: "hidden", // منع التمرير الأفقي
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", mb: 4, color: "black" }}
        >
          Hello Heroes! lets have fun
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            maxWidth: "1000px",
            gap: 6,
          }}
        >
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <GameCard
                title={game.title}
                image={game.image}
                link={game.link} // تمرير الرابط لكل لعبة
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* الفوتر */}
      <Box sx={{ mt: 4 }}>
        <FooterComponent variant="dark" />
      </Box>
    </>
  );
};

export default GamesPage;
