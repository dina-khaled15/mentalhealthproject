import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import DocCard from "../components/DocCard";
import Benefit from "../components/Benefit/Benefit";
import Title from "../components/Title";
import Card from "../components/Card/Card";
import Titlee from "../components/Titlee";
import FooterComponent from "../components/footer/contact";
import FAQHeader from "../components/QA/QA";
import Schedule from "../components/Schedule";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/doctor") 
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data.slice(0, 4));
      })
      .catch((err) => console.error("Failed to fetch doctors:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />

      <div style={{ backgroundColor: "#222222" }} className="mb-5">
        <div className="container" style={{ backgroundColor: "#222222" }}>
          <AboutSection />
        </div>
      </div>

      <div className="container mb-5 mt-5">
        <Title />
        <Card />
        <Benefit />
      </div>

      <div style={{ backgroundColor: "#111" }}>
        <div className="container">
          <FAQHeader />
        </div>
      </div>

      <div className="container">
        <Titlee />
        <div className="row gap-4 justify-content-center mb-5">
          {doctors.map((doc, index) => (
            <DocCard
              img={doc.avatar}
              key={index}
              name={doc.name}
            />
          ))}
        </div>
        <div className="mt-5">
          <Schedule />
        </div>
      </div>

      <Box sx={{ mt: 4, width: "100%" }}>
        <FooterComponent variant="dark" />
      </Box>
    </div>
  );
}
