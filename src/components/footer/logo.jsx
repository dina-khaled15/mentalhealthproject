import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Types({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <Box sx={{display: "flex",justifyContent: "center",alignItems: "center",minHeight: "90px"}}>
      <Typography variant="h1"
        sx={{fontSize: "180px",fontWeight: "bold",lineHeight: "128px",fontFamily: "Manrope",letterSpacing: "80px",
          color: isDark ? "white" : "black",
          textAlign: "center",position: "relative",top: "5px",mb: 4,mr: -8,}}>
        WELTHY
      </Typography>
    </Box>
  );
}
