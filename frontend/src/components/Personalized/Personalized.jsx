import React from "react";
import { Typography, Paper, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStairs } from "@fortawesome/free-solid-svg-icons";
import styles from "./Personalized.module.css";

const Personalized = () => {
  return (
    <div className={`${styles.container} container`}>
      
      <Paper elevation={1} className={styles.paperStyle}>
          <FontAwesomeIcon icon={faStairs} style={{ color: "#000" }} />
          <Typography fontSize={15} fontWeight={500}>
            Who Are We
          </Typography>
        </Paper>
      <div className="row align-items-start mb-5">
        
        <div className="col-12 col-md-6">
         
          <Typography className={styles.headingText}>
            Personalized Mental
            <br />
            Health Support
          </Typography>
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <Typography variant="body1" className={styles.description}>
            Wellthy is a dedicated mental health platform providing personalized
            support through a variety of professional counseling services. We
            believe in fostering emotional resilience and mental well-being for
            individuals of all ages. With a team of licensed therapists and
            counselors, we aim to provide accessible mental health care tailored
            to your unique needs.
          </Typography>
        </div>
      </div>
      <div className={styles.statsContainer}>
        {[
          { number: "1000+", label: "Clients helped globally" },
          { number: "200+", label: "Licensed professionals" },
          { number: "95%", label: "Client satisfaction rate" },
          { number: "15+", label: "Years of experience" },
        ].map((item, index) => (
          <div key={index} className={styles.statBox}>
            <Typography className={styles.statNumber}>{item.number}</Typography>
            <Typography color="text.secondary">{item.label}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personalized;
