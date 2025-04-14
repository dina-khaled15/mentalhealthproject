import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Visibility, Groups, Business } from "@mui/icons-material";
import visionImage from "./vission.png";

const VisionMission = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",
        width: "1365px",
        height: "770px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        px: { xs: 2, md: 4 },
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box textAlign="center" mb={3}>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            mb: 2,
            textTransform: "none",
            borderRadius: "30px",
            px: 4,
            py: 1.2,
            fontSize: "0.9rem",
          }}
          startIcon={<Business sx={{ fontSize: "1.5rem", color: "white" }} />}
        >
          Vision & Mission
        </Button>
        <Typography variant="h3" fontWeight="bold" mb={1}>
          Empowering Global Mental Well-Being <br />
          Through Accessible Care
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        width="100%"
        maxWidth="1100px"
        mb={4}
      >
        <Box
          component="img"
          src={visionImage}
          alt="online therapy"
          sx={{
            width: { xs: "100%", md: "45%" },
            borderRadius: 3,
            boxShadow: 2,
            objectFit: "cover",
            mb: { xs: 3, md: 0 },
          }}
        />

        {/* الرؤية */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, px: 8 }}>
          <Avatar
            sx={{
              bgcolor: "#444",
              width: 40,
              height: 40,
              mb: 1.5,
            }}
          >
            <Visibility />
          </Avatar>

          <Typography variant="h3" fontWeight="bold" mb={1}>
            Our Vision
          </Typography>

          <Typography variant="body1" color="gray" mb={2}>
            To be the leading mental health platform, providing accessible,
            compassionate, and innovative care for emotional and mental
            well-being worldwide.
          </Typography>
        </Box>
      </Box>

      <Box mt={4}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          mb={2}
        >
          <Avatar
            sx={{
              bgcolor: "#444",
              width: 40,
              height: 40,
              mb: 1.5,
            }}
          >
            <Groups />
          </Avatar>

          <Typography variant="h3" fontWeight="bold" mb={1}>
            Our Mission
          </Typography>
        </Box>

        <Typography variant="body1" color="gray" maxWidth="700px" mb={3}>
          To support individuals in achieving mental and emotional balance
          through tailored therapy, education, ensuring everyone has access to
          professional care.
        </Typography>
      </Box>
    </Box>
  );
};

export default VisionMission;
