import { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  IconButton,
  Avatar,
  Input,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function InfoTab() {
  const [editMode, setEditMode] = useState({
    userName: false,
    fullName: false,
    email: false,
    phone: false,
    location: false,
    postalCode: false,
  });

  const [values, setValues] = useState({
    avatar: '',
    userName: 'Sara_123',
    fullName: 'Sara Tancredi',
    email: 'sara@example.com',
    phone: '+1 123 456 7890',
    location: 'New York, USA',
    postalCode: '10001',
  });

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const toggleEdit = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setValues((prev) => ({ ...prev, avatar: url }));
    }
  };

  const renderField = (label, fieldKey) => (
    <Box
      key={fieldKey}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        mb: 3,
        width: '100%',
      }}
    >
      {editMode[fieldKey] ? (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%' }}>
          <Typography sx={{ width: '150px', fontWeight: 'bold' }}>{label}:</Typography>
          <TextField
            value={values[fieldKey]}
            onChange={(e) => handleChange(fieldKey, e.target.value)}
            fullWidth
            size="small"
          />
          <IconButton onClick={() => toggleEdit(fieldKey)} sx={{ color: 'black' }}>
            <SaveIcon />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%' }}>
          <Typography sx={{ width: '150px', fontWeight: 'bold' }}>{label}:</Typography>
          <Typography sx={{ flex: 1 }}>{values[fieldKey]}</Typography>
          <IconButton onClick={() => toggleEdit(fieldKey)} sx={{ color: 'black' }}>
            <EditIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );

  return (
    <Box sx={{ p: 5, borderRadius: 3, boxShadow: 3, height: '100%' }}>
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
        <Avatar
          src={values.avatar}
          alt="Profile"
          sx={{ width: 150, height: 150, mb: 2 }}
        />
        <label htmlFor="avatar-upload">
          <Input
            id="avatar-upload"
            type="file"
            sx={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
          <IconButton
            component="span"
            sx={{
              position: 'absolute',
              top: 100,
              left: 'calc(50% + 25px)',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <CameraAltIcon sx={{ color: 'black' }} />
          </IconButton>
        </label>
        <Typography variant="h6" fontWeight="bold">
          {values.fullName}
        </Typography>
        <Typography color="text.secondary">{values.location}</Typography>
      </Box>

      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        {renderField('User Name', 'userName')}
        {renderField('Full Name', 'fullName')}
        {renderField('Email Address', 'email')}
        {renderField('Phone Number', 'phone')}
        {renderField('Location', 'location')}
        {renderField('Postal Code', 'postalCode')}
      </Box>
    </Box>
  );
}

