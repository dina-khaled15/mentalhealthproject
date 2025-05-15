import { useState, useEffect } from 'react';
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
import axios from 'axios';

export default function InfoTab() {
  const [editMode, setEditMode] = useState({
    userName: false,
    fullName: false,
    email: false,
    phone: false,
    location: false,
    postalCode: false,
    age: false,
  });

  const [values, setValues] = useState({
    avatar: '',
    userName: '',
    fullName: '',
    email: '',
    phone: '',
    location: '',
    postalCode: '',
    age: '',
  });

  const [avatarFile, setAvatarFile] = useState(null);

  // جلب بيانات الـ Profile من الـ Backend
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setValues(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const toggleEdit = async (field) => {
    if (editMode[field]) {
      // حفظ التغييرات عند الضغط على Save
      try {
        const formData = new FormData();
        for (const key in values) {
          if (values[key]) formData.append(key, values[key]);
        }
        if (avatarFile) formData.append('avatar', avatarFile);

        await axios.post('http://localhost:4000/api/auth', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      } catch (error) {
        console.error('Error saving profile:', error);
      }
    }
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
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
            value={values[fieldKey] || ''}
            onChange={(e) => handleChange(fieldKey, e.target.value)}
            fullWidth
            size="small"
            type={fieldKey === 'age' ? 'number' : 'text'}
          />
          <IconButton onClick={() => toggleEdit(fieldKey)} sx={{ color: 'black' }}>
            <SaveIcon />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%' }}>
          <Typography sx={{ width: '150px', fontWeight: 'bold' }}>{label}:</Typography>
          <Typography sx={{ flex: 1 }}>{values[fieldKey] || 'Not set'}</Typography>
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
          {values.fullName || 'No Name'}
        </Typography>
        <Typography color="text.secondary">{values.location || 'No Location'}</Typography>
      </Box>

      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        {renderField('User Name', 'userName')}
        {renderField('Full Name', 'fullName')}
        {renderField('Email Address', 'email')}
        {renderField('Phone Number', 'phone')}
        {renderField('Location', 'location')}
        {renderField('Postal Code', 'postalCode')}
        {renderField('Age', 'age')}
      </Box>
    </Box>
  );
}