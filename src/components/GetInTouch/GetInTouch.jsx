import React from "react";
import { Box, Button, Typography } from "@mui/material";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import styles from "./GetInTouch.module.css";

const GetInTouchSection = () => {
    return (
        <Box className={styles.sectionContainer}>
            <Box className={styles.container}>
                <Box className={styles.textArea}>
                    <Button variant="outlined" startIcon={<TouchAppIcon />} className={styles.button}>
                        Get in Touch
                    </Button>
                    <Typography variant="h4" className={styles.heading}>
                        We are more than happy to respond
                    </Typography>
                    <Typography variant="h4" className={styles.heading}>
                        to any question from you
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src="http://res.cloudinary.com/defus4mj2/image/upload/v1746816543/mfkqtpp61yqvgqrir2dm.png"
                    alt="Therapist and patient"
                    className={styles.image}
                />
            </Box>
        </Box>
    );
};

export default GetInTouchSection;
