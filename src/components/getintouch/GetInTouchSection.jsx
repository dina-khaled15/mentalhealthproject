import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import styles from "./GetInTouchSection.module.css";

const GetInTouchSection = () => {
    return (
        <Box className={styles.sectionContainer}>
            <Container className={styles.container}>
                <Button variant="outlined" startIcon={<TouchAppIcon />} className={styles.button}>
                    Get in Touch
                </Button>
                <Box className={styles.textContainer}>
                    <Typography variant="h4" className={styles.heading}>
                        We are more than happy to respond
                    </Typography>
                    <Typography variant="h4" className={styles.heading}>
                        to any question from you
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src="/Picture4.png"
                    alt="Therapist and patient"
                    className={styles.image}
                />
            </Container>
        </Box>
    );
};

export default GetInTouchSection;