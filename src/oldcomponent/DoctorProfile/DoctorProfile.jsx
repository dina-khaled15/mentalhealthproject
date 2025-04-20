// import React from 'react';
// import { 
//   Container, 
//   Box, 
//   Typography, 
//   Grid, 
//   Paper,
//   IconButton,
//   Chip,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Button
// } from '@mui/material';
// import { 
//   School, 
//   Work, 
//   LinkedIn, 
//   Facebook, 
//   Instagram, 
//   Twitter,
//   Phone,
//   Email,
//   ArrowBack,
//   VerifiedUser
// } from '@mui/icons-material';

// function DoctorProfile () {
//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Button
//         startIcon={<ArrowBack />}
//         sx={{ mb: 4 }}
//         onClick={() => console.log('Back clicked')}
//       >
//         Back to Doctor List
//       </Button>

//       <Grid container spacing={4}>
//         <Grid item xs={12}>
//           <Paper sx={{ p: 4, borderRadius: 2, mb: 4 }}>
//             <Grid container spacing={6}>
//               <Grid item xs={12} md={5}>
//                 <img
//                   src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500"
//                   alt="John Ramirez"
//                   style={{ 
//                     width: '100%', 
//                     borderRadius: '8px',
//                     marginBottom: '24px'
//                   }}
//                 />

//                 <Box sx={{ mb: 4 }}>
//                   <Typography variant="h6" gutterBottom>
//                     Expertise
//                   </Typography>
//                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                     <Chip label="Family Counseling" />
//                     <Chip label="Trauma Recovery" />
//                     <Chip label="PTSD" />
//                     <Chip label="Grief and Loss Therapy" />
//                     <Chip label="Conflict Resolution" />
//                   </Box>
//                 </Box>

//                 <Box sx={{ mb: 4 }}>
//                   <Typography variant="h6" gutterBottom>
//                     Contact
//                   </Typography>
//                   <List>
//                     <ListItem disablePadding sx={{ mb: 1 }}>
//                       <ListItemIcon sx={{ minWidth: 40 }}>
//                         <Phone fontSize="small" />
//                       </ListItemIcon>
//                       <ListItemText primary="(123) 456-7890" />
//                     </ListItem>
//                     <ListItem disablePadding>
//                       <ListItemIcon sx={{ minWidth: 40 }}>
//                         <Email fontSize="small" />
//                       </ListItemIcon>
//                       <ListItemText primary="john.ramirez@wellthy.com" />
//                     </ListItem>
//                   </List>
//                 </Box>

//                 <Box>
//                   <Typography variant="h6" gutterBottom>
//                     Social Media
//                   </Typography>
//                   <Box sx={{ display: 'flex', gap: 1 }}>
//                     <IconButton size="small">
//                       <LinkedIn />
//                     </IconButton>
//                     <IconButton size="small">
//                       <Twitter />
//                     </IconButton>
//                     <IconButton size="small">
//                       <Facebook />
//                     </IconButton>
//                     <IconButton size="small">
//                       <Instagram />
//                     </IconButton>
//                   </Box>
//                 </Box>
//               </Grid>

//               <Grid item xs={12} md={7}>
//                 <Typography variant="h3" gutterBottom sx={{ fontWeight: 500 }}>
//                   John Ramirez, LCSW
//                 </Typography>
//                 <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
//                   Psychiatrist
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
//                   A Licensed Clinical Social Worker (LCSW) with over 12 years of experience in providing compassionate counseling and therapy for individuals and families. He specializes in trauma recovery, family dynamics, and supporting individuals through life transitions. John's approach is rooted in empathy, with a focus on fostering healing and resilience.
//                 </Typography>

//                 <Box sx={{ mt: 6 }}>
//                   <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                     <School sx={{ mr: 2 }} /> Education
//                   </Typography>
                  
//                   <Box sx={{ mb: 4 }}>
//                     <Grid container spacing={2}>
//                       <Grid item xs={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           2011 - 2013
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={9}>
//                         <Typography variant="body1" fontWeight="bold">
//                           Master of Social Work (MSW)
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           University of Southern California
//                         </Typography>
//                       </Grid>

//                       <Grid item xs={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           2006 - 2010
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={9}>
//                         <Typography variant="body1" fontWeight="bold">
//                           Bachelor of Psychology
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           California State University
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </Box>

//                   <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 6 }}>
//                     <Work sx={{ mr: 2 }} /> Experiences
//                   </Typography>

