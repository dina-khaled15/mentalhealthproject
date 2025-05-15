import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./WhatIsItSection.module.css";

const WhatIsItSection = ({ issueData }) => (
  <Box className={styles.container}>
    <Typography variant="h5" className={styles.title}>
      What is it?
    </Typography>
    <Box className={styles.content}>
      <Typography variant="body1" className={styles.description}>
        {issueData.whatIsIt}
      </Typography>
    </Box>
  </Box>
);

export default WhatIsItSection;