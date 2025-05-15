import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../PieChart/Pie";
import React from "react";
import Bar from "../BarChart/Bar";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack
      gap={1.5}
      direction={"row"}
      flexWrap={"wrap"}
      mt={1.4}
      justifyContent={"space-between"} // Pushes items to the edges
    >
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "28%",
          backgroundColor: "#F4F2ED",
        }}
      >
        <Typography
          color="black"
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
        Patient by Consultation
        </Typography>

        <Pie isDashbord={true} />
        <Typography
          variant="h6"
          fontWeight="600"
          align="center"
          sx={{ mt: "15px" }}
        >
          $17.498 Total Patient
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
    
        </Typography>
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "400px",
          width: "33%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            padding: "30px 30px 0 30px",
            fontWeight: "600",
            fontFamily: "Manrope",
            fontSize: "24px",
          }}
        >
          Patients by Age Stages
        </Typography>

        <Bar isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;