import React from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';
import { Add, Delete } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDoctorForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      title: '',
      avatar: '',
      description: '',
      contactPhone: '',
      contactEmail: '',
      socialMedia: [''],
      education: [{ year: '', degree: '', school: '' }],
      experience: [{ year: '', role: '', place: '' }],
      certificates: [''],
      expertise: [''],
    },
  });

  const navigate = useNavigate();

  const { fields: socialMediaFields, append: appendSocialMedia, remove: removeSocialMedia } = useFieldArray({
    control,
    // @ts-ignore
    name: 'socialMedia',
  });

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: 'education',
  });

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: 'experience',
  });


  const { fields: certificateFields, append: appendCertificate, remove: removeCertificate } = useFieldArray({
    control,
    // @ts-ignore
    name: 'certificates',
  });

  const { fields: expertiseFields, append: appendExpertise, remove: removeExpertise } = useFieldArray({
    control,
    // @ts-ignore
    name: 'expertise',
  });

  const [open, setOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleClose = (_, reason) => {
    if (reason !== 'clickaway') {
      setOpen(false);
      setErrorOpen(false);
    }
  };

  const onSubmit = async (data) => {
    const newDoctor = {
      name: data.name,
      title: data.title,
      avatar: data.avatar,
      description: data.description,
      contact: {
        phone: data.contactPhone,
        email: data.contactEmail,
      },
      socialMedia: data.socialMedia.filter((link) => link),
      education: data.education.filter((edu) => edu.year && edu.degree && edu.school),
      experience: data.experience.filter((exp) => exp.year && exp.role && exp.place),
      certificates: data.certificates.filter((cert) => cert),
      expertise: data.expertise.filter((exp) => exp),
    };

    try {
      await axios.post('http://localhost:4000/doctor', newDoctor, {
        headers: { 'Content-Type': 'application/json' },
      });
      setOpen(true);
      reset();
      setTimeout(() => navigate('/doctors'), 1000);
    } catch (error) {
      console.error('Error adding doctor:', error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || 'Failed to add doctor.');
      setErrorOpen(true);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Add New Doctor</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField label="Name" fullWidth {...register('name', { required: 'Name is required' })} error={!!errors.name} helperText={errors.name?.message} />

          <TextField label="Title" fullWidth {...register('title')} />

          <TextField label="Avatar URL" fullWidth {...register('avatar')} />

          <TextField label="Description" multiline rows={4} fullWidth {...register('description')} />

          <Stack direction="row" spacing={2}>
            <TextField label="Contact Phone" fullWidth {...register('contactPhone', { required: 'Phone is required' })} error={!!errors.contactPhone} helperText={errors.contactPhone?.message} />
            <TextField label="Contact Email" fullWidth {...register('contactEmail', { required: 'Email is required' })} error={!!errors.contactEmail} helperText={errors.contactEmail?.message} />
          </Stack>

          <Typography variant="h6">Social Media Links</Typography>
          {socialMediaFields.map((item, index) => (
            <Stack direction="row" spacing={2} key={item.id}>
              <TextField label={`Link ${index + 1}`} fullWidth {...register(`socialMedia.${index}`)} />
              <IconButton onClick={() => removeSocialMedia(index)}><Delete /></IconButton>
            </Stack>
          ))}
          <Button variant="outlined" startIcon={<Add />} onClick={() => appendSocialMedia(
// @ts-ignore
          '')}>Add Social Media Link</Button>

          <Typography variant="h6">Education</Typography>
          {educationFields.map((item, index) => (
            <Stack direction="row" spacing={2} key={item.id}>
              <TextField label="Year" {...register(`education.${index}.year`)} />
              <TextField label="Degree" {...register(`education.${index}.degree`)} />
              <TextField label="School" {...register(`education.${index}.school`)} />
              <IconButton onClick={() => removeEducation(index)}><Delete /></IconButton>
            </Stack>
          ))}
          <Button variant="outlined" startIcon={<Add />} onClick={() => appendEducation({ year: '', degree: '', school: '' })}>Add Education</Button>

          <Typography variant="h6">Experience</Typography>
          {experienceFields.map((item, index) => (
            <Stack direction="row" spacing={2} key={item.id}>
              <TextField label="Year" {...register(`experience.${index}.year`)} />
              <TextField label="Role" {...register(`experience.${index}.role`)} />
              <TextField label="Place" {...register(`experience.${index}.place`)} />
              <IconButton onClick={() => removeExperience(index)}><Delete /></IconButton>
            </Stack>
          ))}
          <Button variant="outlined" startIcon={<Add />} onClick={() => appendExperience({ year: '', role: '', place: '' })}>Add Experience</Button>

          <Typography variant="h6">Certificates</Typography>
          {certificateFields.map((item, index) => (
            <Stack direction="row" spacing={2} key={item.id}>
              <TextField label={`Certificate ${index + 1}`} fullWidth {...register(`certificates.${index}`)} />
              <IconButton onClick={() => removeCertificate(index)}><Delete /></IconButton>
            </Stack>
          ))}
          <Button variant="outlined" startIcon={<Add />} onClick={() => appendCertificate(
// @ts-ignore
          '')}>Add Certificate</Button>

          <Typography variant="h6">Expertise</Typography>
          {expertiseFields.map((item, index) => (
            <Stack direction="row" spacing={2} key={item.id}>
              <TextField label={`Expertise ${index + 1}`} fullWidth {...register(`expertise.${index}`)} />
              <IconButton onClick={() => removeExpertise(index)}><Delete /></IconButton>
            </Stack>
          ))}
          <Button variant="outlined" startIcon={<Add />} onClick={() => appendExpertise(
// @ts-ignore
          '')}>Add Expertise</Button>

          <Box sx={{ textAlign: 'right' }}>
            <Button type="submit" variant="contained">Save Doctor</Button>
          </Box>
        </Stack>
      </form>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity="success" onClose={handleClose}>Doctor added successfully!</Alert>
      </Snackbar>

      <Snackbar open={errorOpen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert severity="error" onClose={handleClose}>{errorMessage}</Alert>
      </Snackbar>
    </Box>
  );
};

export default AddDoctorForm;