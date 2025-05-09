import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
<<<<<<< HEAD
import Feedback from "../components/FeedBack/Feedback";
=======
import Feedback from "../components/FeedBack/FeedBack";
>>>>>>> ecb0efb2c3774c9ed7715f58a9916dcd1bed59dc
import WeeklySchedule from "../components/SehdualOverVeiw";
import FooterComponent from "../components/footer/contact";
import styles from "../components/DoctorProfile/DoctorProfile.module.css";
import DoctorProfile from "../components/DoctorProfile/DoctorProfile";
import RelatedDoctors from "../components/Releteddoctors/RelatedDoctors";

export default function DoctorPage() {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (doctorId) {
      axios.get(`http://localhost:4000/doctor/${doctorId}`)
        .then((res) => setDoctor(res.data))
        .catch((err) => console.error(err));
    }
  }, [doctorId]);

  if (!doctor) return <div>Loading...</div>;

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