import { Box, Typography } from "@mui/material";

const Header = ({ title, subTitle, isDashboard = false }) => {
  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontFamily: "Manrope",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#000",
          fontSize: "18px",
          fontFamily: "Manrope",
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
