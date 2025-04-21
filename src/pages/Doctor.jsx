import React from "react";
import Navbar from "../components/navmodule/Navbar";
import Navbarstyles from "../components/navmodule/Navbar.module.css";
import styles from "../components/DoctorPmodule/DoctorProfile.module.css";
import DoctorProfile from "../components/DoctorPmodule/DoctorProfile";
import Feedback from "../components/feedback/feedback";
import WeeklySchedule from "../components/SehdualOverVeiw";
import SessionBookingSection from "../components/SessionBookingSection";
import RelatedDoctors from "../components/Releteddoctormodule/RelatedDoctors";
import FooterComponent from "../components/footer/contact";
import doctorData from "../components/data/doctorData";


export default function DoctorPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar/>
      <DoctorProfile doctor={doctorData} />
      <Feedback/>
      <WeeklySchedule />
      <SessionBookingSection />
      <RelatedDoctors />
      <div className={styles.footerWrapper}>
        <FooterComponent variant="dark" />
      </div>
    </div>
  );
}