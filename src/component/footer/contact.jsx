import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  InputBase,
  IconButton,
  Paper,
} from "@mui/material";
import Types from "./Logo";

export default function FooterComponent({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <Box
      sx={{
        backgroundColor: isDark ? "#222222" : "#ffffff",
        color: isDark ? "#ffffff" : "#000000",
        py: 2,
        borderTop: isDark ? "none" : "1px solid #e0e0e0",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        {/* التلات أعمدة */}
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          sx={{ mt: 4 }}
        >
          {/* Contact Us */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contact us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              123 Wellness Way, Mindville, ST 98765
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              support@wellthymentalhealth.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              (123) 456-7890
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick link
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                {["Home", "Testimonial", "FAQ"].map((text, i) => (
                  <Link
                    key={i}
                    href="#"
                    underline="none"
                    sx={{
                      color: isDark ? "#fff" : "#000",
                      opacity: 0.8,
                      fontSize: "14px",
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Grid>
              <Grid item xs={6}>
                {["About Us", "Service", "Session"].map((text, i) => (
                  <Link
                    key={i}
                    href="#"
                    underline="none"
                    sx={{
                      color: isDark ? "#fff" : "#000",
                      opacity: 0.8,
                      fontSize: "14px",
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Grid>

          {/* Stay Connected */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Stay Connected
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: isDark ? "#fff" : "#000",
                opacity: 0.8,
                fontSize: "14px",
                maxWidth: "300px",
              }}
            >
              Subscribe to our newsletter for the latest updates, mental health
              tips, and resources.
            </Typography>
            <Box component="form" noValidate sx={{ mb: 2 }}>
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  padding: "2px 16px",
                  backgroundColor: "#fff",
                }}
              >
                <InputBase
                  sx={{ flex: 1, fontSize: "14px" }}
                  placeholder="Type your email"
                  inputProps={{ "aria-label": "email input" }}
                />
                <IconButton
                  type="submit"
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "8px",
                    px: 3,
                    py: 1,
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                  aria-label="subscribe"
                >
                  Subscribe
                </IconButton>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* اللوجو بعد التلات أعمدة */}
        <Box mt={6} display="flex" justifyContent="center">
          <Types variant={isDark ? "dark" : "light"} />
        </Box>

        {/* Bottom Links */}
        <Box
          mt={6}
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
        >
          <Box display="flex" gap={3}>
            {["Contact", "Privacy policy", "Sitemap", "Terms of Use"].map(
              (item, i) => (
                <Link
                  key={i}
                  href="#"
                  underline="hover"
                  sx={{
                    color: isDark ? "#ffffff" : "#000000",
                    fontSize: "14px",
                    opacity: 0.8,
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Box>
          <Typography
            variant="caption"
            sx={{
              opacity: 0.6,
              fontSize: "14px",
              textAlign: "right",
            }}
          >
            © 2024 Wellthy Mental Health. All rights reserved | by Pieterux Co
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
