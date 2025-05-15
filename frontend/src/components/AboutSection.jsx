import React, { useState } from "react";
import { Box, Typography, Grid, IconButton, Paper } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <Box
      sx={{
        color: "#fff",
        paddingTop: "100px",
        paddingBottom: "100px",
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            fontFamily: "Manrope",
            fontSize: "60px",
            lineHeight: 1.2,
            width: "1200px",
            marginBottom: "40px",
          }}
        >
          At Wellthy, we provide personalized mental
          health counseling with licensed therapists
          focused on your unique needs.
        </Typography>
      </Box>

      <Grid container>
        <Grid>
          <Paper
            elevation={3}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              width: "800px",
            }}
          >
            {!showVideo ? (
              <>
                <img
                  src="http://res.cloudinary.com/defus4mj2/image/upload/v1747318189/mtrvd4cffcnri7dkg7e2.png"
                  alt="Main Video"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#fff",
                    color: "#000",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                  }}
                  onClick={handlePlayClick}
                >
                  <PlayCircleFilledWhiteIcon sx={{ fontSize: 48 }} />
                </IconButton>
              </>
            ) : (
              <iframe
                width="640px"
                height="400"
                src="https://www.youtube.com/embed/1i9OktVsTWo?autoplay=1"
                title="Meditation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "16px",
                }}
              ></iframe>
            )}
          </Paper>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="column"
          sx={{
            marginLeft: "20px",
          }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: "16px",
                height: "190px",
                maxWidth: "700px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                width: "460px",
              }}
            >
              {/* Therapy Session Image */}
              <img
                src="http://res.cloudinary.com/defus4mj2/image/upload/v1747318113/pkq77rmkkcriwgm4ionz.png"
                alt="Therapy Session"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "transparent",
                borderRadius: "16px",
                width: "300px",
                height: "190px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                width: "466px",
              }}
            >
              {/* Friends Outing Image */}
              <img
                src="http://res.cloudinary.com/defus4mj2/image/upload/v1747317037/k5dx1ubnigw8uihrwexd.webp"
                alt="Friends Outing"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;