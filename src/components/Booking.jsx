import React from "react";
import {Box,Typography,TextField,Button,Grid,Paper} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const Form = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{minHeight: "100vh",p: 4,backgroundColor: "#fafaf8",alignItems: "center",justifyContent: "center",fontFamily: "Manrope"}}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight={500}
              sx={{fontFamily: "Manrope",fontSize: "75px",lineHeight: "78px",}}
              gutterBottom>
              Schedule a <br />
              session with <Box component="span" sx={{ color: "#6e6c68" }}>our</Box> <br />
              <Box component="span" sx={{ color: "#6e6c68" }}>
                experts
              </Box>{" "}
              <Box component="span" fontWeight={500}>
                today.
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={1}
              sx={{borderRadius: 3, p: 4,backgroundColor: "#f6f4f0",}}>
              <Typography variant="h5" fontWeight={500} gutterBottom>
                Booking Form
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 ,fontSize: "13px",fontWeight: 100,fontFamily: "Manrope"}}>
                Fill out the form below, and one of our team members will get <br /> back to you shortly.
              </Typography>

              <Box component="form" noValidate autoComplete="off">
                <Typography variant="subtitle2" sx={{ mb: 0.5, fontFamily: "Manrope",fontWeight: 600 }}>
                  Full Name
                </Typography>
                <TextField fullWidth placeholder="First name" margin="dense" variant="outlined"
                  sx={{backgroundColor: "#FFFFFF", borderRadius: "12px", 
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px", 
                      "& fieldset": {
                        borderColor: "#EEEEEE", 
                      },
                    },
                  }}/>
                <Typography variant="subtitle2" sx={{ mt: 2, mb: 0.5, fontFamily: "Manrope",fontWeight: 600}}>
                  E-mail
                </Typography>
                <TextField fullWidth placeholder="you@gmail.com" margin="dense" variant="outlined"
                  sx={{backgroundColor: "#FFFFFF",borderRadius: "12px", 
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      "& fieldset": {
                        borderColor: "#EEEEEE", 
                      },
                    },
                  }}/>
                <Typography variant="subtitle2" sx={{ mt: 2, mb: 0.5, fontFamily: "Manrope",fontWeight: 600}}>
                  Phone Number
                </Typography>
                <TextField fullWidth placeholder="+62 800234756" margin="dense" variant="outlined"
                  sx={{backgroundColor: "#FFFFFF",borderRadius: "12px", 
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px", 
                      "& fieldset": {
                        borderColor: "#EEEEEE", 
                      },
                    },
                  }}/>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontFamily: "Manrope",fontWeight: 600}}>
                      Service
                    </Typography>
                    <TextField fullWidth placeholder="Choose service" margin="dense" variant="outlined"
                      sx={{backgroundColor: "#FFFFFF", borderRadius: "12px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px", 
                          "& fieldset": {
                            borderColor: "#DDDDDD", 
                          },
                        },
                      }}/>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontFamily: "Manrope" ,fontWeight: 600}}>
                      Session
                    </Typography>
                    <TextField fullWidth placeholder="Session available" margin="dense" variant="outlined"
                      sx={{backgroundColor: "#FFFFFF",borderRadius: "12px", 
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px", 
                          "& fieldset": {
                            borderColor: "#EEEEEE", 
                          },
                        },
                      }}/>
                  </Grid>
                </Grid>
                <Box textAlign="right" sx={{ mt: 4 }}>
                  <Button variant="contained" size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{borderRadius: 1,backgroundColor: "#1c1c1c",color: "#fff",fontSize: "13px",textTransform: "none",px: 2,
                      "&:hover": {
                        backgroundColor: "#000",
                      },
                    }}>
                    Book Session
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;