// src/pages/DoctorPage.jsx
import React from 'react';
import Navbar from '../nav/navBar';
import DoctorProfile from '../DoctorProfile/DoctorProfile';
import { Toolbar } from '@mui/material';
import doctorData from '../data/doctorData';
import Feedback from '../feedback/feedback';
import SessionBookingSection from '../Booking/BookingSection';
import RelatedDoctors from '../RelatedDoctor/RelatedDoctors';
import ScheduleOverview from '../Schedule/ScheduleOverview';
import Footer from '../footer/contact';

function DoctorPage() {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <DoctorProfile doctor={doctorData} />
      <Feedback />
      <ScheduleOverview />
      <SessionBookingSection />
      <RelatedDoctors />
      <Footer variant="dark" />
    </div>
  );
}

export default DoctorPage;
