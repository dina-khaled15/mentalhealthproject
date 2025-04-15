import React from "react";
import {Box,Typography,Button,Container,Paper,Grid,Chip,List,ListItem,ListItemIcon,ListItemText,} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic Package",
      price: "$75",
      period: "/month",
      description: "One request at a time. Reschedule or cancel anytime.",
      features: [
        "Online counseling",
        "30 minutes per session",
        "Chat support",
        "Access to wellness articles",
      ],
      sessions: "2 sessions per month",
      buttonText: "Subscribe Package",
      highlighted: false,
    },
    {
      title: "Standard Package",
      price: "$150",
      period: "/month",
      description: "One request at a time. Reschedule or cancel anytime.",
      features: [
        "Online and in-person counseling",
        "60 minutes per session",
        "Chat support",
        "Chat and video support",
        "Personalized wellness plan",
      ],
      sessions: "4 sessions per month",
      buttonText: "Subscribe Package",
      highlighted: true,
    },
    {
      title: "Family Package",
      price: "$350",
      period: "/month",
      description: "One request at a time. Reschedule or cancel anytime.",
      features: [
        "Family or group therapy",
        "45 minutes per sessions",
        "Personal wellness coach",
        "Online and in-person support",
        "Exclusive family wellness resources",
      ],
      sessions: "8 sessions per month",
      buttonText: "Subscribe Package",
      highlighted: false,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#1a1a1a", py: 8, px: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Button
            variant="outlined"
            startIcon={<PriceChangeIcon />}
            sx={{ textTransform: "none", fontFamily: "Manrope",mb: 3, borderRadius: 28,color: "white",
              borderColor: "rgba(255,255,255,0.3)",
              "&:hover": {
                borderColor: "white",
              },
            }}
          >
            Pricing
          </Button>
          <Typography variant="h2" component="h1"
            sx={{color: "white",fontWeight: 600,fontSize: 50,fontFamily: "Manrope"}}>
            Choose the Right Plan for You
          </Typography>
        </Box>

        <Box sx={{ display: "flex",justifyContent: "center",  gap: "20px",flexWrap: { xs: "wrap", md: "nowrap" }}}>
          {plans.map((plan, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{width: { xs: "100%", sm: "350px" },
                borderRadius: "16px", overflow: "hidden",
                backgroundColor: plan.highlighted ? "#fff" : "#474747",
                color: plan.highlighted ? "#000" : "#fff",
                position: "relative",}}
                >
              {plan.highlighted && (
                <Box sx={{ position: "absolute", top: 15, right: 15 }}>
                  <Chip label="Popular" size="small"
                    sx={{ backgroundColor: "#e0e0e0",fontWeight: "700",fontFamily: "Manrope",
                      fontSize: "14",
                      px: 0.5,
                    }}
                  />
                </Box>
              )}

              <Box sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight={600}
                  sx={{ mb: 1,fontWeight: "600", fontFamily: "Manrope" }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="body2"
                  color={
                    plan.highlighted
                      ? "text.secondary"
                      : "rgba(255,255,255,0.7)"
                  }
                  sx={{ mb: 4 ,fontWeight: "400", fontFamily: "Manrope" ,fontSize: "15px" }}
                >
                  {plan.description}
                </Typography>

                <Typography
                  variant="h3"
                  component="p"
                  fontWeight={700}
                  sx={{ mb: 0.5,fontSize: "2.5rem",fontFamily: "Manrope",letterSpacing: "-0.5px" }}>
                  {plan.price}
                  <Typography
                    component="span"
                    sx={{
                        fontSize: "33px", // كبرناها شوية
                        fontWeight: 500,
                        fontFamily: "Manrope",
                        ml: 1,
                        color: plan.highlighted ? "#000" : "#fff", // أسود في النص، أبيض على الجوانب
                      }}
                  >
                    {plan.period}
                  </Typography>
                </Typography>

                <Typography
                  variant="body2"
                  color={
                    plan.highlighted
                      ? "text.secondary"
                      : "rgba(255,255,255,0.7)"
                  }
                  sx={{ mb: 3 ,fontWeight: "500", fontFamily: "Manrope" ,fontSize: "17px" }}
                >
                  {plan.sessions}
                </Typography>

                <Button
                  variant={plan.highlighted ? "contained" : "outlined"}
                  fullWidth
                  sx={{
                    py: 1.5,
                    mb: 3,
                    backgroundColor: plan.highlighted ? "#000" :  "#fff",
                    color: plan.highlighted ? "#fff" :  "#000",
                    borderColor: plan.highlighted ? "#000" : "#000",
                    textTransform: "none",
                    borderRadius: "6px",
                    fontWeight: 600,
                    fontFamily: "Manrope",
                    "&:hover": {
                      backgroundColor: plan.highlighted
                        ? "#333"
                        : "#f1f1f1",
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>

                <List disablePadding sx={{ mt: 1 }}>
                  {plan.features.map((feature, idx) => (
                    <ListItem key={idx} disableGutters sx={{ py: 0.8 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleOutlineIcon
                          fontSize="small"
                          sx={{ color: plan.highlighted ? "#000" : "#fff" }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        sx={{
                          "& .MuiListItemText-primary": {
                            fontSize: "18px",
                            fontWeight: 400,
                            fontFamily: "Manrope",
                            color: plan.highlighted ? "text.primary" : "white",
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PricingSection;