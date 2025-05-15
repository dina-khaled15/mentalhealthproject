import {
  Box,
  IconButton,
  Stack,
  Toolbar,
  styled,
  useTheme,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
// @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor:
    theme.palette.mode === "light" ? "#F4F2ED" : "#121212", // Dark: أسود أنيق
  color: theme.palette.mode === "light" ? "#000" : "#E0E0E0", // Dark: رمادي فاتح
  transition: theme.transitions.create(
    ["width", "margin", "background-color", "color"],
    {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }
  ),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();

  const toggleMode = () => {
    const newMode = theme.palette.mode === "light" ? "dark" : "light";
    localStorage.setItem("currentMode", newMode);
    setMode(newMode);
  };

  return (
    <AppBar position="fixed" 
// @ts-ignore
    open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
            "&:hover": { color: "#FFD700" },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* ممكن تحطي هنا عنوان أو لوجو */}
        <Typography
          variant="h6"
          noWrap
          sx={{
            color: theme.palette.mode === "dark" ? "#000" : "#000",
            fontWeight: 600,
          }}
        >
          Mental Health Dashboard
        </Typography>

        <Box flexGrow={1} />

        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={toggleMode}
            color="inherit"
            sx={{ "&:hover": { color: "#FFD700" } }}
          >
            {theme.palette.mode === "light" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>

          <IconButton
            color="inherit"
            sx={{ "&:hover": { color: "#FFD700" } }}
          >
            <NotificationsOutlinedIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{ "&:hover": { color: "#FFD700" } }}
          >
            <SettingsOutlinedIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{ "&:hover": { color: "#FFD700" } }}
          >
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
