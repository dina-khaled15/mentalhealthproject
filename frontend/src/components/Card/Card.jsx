import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, FormControl, InputLabel, Select, Stack, Grid } from "@mui/material";
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
  ];

  useEffect(() => {
    axios.get("http://localhost:4000/api/cards")
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

  // const getImageUrl = (imgName) => `http://localhost:4000/api/cards/${card.image}`;

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card._id}>
            <Card className={styles.card} onClick={() => handleClickOpen(card)}>
              <CardActionArea>
                <CardMedia component="img" height="320" image={(card.image)} alt={card.name} />
                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h5">{card.name}</Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        {selectedCard && (
          <>
            <DialogTitle>Book Session: {selectedCard.name}</DialogTitle>
            <DialogContent dividers>
              <Stack spacing={2}>
                <TextField label="Full Name" fullWidth value={userName} onChange={(e) => setUserName(e.target.value)} />
                <TextField label="Phone Number" fullWidth value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
                <FormControl fullWidth>
                  <InputLabel>Select Doctor</InputLabel>
                  <Select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
                    {doctors.map((doc) => (
                      <MenuItem key={doc.value} value={doc.value}>{doc.label}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker label="Choose Date" value={selectedDate} onChange={(newValue) => setSelectedDate(newValue)} fullWidth />
                  <TimePicker label="Choose Time" value={selectedTime} onChange={(newValue) => setSelectedTime(newValue)} fullWidth />
                </LocalizationProvider>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Confirm</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}
