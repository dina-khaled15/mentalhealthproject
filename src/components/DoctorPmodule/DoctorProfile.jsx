import React from "react";
import styles from "./DoctorProfile.module.css";
import { useNavigate } from "react-router-dom"; 
import {Phone,Email,LinkedIn,Facebook,Twitter,Instagram,School,Work,Assignment} from "@mui/icons-material";

const iconMap = {
  LinkedIn: <LinkedIn fontSize="large" />,
  Twitter: <Twitter fontSize="large" />,
  Facebook: <Facebook fontSize="large" />,
  Instagram: <Instagram fontSize="large" />,
};

export default function DoctorProfile({ doctor }) {
  const navigate = useNavigate();
  
 
  const handleBookingClick = () => {
    navigate('/booking');
  };

  return (
    <div className={styles.profileContainer}>
   
      <div className={styles.leftSection}>
        <div className={styles.avatarContainer}>
          <img src={doctor.avatar} alt="Doctor" className={styles.avatar}/>
        </div>
        
        <h3 className={styles.sectionTitle}>Expertise</h3>
        <div className={styles.expertiseContainer}>
          {doctor.expertise.map((item, i) => (
            <span key={i} className={styles.chip}>
              {item}
            </span>
          ))}
        </div>
        
        <h3 className={styles.sectionTitle}>Contact</h3>
        <div className={styles.contactContainer}>
          <div className={styles.contactItem}>
            <Phone fontSize="small" />
            <span>{doctor.contact.phone}</span>
          </div>
          <div className={styles.contactItem}>
            <Email fontSize="small" />
            <span>{doctor.contact.email}</span>
          </div>
        </div>
        
        <h3 className={styles.sectionTitle}>Social Media</h3>
        <div className={styles.socialMediaContainer}>
          {doctor.socialMedia.map((platform, i) => (
            <span key={i} className={styles.socialIcon}>
              {iconMap[platform]}
            </span>
          ))}
        </div>
        
       
        <button className={styles.bookingButton} onClick={handleBookingClick} >
          Book an Appointment
        </button>
      </div>

   
      <div className={styles.rightSection}>
        <h1 className={styles.doctorName}>{doctor.name}</h1>
        <h2 className={styles.doctorTitle}>{doctor.title}</h2>
        <p className={styles.doctorDescription}>{doctor.description}</p>
        
        <div className={styles.divider}></div>
        <h3 className={styles.categoryTitle}>
          <School className={styles.categoryIcon} fontSize="small" /> Education
        </h3>
        {doctor.education.map((edu, i) => (
          <p key={i} className={styles.detailItem}>
            <strong>{edu.year}:</strong> {edu.degree} – {edu.school}
          </p>
        ))}
        
        <div className={styles.divider}></div>
        <h3 className={styles.categoryTitle}>
          <Work className={styles.categoryIcon} fontSize="small" /> Experiences
        </h3>
        {doctor.experience.map((exp, i) => (
          <p key={i} className={styles.detailItem}>
            <strong>{exp.year}:</strong> {exp.role} – {exp.place}
          </p>
        ))}
        
        <div className={styles.divider}></div>
        <h3 className={styles.categoryTitle}>
          <Assignment className={styles.categoryIcon} fontSize="small" /> Certificates
        </h3>
        <ul className={styles.certificatesList}>
          {doctor.certificates.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}