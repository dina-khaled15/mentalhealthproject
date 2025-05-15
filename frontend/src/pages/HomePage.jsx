import React from "react";
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
import dd1 from "../images/dd1.png";
import dd2 from "../images/dd2.png";
import dd3 from "../images/dd3.png";
import dd4 from "../images/dd4.png";
import dd5 from "../images/dd5.png";
import dd6 from "../images/dd6.png";
import dd7 from "../images/dd7.png";
import dd8 from "../images/dd8.png";
import dd9 from "../images/dd9.png";
import d2 from "../images/d2.png";
import d1 from "../images/d1.png";
import d4 from "../images/d4.png";
import d5 from "../images/d5.png";
import Schedule from "../components/Schedule";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      
      <Hero />
      
      <div>
      </div>
      <div style={{ backgroundColor: "#222222" }} className="mb-5"> 
        <div className="container " style={{ backgroundColor: "#222222" }}>
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
        <div className='row gap-4 justify-content-center mb-5'>
          <DocCard name="Dr. Sarah Thompson" des="Anxiety, Depression, Grief Support, CBT Specialist" img={d2} />
          <DocCard name="John Ramirez, LCSW" des="Family Counseling, Trauma, Marriage and Relationship Issues" img={d1} />
          <DocCard name="Emily Chen, PsyD" des="Stress Management, Mindfulness, PTSD Specialist" img={d4} />
          <DocCard name="Michael Patel, PhD" des="Child Psychology, Behavioral Disorders, ADHD Specialist" img={d5} />
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