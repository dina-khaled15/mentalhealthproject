
import React from "react";
import { TextField, Button, Typography, Box, Chip } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import styles from "./Form.module.css";

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'black' },
    '&:hover fieldset': { borderColor: 'black' },
    '&.Mui-focused fieldset': { borderColor: 'black' },
  }
};

export default function ContactForm() {
  return (
    <Box className={styles["contact-form-container"]}>
      <Box className={styles["left-section"]}>
        <Chip
          icon={<EditOutlinedIcon className={styles["custom-icon"]} />}
          label="Form"
          variant="outlined"
          className={styles["chip"]}
        />

        <Box className={styles["title-section"]}>
          <Typography variant="h4" className={styles["title-bold"]}>
            Fill out the form,
          </Typography>
          <Typography variant="h4" className={styles["title-gray"]}>
            we will get back to you soon!
          </Typography>
        </Box>

        <Box className={styles["contact-info"]}>
          <TextField
            value="(123) 456-7890"
            InputProps={{ readOnly: true }}
            className={`${styles["input-field"]} ${styles["phone-field"]}`}
            variant="outlined"
            size="small"
            sx={textFieldSx}
          />
          <TextField
            value="support@wellthymentalhealth.com"
            InputProps={{ readOnly: true }}
            className={`${styles["input-field"]} ${styles["email-field"]}`}
            variant="outlined"
            size="small"
            sx={textFieldSx}
          />
        </Box>
      </Box>

      <Box component="form" className={styles["right-section"]}>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3}>
          <Box>
            <Typography className={styles["input-label"]}>First Name*</Typography>
            <TextField
              fullWidth
              required
              placeholder="First Name"
              size="medium"
              className={styles["input-field"]}
              sx={textFieldSx}
            />
          </Box>
          <Box>
            <Typography className={styles["input-label"]}>Last Name*</Typography>
            <TextField
              fullWidth
              required
              placeholder="Last Name"
              size="medium"
              className={styles["input-field"]}
              sx={textFieldSx}
            />
          </Box>
          <Box>
            <Typography className={styles["input-label"]}>E-mail*</Typography>
            <TextField
              fullWidth
              required
              type="email"
              placeholder="example@email.com"
              size="medium"
              className={styles["input-field"]}
              sx={textFieldSx}
            />
          </Box>
          <Box>
            <Typography className={styles["input-label"]}>Phone Number*</Typography>
            <TextField
              fullWidth
              required
              placeholder="+62 800234756"
              size="medium"
              className={styles["input-field"]}
              sx={textFieldSx}
            />
          </Box>
          <Box className={styles["message-section"]}>
            <Typography className={styles["input-label"]}>Message*</Typography>
            <TextField
              fullWidth
              required
              multiline
              minRows={5}
              placeholder="Leave us a message..."
              size="medium"
              className={`${styles["input-field"]} ${styles["message-field"]}`}
              sx={textFieldSx}
            />
          </Box>
          <Box gridColumn="span 2">
            <Button className={styles["submit-button"]}>Submit Inquiry</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
