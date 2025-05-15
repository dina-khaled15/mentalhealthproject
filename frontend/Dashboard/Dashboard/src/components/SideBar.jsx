import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, styled, useTheme, Typography, Tooltip } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import {HomeOutlined,PeopleOutlined,ContactsOutlined,ReceiptOutlined,PersonOutlined,
  CalendarTodayOutlined,PieChartOutlineOutlined,MapOutlined} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
// @ts-ignore
})(({ theme, open }) => ({ width: drawerWidth,flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#F4F2ED",
      color: "#000",
      fontFamily: "Manrope",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#F4F2ED",
      color: "#000",
      fontFamily: "Manrope",
    },
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
  { text: "Counselling", icon: <PeopleOutlined />, path: "/Counselling" },
  { text: "Doctors", icon: <ContactsOutlined />, path: "/Doctors" },
  { text: "Patients", icon: <ReceiptOutlined />, path: "/Patients" },
];

const Array2 = [
  { text: "Form", icon: <PersonOutlined />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
];

const Array3 = [
  { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
];

const SideBar = ({ open, handleDrawerClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  
  return (
  <Drawer variant="permanent" open={open}>
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar sx={{mx: "auto",my: 1,border: "2px solid grey", transition: "0.25s",
      width: open ? 88 : 44,
      height: open ? 88 : 44}}
        alt="Layla Ali"/>
        <Typography align="center" sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}>
        Layla Ali
      </Typography>
      <Typography align="center" sx={{ transition: "0.25s",color: "#000",
          fontSize: open ? 15 : 0,}}>
        Admin
      </Typography>
      <Divider />
      {[Array1, Array2, Array3].map((array, i) => (
        <List key={i}>
          {array.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton onClick={() => navigate(item.path)}
              sx={{minHeight: 48, px: 2.5,
                justifyContent: open ? "initial" : "center",
                bgcolor:location.pathname === item.path
                ? theme.palette.mode === "dark"
                ? grey[800]
                : grey[300]
                : "transparent",
                boxShadow: location.pathname === item.path ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                borderRadius: "8px",
                "&:hover": {backgroundColor: grey[200],
                },
                transition: "background-color 0.2s ease, box-shadow 0.2s ease",}}>
                  <ListItemIcon sx={{minWidth: 0,color: "#000",
                  mr: open ? 3 : "auto",justifyContent: "center",}}>
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                    </Tooltip>
                    </ListItem>
                  ))}
                  </List>
                ))}
                </Drawer>
                );
              };

export default SideBar;
