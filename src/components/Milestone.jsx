import React from "react";
import { Box, Typography, Button } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";

const milestones = [
  {
    year: "2015",
    text: "Founded Wellthy to provide accessible mental health support through online platforms.",
  },
  {
    year: "2017",
    text: "Reached 5,000 clients with 98% satisfaction in our online therapy services.",
  },
  {
    year: "2019",
    text: "Expanded to provide group therapy sessions and wellness workshops.",
  },
  {
    year: "2021",
    text: "Launched our mobile app for on-the-go counseling and mental health resources.",
  },
  {
    year: "2023",
    text: "Surpassed 10,000 clients and introduced specialized therapy programs for teens and couples.",
  },
];

export default function Timeline() {
  return (
    <div className="container mt-5">
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Button
          variant="outlined"
          startIcon={<RouteIcon />}
          sx={{
            fontFamily: "Manrope",
            mb: 2,
            borderRadius: 10,
            borderColor: "#D3D3D3",
            color: "black",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#c0c0c0", // لون أغمق بسيط عند الـ hover
            },
          }}
        >
          Milestone
        </Button>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Manrope", fontWeight: 700, mb: 6 }}
        >
          A Journey of Expanding Wellthy
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            px: 4,
            mt: 10,
          }}
        >
          <Box
            sx={{
              fontFamily: "Manrope",
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 6,
              bgcolor: "#bdbdbd",
              zIndex: 0,
              transform: "translateY(-50%)",
            }}
          />

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={item.year}
                sx={{
                  fontFamily: "Manrope",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  width: "20%",
                }}
              >
                {isEven && (
                  <>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Manrope", fontWeight: 700, mb: 1 }}
                    >
                      {item.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Manrope",
                        maxWidth: 180,
                        mx: "auto",
                        color: "text.secondary",
                        mb: 20,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </>
                )}

                {!isEven && (
                  <>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Manrope", fontWeight: 700, mt: 20 }}
                    >
                      {item.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Manrope",
                        maxWidth: 180,
                        mt: 1,
                        mx: "auto",
                        color: "text.secondary",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}
