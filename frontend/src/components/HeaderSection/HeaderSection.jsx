import React from "react";
import styles from "./HeaderSection.module.css";

const HeaderSection = ({ issueData }) => (
  <div className="container-fluid px-3 px-md-4">
    <div className={`row ${styles.wrapper}`}>
      <div className={`col-12 col-lg-6 ${styles.textContainer}`}>
        <h1 className={`${styles.title}`}>
          {issueData.title}
        </h1>
        <p className={`${styles.description} text-muted`}>
          {issueData.description}
        </p>
      </div>

      <div className={`col-12 col-lg-5 ${styles.imageContainer}`}>
        <img
          src={issueData.mainImage}
          alt={issueData.title}
          className={`img-fluid rounded-2 ${styles.mainImage}`}
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default HeaderSection;
