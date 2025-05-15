import React from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import styles from "./ImageStatisticSection.module.css";

const ImageStatisticSection = ({ issueData, groupImg, aloneImg }) => (
  <Grid container spacing={4} className={styles.container}>
    <Grid item xs={12} md={2}>
      <Box className={styles.imageWrapper}>
        <img src={groupImg} alt="Group" className={styles.groupImage} loading="lazy" />
      </Box>
    </Grid>
    <Grid item xs={12} md={2}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Typography variant="h6" className={styles.statistic}>
            "{issueData.statistic}"
          </Typography>
          <Typography variant="caption" className={styles.source}>
            - Psychological Studies
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={9}>
      <Box className={styles.imageWrapper}>
        <img src={aloneImg} alt="Alone" className={styles.aloneImage} loading="lazy" />
      </Box>
    </Grid>
  </Grid>
);

export default ImageStatisticSection;