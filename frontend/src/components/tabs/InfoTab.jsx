import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  IconButton,
  Avatar,
  Input,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function InfoTab() {
  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
    phone: false,
    location: false,
    postalCode: false,
  });

  const [values, setValues] = useState({
    avatar: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    postalCode: '',
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [error, setError] = useState('');
  const BASE_URL = 'http://localhost:4000/api/auth/me'; 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Please log in to view your profile');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
          return;
        }

        const response = await axios.get(BASE_URL, {
          headers: { Authorization:`Bearer ${token}  `},
        });

        console.log('Profile response:', response.data);

        if (response.data.success) {
          const userData = response.data.data;
          setValues({
            avatar: userData.avatar || '',
            name: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
            location: userData.location || '',
            postalCode: userData.postalCode || '',
          });
        } else {
          setError('Failed to load profile data');
        }
      } catch (error) {
        console.error('Error fetching profile:', error.response?.data || error.message);
        setError(error.response?.data?.message || 'Failed to load profile data. Please try again.');
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const toggleEdit = async (field) => {
    if (editMode[field]) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('Please log in to save changes');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
          return;
        }

        const formData = new FormData();
        for (const key in values) {
          if (values[key]) formData.append(key, values[key]);
        }
        if (avatarFile) formData.append('avatar', avatarFile);

        const response = await axios.put(BASE_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Update profile response:', response.data);
        setError('');
      } catch (error) {
        console.error('Error saving profile:', error.response?.data || error.message);
        setError(error.response?.data?.message || 'Failed to save profile changes. Please try again.');
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

  const handleBackToHome = () => {
    navigate('/');
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
            type="text"
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
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBackToHome}
        sx={{ mb: 2 }}
      >
        Back to Home
      </Button>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
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
          {values.name || 'No Name'}
        </Typography>
        <Typography color="text.secondary">{values.location || 'No Location'}</Typography>
      </Box>

      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        {renderField('Name', 'name')}
        {renderField('Email Address', 'email')}
        {renderField('Phone Number', 'phone')}
        {renderField('Location', 'location')}
        {renderField('Postal Code', 'postalCode')}
      </Box>
    </Box>
  );
}