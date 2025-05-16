import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import App from "./App"; 
import Dashboard from "./page/Dashboard/Dashboard";
import Counselling from "./page/Counselling/Counselling";

import Doctors from "./page/Doctors/Doctors";
import Patients from "./page/Patients/Patients";
import Form from "./page/Form/Form";
import Calendar from "./page/Calendar/Calendar";
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
    
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);