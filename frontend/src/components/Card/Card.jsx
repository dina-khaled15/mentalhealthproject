import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stack,
} from "@mui/material";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
import styles from "./Card.module.css";

export default function ActionAreaCard() {
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const doctors = [
    { label: "Dr. Sarah Thompson", value: "sarah_thompson" },
    { label: "John Ramirez, LCSW", value: "john_ramirez" },
    { label: "Emily Chen, PsyD", value: "emily_chen" },
    { label: "Dr. Liam Carter", value: "liam_carter" },
    { label: "Dr. Sophia Hughes", value: "sophia_hughes" },
    { label: "Dr. Marcus Lee", value: "marcus_lee" },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cards")
      .then((response) => setCards(response.data))
      .catch((err) => console.error("Error fetching cards:", err));
  }, []);

  const handleClickOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserName('');
    setUserPhone('');
    setSelectedDoctor('');
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleSubmit = () => {
    console.log('--- Booking Info ---');
    console.log('Name:', userName);
    console.log('Phone:', userPhone);
    console.log('Session:', selectedCard.name);
    console.log('Doctor:', selectedDoctor);
    console.log('Date:', selectedDate);
    console.log('Time:', selectedTime);
    handleClose();
  };

  // تقسيم الكروت لصفوف من 3 عناصر
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const rows = chunkArray(cards, 3);

  // لو الصور في السيرفر محفوظة بأسماء ملفات:
  const getImageUrl = (imgName) => `http://localhost:4000/uploads/${imgName}`;

  return (
    <>
      <div>
        {rows.map((row, idx) => (
          <div key={idx} className="d-flex justify-content-center gap-4 mb-4">
            {row.map((card) => (
              <Card key={card._id} className={styles.card} onClick={() => handleClickOpen(card)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="320"
                    image={getImageUrl(card.image)} // عدل حسب مكان الصورة عندك
                    alt={card.name}
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
                      {card.name}
                    </Typography>
                    <Typography variant="body2" className={styles.cardDescription}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth={false} className={styles.dialogCustom}>
        {selectedCard && (
          <>
            <DialogTitle className={styles.dialogTitle}>{`Book Session: ${selectedCard.name}`}</DialogTitle>
            <DialogContent dividers className={styles.dialogContent}>
              <Stack spacing={2} mt={1}>
                <TextField
                  label="Full Name"
                  placeholder="Enter your full name"
                  fullWidth
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  InputProps={{ className: styles.inputFont }}
                  InputLabelProps={{ className: styles.inputFont }}
                />
                <TextField
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  type="tel"
                  fullWidth
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  InputProps={{ className: styles.inputFont }}
                  InputLabelProps={{ className: styles.inputFont }}
                />
                <FormControl fullWidth>
                  <InputLabel className={styles.inputFont}>Select Doctor</InputLabel>
                  <Select
                    value={selectedDoctor}
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    label="Select Doctor"
                    className={styles.inputFont}
                  >
                    {doctors.map((doc) => (
                      <MenuItem key={doc.value} value={doc.value} className={styles.inputFont}>
                        {doc.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Choose Date"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputProps: { className: styles.inputFont },
                        InputLabelProps: { className: styles.inputFont },
                      },
                    }}
                  />
                  <TimePicker
                    label="Choose Time"
                    value={selectedTime}
                    onChange={(newValue) => setSelectedTime(newValue)}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputProps: { className: styles.inputFont },
                        InputLabelProps: { className: styles.inputFont },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }} className={styles.dialogActions}>
              <Button onClick={handleClose} variant="contained" className={styles.blackButton}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} variant="contained" className={styles.blackButton}>
                Confirm Booking
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
