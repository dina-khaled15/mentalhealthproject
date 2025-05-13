import React, { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import Benefit from "../components/Benefit/Benefit";
import Titlee from "../components/Titlee";
import DocCard from "../components/DocCard";
import Schedule from "../components/Schedule";
import FeedBack from "../components/FeedBack/FeedBack";

import QA from "../components/QA/QA";

import Box from "@mui/material/Box";
import Navbar from "../components/Navbar/Navbar";
import FooterComponent from "../components/footer/contact";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/doctor")
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Benefit />
      <Titlee />
      <div className="row gap-4 justify-content-center mb-5">
        {doctors.slice(0, 4).map((doc) => (
          <DocCard
            key={doc._id}
            name={doc.name}
            des={doc.address}
            img={doc.avatar} 
          />
        ))}
      </div>
      <div className="mt-5">
        <Schedule />
        <FeedBack />
        <QA />
      </div>
      <Box sx={{ mt: 4, width: "100%" }}>
        <FooterComponent variant="dark" />
      </Box>
    </div>
  );
}
