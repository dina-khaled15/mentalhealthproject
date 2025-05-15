import * as React from 'react';
import {Card,CardContent,CardMedia,Typography,CardActionArea,Dialog,DialogTitle,DialogContent,DialogActions,
  TextField,Button,MenuItem,FormControl,InputLabel,Select,Stack} from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import styles from './Card.module.css';

const doctors = [
  { label: "Dr. Sarah Thompson", value: "sarah_thompson" },
  { label: "John Ramirez, LCSW", value: "john_ramirez" },
  { label: "Emily Chen, PsyD", value: "emily_chen" },
  { label: "Dr. Liam Carter", value: "liam_carter" },
  { label: "Dr. Sophia Hughes", value: "sophia_hughes" },
  { label: "Dr. Marcus Lee", value: "marcus_lee" },
];

export default function ActionAreaCard({ name, des, img }) {
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [userPhone, setUserPhone] = React.useState('');
  const [selectedDoctor, setSelectedDoctor] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleClickOpen = () => setOpen(true);
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
    console.log('Session:', name);
    console.log('Doctor:', selectedDoctor);
    console.log('Date:', selectedDate);
    console.log('Time:', selectedTime);
    handleClose();
  };

  return (
    <>
    <Card className={styles.card} onClick={handleClickOpen}>
      <CardActionArea>
        <CardMedia component="img" height="320" image={img} alt={name}/>
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
          {name}
          </Typography>
          <Typography variant="body2" className={styles.cardDescription}>
          {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Dialog open={open} onClose={handleClose}  maxWidth={false} className={styles.dialogCustom} >
    <DialogTitle className={styles.dialogTitle}>{`Book Session: ${name}`}</DialogTitle>
    <DialogContent dividers className={styles.dialogContent}>
      <Stack spacing={2} mt={1}>
        <TextField label="Full Name" placeholder="Enter your full name" fullWidth value={userName}
        onChange={(e) => setUserName(e.target.value)}
        InputProps={{ className: styles.inputFont }}
        InputLabelProps={{ className: styles.inputFont }}/>
        <TextField  label="Phone Number" placeholder="Enter your phone number" type="tel" fullWidth value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
        InputProps={{ className: styles.inputFont }}
        InputLabelProps={{ className: styles.inputFont }} />
        <FormControl fullWidth>
          <InputLabel className={styles.inputFont}>Select Doctor</InputLabel>
          <Select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} label="Select Doctor"
          className={styles.inputFont} >
          {doctors.map((doc) => (
            <MenuItem key={doc.value} value={doc.value} className={styles.inputFont}>
              {doc.label}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker label="Choose Date" value={selectedDate} onChange={(newValue) => setSelectedDate(newValue)}
          slotProps={{ textField: { fullWidth: true, InputProps: { className: styles.inputFont }, 
          InputLabelProps: { className: styles.inputFont } } }}/>
          <TimePicker label="Choose Time" value={selectedTime} onChange={(newValue) => setSelectedTime(newValue)}
          slotProps={{ textField: { fullWidth: true, InputProps: { className: styles.inputFont },
          InputLabelProps: { className: styles.inputFont } } }}/>
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
      </Dialog>
    </>
  );
}
