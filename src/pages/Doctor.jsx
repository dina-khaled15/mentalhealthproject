import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  Phone,
  Email,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
  School,
  Work,
  Assignment,
  ArrowBack,
} from "@mui/icons-material";

import Navbar from "../components/navbar";
import FooterComponent from "../components/footer/contact";
import Feedback from "../components/feedback";
import WeeklySchedule from "../components/SehdualOverVeiw";
import SessionBookingSection from "../components/SessionBookingSection";
import RelatedDoctors from "../components/RelatedDoctors";

// This would ideally come from an API or context
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Thompson",
    title: "Anxiety Disorders / Cognitive Therapy",
    image: "/images/d2.png",
    role: "Psychiatrist",
    bio: "Dr. Sarah Thompson specializes in anxiety disorders and cognitive therapy with over 15 years of experience helping patients overcome anxiety, panic disorders, and phobias. Her approach combines evidence-based techniques with compassionate care.",
    phone: "(123) 456-7890",
    email: "sarah.thompson@wellthy.com",
    education: [
      "2005 - 2009: Doctor of Psychiatry - Harvard Medical School",
      "2001 - 2005: Bachelor of Psychology - Yale University",
    ],
    experience: [
      "2014 - Present: Senior Psychiatrist – Wellthy",
      "2009 - 2014: Clinical Psychiatrist – Anxiety Treatment Center",
    ],
    certificates: [
      "Board Certified in Psychiatry",
      "Certified in Cognitive Behavioral Therapy",
      "Anxiety and Depression Association of America Member",
    ],
    expertise: [
      "Anxiety Disorders",
      "Cognitive Therapy",
      "Panic Disorders",
      "Phobias",
      "Stress Management",
    ],
  },
  {
    id: 2,
    name: "John Ramirez, LCSW",
    title: "Family Counseling / Stress Management",
    image: "/images/d1.png",
    role: "Licensed Clinical Social Worker",
    bio: "A Licensed Clinical Social Worker (LCSW) with over 12 years of experience in providing compassionate counseling and therapy for individuals and families. He specializes in trauma recovery, family dynamics, and supporting individuals through life transitions. John's approach is rooted in empathy, with a focus on fostering healing and resilience.",
    phone: "(123) 456-7890",
    email: "john.ramirez@wellthy.com",
    education: [
      "2011 - 2013: Master of Social Work (MSW) – University of Southern California",
      "2006 - 2010: Bachelor of Psychology – California State University",
    ],
    experience: [
      "2015 - Present: Senior Therapist – Wellthy",
      "2012 - 2015: Clinical Social Worker – Hope Counseling Center",
      "2010 - 2012: Licensed Social Worker – Community Health Clinic",
    ],
    certificates: [
      "Licensed Clinical Social Worker (LCSW) Certification",
      "Certified in Trauma-Focused Cognitive Behavioral Therapy",
      "Certified Family Therapist",
    ],
    expertise: [
      "Family Counseling",
      "Trauma Recovery",
      "PTSD",
      "Grief and Loss Therapy",
      "Conflict Resolution",
    ],
  },
  {
    id: 3,
    name: "Emily Chen, PsyD",
    title: "Grief Recovery / PTSD",
    image: "/images/d4.png",
    role: "Clinical Psychologist",
    bio: "A Licensed Clinical Social Worker (LCSW) with over 12 years of experience in providing compassionate counseling and therapy for individuals and families. He specializes in trauma recovery, family dynamics, and supporting individuals through life transitions. John's approach is rooted in empathy, with a focus on fostering healing and resilience.",
    phone: "(123) 456-7890",
    email: "john.ramirez@wellthy.com",
    education: [
      "2011 - 2013: Master of Social Work (MSW) – University of Southern California",
      "2006 - 2010: Bachelor of Psychology – California State University",
    ],
    experience: [
      "2015 - Present: Senior Therapist – Wellthy",
      "2012 - 2015: Clinical Social Worker – Hope Counseling Center",
      "2010 - 2012: Licensed Social Worker – Community Health Clinic",
    ],
    certificates: [
      "Licensed Clinical Social Worker (LCSW) Certification",
      "Certified in Trauma-Focused Cognitive Behavioral Therapy",
      "Certified Family Therapist",
    ],
    expertise: [
      "Family Counseling",
      "Trauma Recovery",
      "PTSD",
      "Grief and Loss Therapy",
      "Conflict Resolution",
    ],
  },
  {
    id: 4,
    name: "Dr. Liam Carter",
    title: "Child & Adolescent Therapy",
    image: "/images/d6.png",
    role: "Child Psychologist",
    bio: "A Licensed Clinical Social Worker (LCSW) with over 12 years of experience in providing compassionate counseling and therapy for individuals and families. He specializes in trauma recovery, family dynamics, and supporting individuals through life transitions. John's approach is rooted in empathy, with a focus on fostering healing and resilience.",
    phone: "(123) 456-7890",
    email: "john.ramirez@wellthy.com",
    education: [
      "2011 - 2013: Master of Social Work (MSW) – University of Southern California",
      "2006 - 2010: Bachelor of Psychology – California State University",
    ],
    experience: [
      "2015 - Present: Senior Therapist – Wellthy",
      "2012 - 2015: Clinical Social Worker – Hope Counseling Center",
      "2010 - 2012: Licensed Social Worker – Community Health Clinic",
    ],
    certificates: [
      "Licensed Clinical Social Worker (LCSW) Certification",
      "Certified in Trauma-Focused Cognitive Behavioral Therapy",
      "Certified Family Therapist",
    ],
    expertise: [
      "Family Counseling",
      "Trauma Recovery",
      "PTSD",
      "Grief and Loss Therapy",
      "Conflict Resolution",
    ],
  },
  {
    id: 5,
    name: "Dr. Sophia Hughes",
    title: "Mindfulness & Trauma Therapy",
    image: "/images/d5.png",
    role: "Trauma Specialist",
    bio: "A Licensed Clinical Social Worker (LCSW) with over 12 years of experience in providing compassionate counseling and therapy for individuals and families. He specializes in trauma recovery, family dynamics, and supporting individuals through life transitions. John's approach is rooted in empathy, with a focus on fostering healing and resilience.",
    phone: "(123) 456-7890",
    email: "john.ramirez@wellthy.com",
    education: [
      "2011 - 2013: Master of Social Work (MSW) – University of Southern California",
      "2006 - 2010: Bachelor of Psychology – California State University",
    ],
    experience: [
      "2015 - Present: Senior Therapist – Wellthy",
      "2012 - 2015: Clinical Social Worker – Hope Counseling Center",
      "2010 - 2012: Licensed Social Worker – Community Health Clinic",
    ],
    certificates: [
      "Licensed Clinical Social Worker (LCSW) Certification",
      "Certified in Trauma-Focused Cognitive Behavioral Therapy",
      "Certified Family Therapist",
    ],
    expertise: [
      "Family Counseling",
      "Trauma Recovery",
      "PTSD",
      "Grief and Loss Therapy",
      "Conflict Resolution",
    ],
  },
  {
    id: 6,
    name: "Dr. Marcus Lee",
    title: "Cognitive Behavioral Therapy (CBT)",
    image: "/images/d7.png",
    role: "CBT Specialist",
    bio: "A Licensed Clinical Social Worker (LCSW) with over 12 years of experience in providing compassionate counseling and therapy for individuals and families. He specializes in trauma recovery, family dynamics, and supporting individuals through life transitions. John's approach is rooted in empathy, with a focus on fostering healing and resilience.",
    phone: "(123) 456-7890",
    email: "john.ramirez@wellthy.com",
    education: [
      "2011 - 2013: Master of Social Work (MSW) – University of Southern California",
      "2006 - 2010: Bachelor of Psychology – California State University",
    ],
    experience: [
      "2015 - Present: Senior Therapist – Wellthy",
      "2012 - 2015: Clinical Social Worker – Hope Counseling Center",
      "2010 - 2012: Licensed Social Worker – Community Health Clinic",
    ],
    certificates: [
      "Licensed Clinical Social Worker (LCSW) Certification",
      "Certified in Trauma-Focused Cognitive Behavioral Therapy",
      "Certified Family Therapist",
    ],
    expertise: [
      "Family Counseling",
      "Trauma Recovery",
      "PTSD",
      "Grief and Loss Therapy",
      "Conflict Resolution",
    ],
  },
];

