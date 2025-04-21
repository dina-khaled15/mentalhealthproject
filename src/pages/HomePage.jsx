import React from "react";
import { Box } from "@mui/material";
import DocCard from "../components/DocCard";
import NavBar from "../components/navmodule/Navbar";
import AboutSection from "../components/AboutSection";
import Card from "../components/Card";
import Title from "../components/Title";
import Hero from "../components/Hero";
import Benefit from "../components/Benefit/Benefit";
import FooterComponent from "../components/footer/contact";
import Titlee from "../components/Titlee";
// import Schedule from "../components/Schedule";
import Schedule from "../components/Schedule/Schedule";
export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutSection />
      {/* <Areas/>   */}
      <div className="container mb-5">
        <Benefit />
        <Title />
        <div className="d-flex justify-content-center gap-4 mb-4">
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
        </div>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
        </div>
        <div className="d-flex justify-content-center gap-4 mb-4">
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
          <Card
            name="Ali Omar"
            des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs."
            img="/doc.jpg"
          />
        </div>

        <Titlee />
        <div className="row gap-4 justify-content-center mb-5">
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
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
