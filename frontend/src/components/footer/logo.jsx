import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Types({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "48px",
            sm: "72px",
            md: "100px",
            lg: "140px",
            xl: "180px",
          },
          fontWeight: "bold",
          lineHeight: 1.1,
          fontFamily: "Manrope",
          letterSpacing: {
            xs: "10px",
            sm: "20px",
            md: "40px",
            lg: "60px",
            xl: "80px",
          },
          color: isDark ? "#ffffff" : "#000000",
          textAlign: "center",
          mb: 4,
        }}
      >
        WELTHY
      </Typography>
    </Box>
  );
}
