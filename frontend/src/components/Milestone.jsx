import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";
import axios from "axios";

export default function Timeline() {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/milestones');
        setMilestones(response.data); 
      } catch (error) {
        console.error("Error fetching milestones:", error);
      }
    };

    fetchMilestones();
  }, []);

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
              bgcolor: "#c0c0c0", 
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
