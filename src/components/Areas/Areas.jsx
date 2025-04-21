import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import styles from './Areas.module.css'; // ✅ تأكدتي إن اسم الملف مظبوط!

const Areas = () => {
  return (
    <div className={styles.container}>
      {/* Mental Issues button centered */}
      <div className={styles.mentalIssuesButtonContainer}>
        <button className={styles.mentalIssuesButton}>
          <FontAwesomeIcon icon={faBrain} className={styles.brainIcon} />
          Mental Issues
        </button>
      </div>

      {/* Title and Personal Button */}
      <div className={styles.titleRow}>
        <h1 className={styles.mainTitle}>
          We Care About your Life for Better
        </h1>
        
      </div>

      {/* Content layout */}
      <div className={styles.columns}>
        {/* Left list */}
        <div className={styles.listSection}>
          <div className={styles.listItem}>
            <h3 className={styles.listItemTitle}>Anxiety Disorders</h3>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.listItem}>
            <h3 className={styles.listItemTitleBold}>Depression</h3>
            <p className={styles.listItemDescription}>
              Comprehensive care and support for individuals struggling with depression.
            </p>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.listItem}>
            <h3 className={styles.listItemTitle}>Stress Management</h3>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.listItem}>
            <h3 className={styles.listItemTitle}>Trauma and PTSD</h3>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.listItem}>
            <h3 className={styles.listItemTitle}>Relationship Issues</h3>
            <div className={styles.divider}></div>
          </div>
        </div>

        {/* Right section */}
        <div className={styles.rightSection}>
        <div className={styles.personalIssuesButtonContainer}>
        <button className= { ` ${styles.personalIssuesButton} ${styles.customPersonalIssuesButton} `}>
            <RadioButtonCheckedIcon className={styles.radioIcon} />
            Personal Issues
          </button>
        </div>
          <h2 className={styles.depressionMainTitle}>DEPRESSION</h2>
        </div>
      </div>
    </div>
  );
};

export default Areas;
