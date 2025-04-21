import React from "react";
import styles from "./PsychologyBanner.module.css";

const PsychologyBanner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.textBox}>
        {/* Wrap the text inside the inner box */}
        <span className={styles.innerBox}>
          <h1 className={styles.bannerText}>
            Exploring various psychological concepts, theories, and research findings in an accessible way.
          </h1>
        </span>
      </div>
    </div>
  );
};

export default PsychologyBanner;