import React from "react";
import styles from "./WhatIsItSection.module.css";

const WhatIsItSection = ({ issueData }) => (
  <div className={`container ${styles.container}`}>
    <h2 className={`text-center mb-4 ${styles.title}`}>
      What is it?
    </h2>
    <div className={styles.content}>
      <p className={styles.description}>
        {issueData.whatIsIt}
      </p>
    </div>
  </div>
);

export default WhatIsItSection;