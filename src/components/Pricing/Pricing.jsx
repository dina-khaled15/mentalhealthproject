import React from "react";
import {Box,Typography,Button,Container,Paper,List,ListItem,ListItemIcon,ListItemText,Chip,} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import styles from "./Pricing.module.css";
import  plans from "../data/plans";
const PricingSection = () => {
 
  return (
    <Box className={styles.pricingSection}>
      <Container maxWidth="lg">
        <Box className={styles.headerContainer}>
          <Button
            variant="outlined"
            startIcon={<PriceChangeIcon />}
            className={styles.pricingButton}
          >
            Pricing
          </Button>
          <Typography
            variant="h2"
            component="h1"
            className={styles.sectionTitle}
          >
            Choose the Right Plan for You
          </Typography>
        </Box>

        <Box className={styles.plansContainer}>
          {plans.map((plan, index) => (
            <Paper key={index} elevation={3} className={`${styles.planCard} ${plan.highlighted ? styles.highlightedCard : styles.standardCard}`}>
              {plan.highlighted && (
                <Box className={styles.popularBadgeContainer}>
                  <Chip label="Popular"size="small"className={styles.popularBadge}/>
                </Box>
              )}

              <Box className={styles.planContent}>
                <Typography variant="h5" component="h2" className={styles.planTitle}>
                  {plan.title}
                </Typography>
                <Typography variant="body2" className={`${styles.planDescription} ${plan.highlighted ? styles.darkText : styles.lightText}`}>
                  {plan.description}
                </Typography>

                <Typography variant="h3" component="p" className={styles.planPrice}>
                  {plan.price}
                  <Typography component="span" className={`${styles.planPeriod} ${plan.highlighted ? styles.darkText : styles.whiteText}`}>
                    {plan.period}
                  </Typography>
                </Typography>

                <Typography variant="body2" className={`${styles.planSessions} ${plan.highlighted ? styles.darkText : styles.lightText}`} >
                  {plan.sessions}
                </Typography>

                <Button variant={plan.highlighted ? "contained" : "outlined"} fullWidth
                  className={`${styles.subscribeButton} ${plan.highlighted ? styles.highlightedButton : styles.standardButton}`}>
                  {plan.buttonText}
                </Button>

                <List disablePadding className={styles.featuresList}>
                  {plan.features.map((feature, idx) => (
                    <ListItem key={idx} disableGutters className={styles.featureItem}>
                      <ListItemIcon className={styles.featureIcon}>
                        <CheckCircleOutlineIcon fontSize="small" className={plan.highlighted ? styles.darkIcon : styles.lightIcon}/>
                      </ListItemIcon>
                      <ListItemText primary={feature}
                        className={`${styles.featureText} ${plan.highlighted ? styles.darkFeatureText : styles.lightFeatureText}`}/>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PricingSection;