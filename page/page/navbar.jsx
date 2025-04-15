import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="span"
              dangerouslySetInnerHTML={{
                __html: `
                  <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.02184C8.14076 -1.12007 16.4818 3.52592 18.6301 11.3989L22.6615 26.1723C23.7357 30.1088 21.3068 34.1681 17.2364 35.2391C13.166 36.31 8.9955 33.987 7.92132 30.0505L0 1.02184Z" fill="#222222" />
                    <path d="M19.0764 1.02184C27.2176 -1.11826 35.5605 3.52879 37.7107 11.4013L41.7454 26.1738C42.8205 30.11 40.3921 34.1685 36.3215 35.2385C32.2509 36.3086 28.0795 33.985 27.0044 30.0488L19.0764 1.02184Z" fill="#222222" />
                  </svg>
                `,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              wellthy
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 4, color: "#6C6C6C" }}>
            <Button sx={{ color: "#222222", fontWeight: "bold" }}>Home</Button>
            <Button color="inherit">About us</Button>
            <Link
              to="/doctor"
              style={{ textDecoration: "none", color: "#6C6C6C" }}
            >
              <Button color="inherit">Doctors</Button>
            </Link>
            <Button color="inherit">Contact us</Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                borderColor: "black",
                color: "black",
              }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Log in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
