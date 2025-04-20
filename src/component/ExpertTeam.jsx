import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const ExpertTeamSection = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#ffffff" }}>
      {" "}
      {/* الخلفية بيضاء */}
      <Container maxWidth="lg">
        {/* زرار فوق */}
        <Box sx={{ mb: 4 }}>
          <Button
            variant="outlined"
            startIcon={<LocalHospitalIcon />}
            sx={{
              borderRadius: 5,
              textTransform: "none",
              fontWeight: 500,
              fontFamily: "Manrope",
              borderColor: "#ddd",
              color: "#333",
              "&:hover": {
                borderColor: "#aaa",
              },
            }}
          >
            Our Experts
          </Button>
        </Box>

        {/* العنوان والكلام في نفس السطر */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // تأكيد أن العنوان والنص في نفس السطر

            alignItems: "center", // لتوسيط العناصر في نفس السطر
          }}
        >
          {/* العنوان */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                fontFamily: "Manrope",
                color: "#000", // لون العنوان أسود
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.3,
              }}
            >
              Meet Our Expert
              <br />
              Team of Doctors
            </Typography>
          </Box>

          {/* الكلام */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Manrope",
                color: "#888", // لون الكلام رمادي
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "500px",
              }}
            >
              Experienced professionals specializing in mental health and
              caregiving, including counseling, psychiatric care, and family
              support, work together to provide compassionate, tailored care for
              individuals' unique needs.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpertTeamSection;
