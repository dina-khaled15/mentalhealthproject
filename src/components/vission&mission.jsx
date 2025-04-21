import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { Visibility, Groups, Business } from "@mui/icons-material";
import visionImage from "../images/vission.png";

const VisionMission = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "white",

        maxWidth: "100%",
        height: "990px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        py: 4,
        px: { xs: 2, md: 4 },
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
            px: 3.5,
            py: 1,
            fontSize: "16px",
            fontWeight: "400",
            fontFamily: "Manrope",
          }}
          startIcon={
            <Business
              sx={{ fontSize: "1.5rem", color: "white", fontFamily: "Manrope" }}
            />
          }
        >
          Vision & Mission
        </Button>
        <Typography variant="h3" fontWeight="500" mb={1} fontFamily={"Manrope"}>
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
            mt: { xs: 2, md: 4 },
          }}
        />

        {/* الرؤية */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, px: 8, mt: -5 }}>
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

          <Typography
            variant="h3"
            fontWeight={500}
            mb={1}
            fontFamily={"Manrope"}
          >
            Our Vision
          </Typography>

          <Typography
            variant="body1"
            color="#EEEEEE"
            mb={2}
            fontFamily={"Manrope"}
            fontWeight={400}
          >
            To be the leading mental health platform, providing accessible,
            compassionate, and innovative care for emotional and mental
            well-being worldwide.
          </Typography>
        </Box>
      </Box>

      <Box
        mt={4}
        alignSelf="flex-start"
        px={21}
        sx={{ minHeight: "100px", pb: 1 }}
      >
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

          <Typography
            variant="h3"
            fontWeight={500}
            mb={1}
            fontFamily={"Manrope"}
          >
            Our Mission
          </Typography>
        </Box>

        <Typography
          variant="body1"
          color="#EEEEEE"
          maxWidth="700px"
          fontWeight={400}
          fontFamily={"Manrope"}
          mb={3}
        >
          To support individuals in achieving mental and emotional balance
          through tailored therapy, education, ensuring everyone has access to
          professional care.
        </Typography>
      </Box>
    </Box>
  );
};

export default VisionMission;
