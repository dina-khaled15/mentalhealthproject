import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import styles from "./Testimonial.module.css";

const TestimonialSection = ({ issueData, image }) => (
  <Box className={styles.container}>
    <Box className={styles.buttonWrapper}>
      <Button variant="contained" className={styles.button}>
        # Testimonials
      </Button>
    </Box>
    <Typography variant="h5" className={styles.testimonialText}>
      "{issueData.testimonial.text}"
    </Typography>
    <Box className={styles.authorContainer}>
    <Avatar src="http://res.cloudinary.com/defus4mj2/image/upload/v1747263881/uwb22hp7junjp3j0eggh.png" className={styles.avatar} />
          <Box>
        <Typography variant="subtitle1" className={styles.authorName}>
          {issueData.testimonial.name}
        </Typography>
        <Typography variant="caption" className={styles.authorRole}>
          {issueData.testimonial.role}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default TestimonialSection;