import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Avatar, Button, Chip, Stack, Divider } from "@mui/material";
import { Phone, Email, School, Work, Assignment } from "@mui/icons-material";
import Navbar from "../components/navmodule/Navbar";
import Feedback from "../components/FeedBack/FeedBack";
import WeeklySchedule from "../components/SehdualOverVeiw";
import FooterComponent from "../components/footer/contact";
import doctorData from "../components/data/doctorData";
import styles from "../components/DoctorProfile/DoctorProfile.module.css";
import Navbarstyles from "../components/navmodule/Navbar.module.css";
import DoctorProfile from "../components/DoctorProfile/DoctorProfile";
import RelatedDoctors from "../components/Releteddoctors/RelatedDoctors";


export default function DoctorPage() {
  const { doctorId } = useParams();
  const doctor = doctorId 
    ? doctorData.find(doc => doc.id === parseInt(doctorId))  : doctorData[0];

  useEffect(() => {
    window.scrollTo(0, 0);}, [doctorId]); 

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <DoctorProfile doctor={doctor} />
      <Feedback />
      <WeeklySchedule />
      <RelatedDoctors />
      <div className={styles.footerWrapper}>
        <FooterComponent variant="dark" />
      </div>
    </div>
  );
}
