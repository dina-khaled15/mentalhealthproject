import React from "react";
import {Box,Typography,Button,Card,CardContent,Grid} from "@mui/material";
import steps from "../components/data/Healingpath";
const HealingPath = () => {
  
  return (
    <Box sx={{ bgcolor: "#1E1E1E", color: "white", minHeight: "100vh", p: 4 }}>
      <Box textAlign="center" mb={4}>
        <Button
          variant="outlined"
          sx={{ borderColor: "white", color: "white", borderRadius: 5, mb: 2 }}
        >
          Healing Path
        </Button>
        <Typography variant="h4" fontWeight="bold">
          Our Holistic Healing Approach to
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          Mental Well-Being
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={0}>
        {steps.map((step, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                width: index === 1 ? 280 : 100,
                height: 180,
                bgcolor:
                  index === 1 ? "white" : index > 1 ? "#A8A8A8" : "#F5F5F5",
                borderRadius:
                  index === 0
                    ? "16px 0 0 16px"
                    : index === steps.length - 1
                    ? "0 16px 16px 0"
                    : 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent sx={{ textAlign: "center", p: 2 }}>
                <Typography variant="h3" fontWeight="bold">
                  {step.number}
                </Typography>
                {index === 1 && (
                  <>
                    <Typography variant="subtitle2" color="text.secondary">
                      2/5
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" color="black">
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.desc}
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HealingPath;
