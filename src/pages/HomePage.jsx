import React from "react";
import { Box } from "@mui/material";
import DocCard from "../components/DocCard";
import Navbar from "../components/navmodule/Navbar";
import AboutSection from "../components/AboutSection";
import Card from "../components/Card";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Benefit from "../components/Benefit/Benefit";
import FooterComponent from "../components/footer/contact";
import Titlee from "../components/Titlee";
// import Schedule from "../components/Schedule";
import Schedule from "../components/Schedule/Schedule";
import Areas from "../components/Areas/Areas";
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutSection />
      <Areas/>   
      <div className="container mb-5">
        {/* <Benefit /> */}
        <Title />
        <div className="d-flex justify-content-center gap-4 mb-4">
        <Card name="Individual Therapy" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/images/dd1.png" />
        <Card name="Group Therapy" des="Supportive group sessions where individuals can share experiences and learn from one another in a safe environment." img="/images/dd2.png" />
        <Card name="Online Counseling" des="Convenient and confidential virtual therapy sessions that you can attend from the comfort of your home." img="/images/dd3.png" />
      </div>
      <div className="d-flex justify-content-center gap-4 mb-4">
        <Card name="Cognitive Behavioral Therapy" des="Structured therapy aimed at identifying and changing negative thought patterns to improve mental health." img="/images/dd4.png" />
        <Card name="Mindfulness and Meditation" des="Techniques and practices to help you stay present, reduce stress, and enhance emotional regulation." img="/images/dd5.png" />
        <Card name="Family Counseling" des="Counseling sessions are designed to improve communication and resolve conflicts within family units." img="/images/dd6.png" />
      </div>
      <div className="d-flex justify-content-center gap-4 mb-4">
        <Card name="Medication Support" des="Helps patients manage their medications through education, and monitoring to ensure proper use and improve health outcomes." img="/images/dd7.png" />
        <Card name="Psychiatric Consultations" des="Professional consultations to assess, diagnose, and provide medication management for various mental health conditions." img="/images/dd8.png" />
        <Card name="Crisis Intervention" des="Immediate and effective support for mental health emergencies ensures safety and quick access to care." img="/images/dd9.png" />
      </div>
      <Benefit/>
      <Titlee/>
      <div className='row gap-4 justify-content-center mb-5'>
        <DocCard name="Dr. Sarah Thompson" des="Anxiety, Depression, Grief Support, CBT Specialist" img="/images/d2.png"/>
        <DocCard name="John Ramirez, LCSW" des="Family Counseling, Trauma, Marriage and Relationship Issues" img="/images/d1.png"/>
        <DocCard name="Emily Chen, PsyD" des="Stress Management, Mindfulness, PTSD Specialist" img="/images/d4.png"/>
        <DocCard name="Michael Patel, PhD" des="Child Psychology, Behavioral Disorders, ADHD Specialist" img="/images/d5.png"/>
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