//                   <Box sx={{ mb: 4 }}>
//                     <Grid container spacing={2}>
//                       <Grid item xs={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           2015 - Present
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={9}>
//                         <Typography variant="body1" fontWeight="bold">
//                           Senior Therapist
//                         </Typography>
//                         <Typography variant="body2">Wellthy</Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Providing specialized therapy in family dynamics and trauma recovery
//                         </Typography>
//                       </Grid>

//                       <Grid item xs={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           2012 - 2015
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={9}>
//                         <Typography variant="body1" fontWeight="bold">
//                           Clinical Social Worker
//                         </Typography>
//                         <Typography variant="body2">Hope Counseling Center</Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Working with trauma survivors and supporting families through counseling
//                         </Typography>
//                       </Grid>

//                       <Grid item xs={3}>
//                         <Typography variant="body2" color="text.secondary">
//                           2010 - 2012
//                         </Typography>
//                       </Grid>
//                       <Grid item xs={9}>
//                         <Typography variant="body1" fontWeight="bold">
//                           Licensed Social Worker
//                         </Typography>
//                         <Typography variant="body2">Community Health Clinic</Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Specializing in PTSD and grief counseling
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </Box>

//                   <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 6 }}>
//                     <VerifiedUser sx={{ mr: 2 }} /> Certificate
//                   </Typography>

//                   <List>
//                     <ListItem>
//                       <ListItemText primary="Licensed Clinical Social Worker (LCSW) Certification" />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary="Certified in Trauma-Focused Cognitive Behavioral Therapy" />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText primary="Certified Family Therapist" />
//                     </ListItem>
//                   </List>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default DoctorProfile ;





// DoctorProfile.jsx
import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import {
  Phone,
  Email,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
  School,
  Work,
  Assignment,
} from "@mui/icons-material";

const iconMap = {
  LinkedIn: <LinkedIn fontSize="large" />,
  Twitter: <Twitter fontSize="large" />,
  Facebook: <Facebook fontSize="large" />,
  Instagram: <Instagram fontSize="large" />,
};

export default function DoctorProfile({ doctor }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 6,
        px: { xs: 2, md: 10 },
        py: 5,
      }}
    >
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <Avatar
          src={doctor.avatar}
          alt="Doctor"
          sx={{ width: 250, height: 300, mx: "auto", mb: 3 }}
        />
        <Typography variant="h6" fontWeight="600" mb={1}>
          Expertise
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          justifyContent="center"
          mb={3}
        >
          {doctor.expertise.map((item, i) => (
            <Chip key={i} label={item} variant="outlined" />
          ))}
        </Stack>
        <Typography variant="h6" fontWeight="600" mb={1}>
          Contact
        </Typography>
        <Stack alignItems="center" gap={1} mb={3}>
          <Box display="flex" alignItems="center" gap={1}>
            <Phone fontSize="small" />
            <Typography>{doctor.contact.phone}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Email fontSize="small" />
            <Typography>{doctor.contact.email}</Typography>
          </Box>
        </Stack>
        <Typography variant="h6" fontWeight="600" mb={1}>
          Social Media
        </Typography>
        <Stack direction="row" gap={2} justifyContent="center">
          {doctor.socialMedia.map((platform, i) => (
            <span key={i}>{iconMap[platform]}</span>
          ))}
        </Stack>
      </Box>

      {/* Right side */}
      <Box sx={{ flex: 2 }}>
        <Typography variant="h4" fontWeight="bold">
          {doctor.name}
        </Typography>
        <Typography variant="h6" color="gray" mb={2}>
          {doctor.title}
        </Typography>
        <Typography mb={3}>{doctor.description}</Typography>

        <Divider sx={{ mb: 2 }} />
        <Typography variant="h6" fontWeight="600" gutterBottom>
          <School sx={{ mr: 1 }} fontSize="small" /> Education
        </Typography>
        {doctor.education.map((edu, i) => (
          <Typography key={i}>
            <b>{edu.year}:</b> {edu.degree} – {edu.school}
          </Typography>
        ))}

        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" fontWeight="600" gutterBottom>
          <Work sx={{ mr: 1 }} fontSize="small" /> Experiences
        </Typography>
        {doctor.experience.map((exp, i) => (
          <Typography key={i}>
            <b>{exp.year}:</b> {exp.role} – {exp.place}
          </Typography>
        ))}

        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" fontWeight="600" gutterBottom>
          <Assignment sx={{ mr: 1 }} fontSize="small" /> Certificates
        </Typography>
        <ul>
          {doctor.certificates.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