export default function DoctorDetails() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const selectedDoctor =
      doctorsData.find((doc) => doc.id === parseInt(doctorId)) ||
      doctorsData[0];
    setDoctor(selectedDoctor);
  }, [doctorId]);

  if (!doctor) {
    return (
      <Box sx={{ margin: "auto", width: "1400px", overflow: "hidden" }}>
        <Box sx={{ bgcolor: "#fff" }}>
          <Typography
            sx={{
              p: 5,
              textAlign: "center",
              color: "gray",
              fontFamily: "Manrope",
            }}
          >
            Loading...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        fontFamily: "Manrope",
      }}
    >
      {/* Navbar */}
      <Navbar />
      {/* Back Button */}
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate("/doctors")}
        sx={{
          mb: 3,
          color: "black",
          fontFamily: "Manrope",
          textTransform: "none",
        }}
      >
        Back to Doctors
      </Button>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
          px: { xs: 2, md: 10 },
          py: 5,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Avatar
            src={doctor.image}
            alt={doctor.name}
            sx={{ width: 250, height: 300, mx: "auto", mb: 3 }}
          />
          <Typography variant="h6" fontWeight="600" mb={1} fontFamily="Manrope">
            Expertise
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            justifyContent="center"
            mb={3}
          >
            {doctor.expertise.map((item, i) => (
              <Chip
                key={i}
                label={item}
                variant="outlined"
                sx={{
                  fontFamily: "Manrope",
                  color: "black",
                  borderColor: "gray",
                }}
              />
            ))}
          </Stack>
          <Typography fontFamily="Manrope" variant="h6" fontWeight="600" mb={1}>
            Contact
          </Typography>
          <Stack alignItems="center" gap={1} mb={3}>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" />
              <Typography fontFamily="Manrope">{doctor.phone}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Email fontSize="small" />
              <Typography fontFamily="Manrope">{doctor.email}</Typography>
            </Box>
          </Stack>
          <Typography variant="h6" fontWeight="600" mb={1} fontFamily="Manrope">
            Social Media
          </Typography>
          <Stack direction="row" gap={2} justifyContent="center" color="gray">
            <LinkedIn fontSize="large" />
            <Twitter fontSize="large" />
            <Facebook fontSize="large" />
            <Instagram fontSize="large" />
          </Stack>
          <Box mt={4}>
            <Button
              variant="contained"
              disableElevation
              onClick={() => navigate(`/booking/${doctor.id}`)}
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                width: "80%",
                height: 46,
                fontFamily: "Manrope",
                fontSize: 14,
              }}
            >
              Book an Appointment
            </Button>
          </Box>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 2 }}>
          <Typography fontFamily="Manrope" variant="h4" fontWeight="bold">
            {doctor.name}
          </Typography>
          <Typography fontFamily="Manrope" variant="h6" color="gray" mb={2}>
            {doctor.role}
          </Typography>
          <Typography fontFamily="Manrope" mb={3}>
            {doctor.bio}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography
            variant="h6"
            fontWeight="600"
            gutterBottom
            fontFamily="Manrope"
          >
            <School sx={{ mr: 1 }} fontSize="small" />
            Education
          </Typography>
          {doctor.education.map((edu, index) => (
            <Typography
              fontFamily="Manrope"
              key={index}
              mb={index === doctor.education.length - 1 ? 2 : 0}
            >
              {edu}
            </Typography>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="h6"
            fontWeight="600"
            gutterBottom
            fontFamily="Manrope"
          >
            <Work sx={{ mr: 1 }} fontSize="small" />
            Experiences
          </Typography>
          {doctor.experience.map((exp, index) => (
            <Typography
              fontFamily="Manrope"
              key={index}
              mb={index === doctor.experience.length - 1 ? 2 : 0}
            >
              {exp}
            </Typography>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="h6"
            fontWeight="600"
            gutterBottom
            fontFamily="Manrope"
          >
            <Assignment sx={{ mr: 1 }} fontSize="small" />
            Certificates
          </Typography>
          <ul style={{ fontFamily: "Manrope", paddingLeft: "20px" }}>
            {doctor.certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </Box>
      </Box>
      <Feedback />
      <WeeklySchedule />
      <SessionBookingSection />
      <RelatedDoctors />
      <Box sx={{ pt: 4, maxWidth: "100%", mx: "auto", fontFamily: "Manrope" }}>
        <FooterComponent variant="dark" />
      </Box>
    </Box>
  );
}
