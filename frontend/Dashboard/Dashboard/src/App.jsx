import React from "react";
import { ThemeProvider, createTheme, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./theme";
import { Routes, Route } from "react-router-dom"; // هذه هي الطريقة الصحيحة لاستخدام الـ Routes هنا
import Dashboard from "./page/Dashboard/Dashboard";
import Counselling from "./page/Counselling/Counselling";
import Doctors from "./page/Doctors/Doctors";
import Patients from "./page/Patients/Patients";
import Form from "./page/Form/Form";
import Calendar from "./page/Calendar/Calendar";
import PieChart from "./page/PieChart/PieChart";
import NotFound from "./page/NotFound/NotFound";
import AddDoctorForm from"./page/Form/Form";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(localStorage.getItem("currentMode") || "light");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="Counselling" element={<Counselling />} />
            <Route path="Doctors" element={<Doctors />} />
            <Route path="Patients" element={<Patients />} />
            <Route path="form" element={<Form />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="pie" element={<PieChart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/add-doctor" element={<AddDoctorForm />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}




