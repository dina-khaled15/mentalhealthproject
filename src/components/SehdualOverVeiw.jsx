import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const schedule = [
  { day: "Monday", time: "9:00 AM - 12:00 PM", location: "Online" },
  { day: "Tuesday", time: "1:00 PM - 5:00 PM", location: "Wealthy Clinic" },
  { day: "Thursday", time: "10:00 AM - 3:00 PM", location: "Wealthy Clinic" },
  { day: "Saturday", time: "11:00 AM - 2:00 PM", location: "Online" },
];

const WeeklySchedule = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography
        variant="h4"
        fontFamily="Manrope"
        fontSize={56}
        fontWeight={600}
        gutterBottom
      >
        Weekly Schedule Overview
      </Typography>

      {/* Row 1 */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 2 }}>
        {schedule.slice(0, 2).map((slot, index) => (
          <Grid item xs={12} sm={10} md={6} key={index}>
            <Paper
              elevation={1}
              sx={{
                p: 5,
                borderRadius: "3px",
                backgroundColor: "#F8F7F4",
                minHeight: "20px",
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="h6"
                    fontFamily={"Manrope"}
                    fontSize={30}
                    fontWeight={600}
                    mt={-8}
                    mr={2}
                    paddingRight={2}
                  >
                    {slot.day}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Box textAlign="left" sx={{ mt: -2 }}>
                    <Typography
                      variant="body1"
                      fontFamily={"Manrope"}
                      fontWeight={600}
                    >
                      {slot.time}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="black"
                      fontFamily={"Manrope"}
                      fontSize={20}
                      fontWeight={400}
                      sx={{ mb: 2, mt: 0.5 }}
                    >
                      {slot.location}
                    </Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "black",
                        borderColor: "black",
                        borderRadius: "4px",
                        backgroundColor: "#F8F7F4",
                        textTransform: "none",
                        mt: 0.5,
                        "&:hover": {
                          backgroundColor: "#e6e5e2",
                          borderColor: "black",
                        },
                      }}
                    >
                      Book Session
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Row 2 */}
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 2 }}>
        {schedule.slice(2).map((slot, index) => (
          <Grid item xs={12} sm={10} md={6} key={index}>
            <Paper
              elevation={1}
              sx={{
                p: 5,
                borderRadius: "3px",
                backgroundColor: "#F8F7F4",
                minHeight: "20px",
                mt: 2,
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="h6"
                    fontFamily={"Manrope"}
                    fontSize={30}
                    fontWeight={600}
                    mt={-8}
                    mr={2}
                    paddingRight={0}
                  >
                    {slot.day}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Box textAlign="left" sx={{ mt: -2 }}>
                    <Typography
                      variant="body1"
                      fontFamily={"Manrope"}
                      fontWeight={600}
                    >
                      {slot.time}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="black"
                      fontFamily={"Manrope"}
                      fontSize={20}
                      fontWeight={400}
                      sx={{ mb: 2, mt: 0.5 }}
                    >
                      {slot.location}
                    </Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "black",
                        borderColor: "black",
                        borderRadius: "4px",
                        backgroundColor: "#F8F7F4",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#e6e5e2",
                          borderColor: "black",
                        },
                      }}
                    >
                      Book Session
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeeklySchedule;