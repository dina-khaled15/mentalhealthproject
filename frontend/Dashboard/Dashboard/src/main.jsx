import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // نستخدم هذه المكتبات هنا
import App from "./App"; // استيراد ملف App
import Dashboard from "./page/Dashboard/Dashboard";
import Counselling from "./page/Counselling/Counselling";

import Doctors from "./page/Doctors/Doctors";
import Patients from "./page/Patients/Patients";
import Form from "./page/Form/Form";
import Calendar from "./page/Calendar/Calendar";5
import PieChart from "./page/PieChart/PieChart";

import NotFound from "./page/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "Counselling", element: <Counselling /> },

      { path: "Doctors", element: <Doctors /> },
      { path: "Patients", element: <Patients /> },
      { path: "form", element: <Form /> },
      { path: "calendar", element: <Calendar /> },
      { path: "pie", element: <PieChart /> },
      // { path: "line", element: <LineChart /> },
    
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* استخدام RouterProvider هنا فقط */}
  </React.StrictMode>
);
