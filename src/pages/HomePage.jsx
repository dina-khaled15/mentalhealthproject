import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/navmodule/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import DocCard from "../components/DocCard";
import Benefit from "../components/Benefit/Benefit";
import Title from "../components/Title";
import Card from "../components/Card/Card";
import Titlee from "../components/Titlee";
import FooterComponent from "../components/footer/contact";
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
      <div style={{ backgroundColor: "#222222" }}>
      <div className="container" style={{ backgroundColor: "#222222" }}>
      <AboutSection />
      </div>
      </div>
      
    
      <div className="container mb-5">
        
        <Title />
        <div className="d-flex justify-content-center gap-4 mb-4">
          <Card name="Individual Therapy" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img={dd1} />
          <Card name="Group Therapy" des="Supportive group sessions where individuals can share experiences and learn from one another in a safe environment." img={dd2} />
          <Card name="Online Counseling" des="Convenient and confidential virtual therapy sessions that you can attend from the comfort of your home." img={dd3} />
        </div>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <Card name="Cognitive Behavioral Therapy" des="Structured therapy aimed at identifying and changing negative thought patterns to improve mental health." img={dd4} />
          <Card name="Mindfulness and Meditation" des="Techniques and practices to help you stay present, reduce stress, and enhance emotional regulation." img={dd5} />
          <Card name="Family Counseling" des="Counseling sessions are designed to improve communication and resolve conflicts within family units." img={dd6} />
        </div>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <Card name="Medication Support" des="Helps patients manage their medications through education, and monitoring to ensure proper use and improve health outcomes." img={dd7} />
          <Card name="Psychiatric Consultations" des="Professional consultations to assess, diagnose, and provide medication management for various mental health conditions." img={dd8} />
          <Card name="Crisis Intervention" des="Immediate and effective support for mental health emergencies ensures safety and quick access to care." img={dd9} />
        </div>
        <Benefit />
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