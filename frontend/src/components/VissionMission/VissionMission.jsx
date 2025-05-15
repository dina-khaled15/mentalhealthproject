import React from "react";
import { Button, Avatar } from "@mui/material";
import { Business, Visibility, Groups } from "@mui/icons-material";
import styles from "./VisionMission.module.css";

const VisionMission = () => {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="text-center mb-4">
        <Button
          variant="outlined"
          className={styles.button}
          startIcon={<Business />}
        >
          Vision & Mission
        </Button>
        <h3 className={styles.heading}>
          Empowering Global Mental Well-Being <br /> Through Accessible Care
        </h3>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="http://res.cloudinary.com/defus4mj2/image/upload/v1747316659/na55mf26c7lv46dwvwrm.png"
            alt="online therapy"
            className={styles.image}
          />
        </div>

        <div className="col-md-6">
          <Avatar className={styles.avatar}>
            <Visibility />
          </Avatar>
          <h4 className={styles.sectionTitle}>Our Vision</h4>
          <p className={styles.paragraph}>
            To be the leading mental health platform, providing accessible,
            compassionate, and innovative care for emotional and mental
            well-being worldwide.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="d-flex align-items-start mb-3">
            <Avatar className={styles.avatarWithMargin}>
              <Groups />
            </Avatar>
            <div>
              <h4 className={styles.sectionTitle}>Our Mission</h4>
            </div>
          </div>
          <p className={styles.paragraph}>
            To support individuals in achieving mental and emotional balance
            through tailored therapy, education, ensuring everyone has access to
            professional care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
