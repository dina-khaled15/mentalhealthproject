import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStairs } from "@fortawesome/free-solid-svg-icons";

const Personalized = () => {
  return (
    <Box sx={{px: 4,py: 10,backgroundColor: "#fff",maxWidth: "1000px",mx: "auto",fontFamily: "Manrope",}}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }}alignItems="flex-start"gap={6} mb={6}>
        <Box flex={1} sx={{ mt: -5, mr: { md: -4, lg: -23 }, ml: { md: -4, lg: -23 } }}>
          <Stack direction="column" spacing={2}>
            <Paper elevation={1}
              sx={{width: "fit-content",px: 2,py: 0.5,borderRadius: 4,border: "1px solid #D3D3D3",display: "flex",alignItems: "center"}}>
              <FontAwesomeIcon icon={faStairs} style={{ marginRight: 8, color: "#000" }}/>
              <Typography fontSize={15} fontWeight={500}>
                Who Are We
              </Typography>
            </Paper>

            <Typography variant="h4" fontWeight={600} fontFamily="Manrope" lineHeight={1.3}>
              Personalized Mental
              <br />
              Health Support
            </Typography>
          </Stack>
        </Box>

        <Box flex={1}>
          <Typography variant="body1" color="text.secondary" fontFamily="Manrope" fontWeight={400} mb={10} textAlign={"justify"}>
            Wellthy is a dedicated mental health platform providing personalized
            support through a variety of professional counseling services. We
            believe in fostering emotional resilience and mental well-being for
            individuals of all ages. With a team of blicensed therapists and
            counselors, we aim to provide accessible mental health care tailored
            to your unique needs.
          </Typography>
        </Box>
      </Box>

<Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
  {[
    { number: "1000+", label: "Clients helped globally" },
    { number: "200+", label: "Licensed professionals" },
    { number: "95%", label: "Client satisfaction rate" },
    { number: "15+", label: "Years of experience" },
  ].map((item, index) => (
    <Box key={index} minWidth={180}>
      <Typography variant="h4" fontFamily="Manrope" fontWeight={500} fontSize={50}>
        {item.number}
      </Typography>
      <Typography color="text.secondary">{item.label}</Typography>
    </Box>
  ))}
</Box>
    </Box>
  );
};

export default Personalized;