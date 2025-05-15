import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";
import axios from "axios";

export default function Timeline() {
  const [milestones, setMilestones] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/milestones");
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
            "&:hover": { bgcolor: "#c0c0c0" },
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

        {/* الخط الأفقي */}
        <Box
          sx={{
            position: "relative",
            top: 130,
            height: 6,
            bgcolor: "#bdbdbd",
            mb: 10,
            display: { xs: "none", lg: "block" }, // يختفي في الشاشات الصغيرة
          }}
        />

        <div className="row justify-content-between position-relative">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item._id || item.year}
                className="col-12 col-md-4 col-lg-2 d-flex flex-column align-items-center"
                style={{
                  position: "relative",
                  top: isLargeScreen ? (isEven ? "-100px" : "auto") : "auto",
                  bottom: isLargeScreen ? (!isEven ? "-100px" : "auto") : "auto",
                  marginBottom: isLargeScreen ? "150px" : "30px",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                {/* السنة دايمًا فوق */}
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: 700,
                    mb: 2,
                    color: "#000",
                  }}
                >
                  {item.year}
                </Typography>

                {/* النص تحت */}
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Manrope",
                    maxWidth: 180,
                    color: "text.secondary",
                  }}
                >
                  {item.text}
                </Typography>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
}
