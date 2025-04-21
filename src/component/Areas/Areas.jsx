import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { RadioButtonChecked } from '@mui/icons-material';
import styles from './Areas.module.css';  // Import the CSS Module

const Areas = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Box className={styles.container}>
      {/* Mental Issues button centered */}
      <Box className={styles.mentalIssuesButton}>
        <Button
          variant="outlined"
          startIcon={<FontAwesomeIcon icon={faBrain} style={{ fontSize: '14px', color: '#ccc' }} />}
          className={styles.mentalIssuesBtn}
        >
          Mental Issues
        </Button>
      </Box>

      {/* Main Title */}
      <Typography className={styles.title}>
        We Care About your Life for Better
      </Typography>

      {/* Personal Issues button aligned right */}
      <Box className={styles.personalIssuesButton}>
        <Button
          variant="contained"
          startIcon={<RadioButtonChecked sx={{ fontSize: '12px', color: '#4A6F6A' }} />}
          className={styles.personalIssuesBtn}
        >
          Personal Issues
        </Button>
      </Box>

      {/* List section */}
      <Box className={styles.listSection}>
        {/* Anxiety Disorders */}
        <Box className={styles.listItem}>
          <Typography className={styles.listItemTitle}>
            Anxiety Disorders
          </Typography>
          <Box className={styles.listItemSeparator} />
        </Box>

        {/* Depression */}
        <Box className={styles.listItem}>
          <Typography className={styles.listItemTitle}>
            Depression
          </Typography>
          <Typography variant="body1" className={styles.listItemDescription}>
            Comprehensive care and support for individuals struggling with<br />depression.
          </Typography>
          <Box className={styles.listItemSeparator} />
        </Box>

        {/* Stress Management */}
        <Box className={styles.listItem}>
          <Typography className={styles.listItemTitle}>
            Stress Management
          </Typography>
          <Box className={styles.listItemSeparator} />
        </Box>

        {/* Trauma and PTSD */}
        <Box className={styles.listItem}>
          <Typography className={styles.listItemTitle}>
            Trauma and PTSD
          </Typography>
          <Box className={styles.listItemSeparator} />
        </Box>

        {/* Relationship Issues */}
        <Box className={styles.listItem}>
          <Typography className={styles.listItemTitle}>
            Relationship Issues
          </Typography>
          <Box className={styles.listItemSeparator} />
        </Box>
      </Box>

      {/* DEPRESSION big title OUTSIDE the borders */}
      <Typography className={styles.depressionTitle}>
        DEPRESSION
      </Typography>
    </Box>
  );
};

export default Areas;
