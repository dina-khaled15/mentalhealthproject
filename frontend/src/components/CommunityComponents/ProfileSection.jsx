import React, { useState, useRef } from 'react';
import { Box, Typography, Avatar, Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { PersonAdd, VideoCall, Close } from '@mui/icons-material';

const ProfileSection = ({ theme, activeChat, friends, addFriend, startVideoCall, sendMessage }) => {
  const isFriend = friends.includes(activeChat);
  const [attachments, setAttachments] = useState([]);
  const [viewAllOpen, setViewAllOpen] = useState(false);

  const pdfInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const mp3InputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const newAttachment = { name: file.name, url: fileUrl, type };
      setAttachments((prev) => [...prev, newAttachment]);
      sendMessage({
        text: `Attached a ${type}: ${file.name}`,
        received: false,
        type: 'attachment',
        attachmentUrl: fileUrl,
      });
    }
  };

  const triggerFileInput = (ref) => {
    ref.current.click();
  };

  return (
    <Box
      sx={{width: '300px',bgcolor: '#F8F7F4',display: 'flex',flexDirection: 'column',padding: '16px',
        borderLeft: `1px solid ${theme.border}`,}}>
      <Typography variant="subtitle2" sx={{ color: theme.text.secondary, mb: '8px', textTransform: 'uppercase' }}>
        User
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '16px' }}>
        <Avatar sx={{ width: 60, height: 60 }}>{activeChat[0]}</Avatar>
        <Typography variant="h6" sx={{ color: theme.text.primary }}>
          {activeChat}
        </Typography>
      </Box>
      <Button variant="contained" startIcon={<PersonAdd />}
        onClick={() => addFriend(activeChat)}
        disabled={isFriend}
        sx={{mb: '16px',
          bgcolor: isFriend ? theme.text.secondary : theme.text.primary,
          color: theme.text.light,
          '&:hover': {
            bgcolor: isFriend ? theme.text.secondary : theme.text.primary
          },
          textTransform: 'uppercase'
        }}
      >
        {isFriend ? 'Friend Added' : 'Add Friend'}
      </Button>
      <Button
        variant="outlined"
        startIcon={<VideoCall />}
        onClick={startVideoCall}
        sx={{mb: '16px',borderColor: theme.text.primary,color: theme.text.primary,textTransform: 'uppercase'}}>
        Start Video Call
      </Button>
      <Typography variant="subtitle2" sx={{ color: theme.text.secondary, mb: '8px', textTransform: 'uppercase' }}>
        Attachments
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mb: '16px' }}>
        <input type="file" accept="application/pdf"
          style={{ display: 'none' }}
          ref={pdfInputRef}
          onChange={(e) => handleFileUpload(e, 'PDF')}
        />
        <Button variant="contained"
          sx={{ bgcolor: theme.text.primary, color: theme.text.light, textTransform: 'uppercase' }}
          onClick={() => triggerFileInput(pdfInputRef)}
        >
          PDF
        </Button>
        <input type="file"
          accept="video/*"
          style={{ display: 'none' }}
          ref={videoInputRef}
          onChange={(e) => handleFileUpload(e, 'Video')}
        />
        <Button variant="contained" sx={{ bgcolor: theme.text.primary, color: theme.text.light, textTransform: 'uppercase' }}
          onClick={() => triggerFileInput(videoInputRef)}
        >
          Video
        </Button>
        <input type="file"
          accept="audio/mpeg"
          style={{ display: 'none' }}
          ref={mp3InputRef}
          onChange={(e) => handleFileUpload(e, 'MP3')}
        />
        <Button variant="contained"
          sx={{ bgcolor: theme.text.primary, color: theme.text.light, textTransform: 'uppercase' }}
          onClick={() => triggerFileInput(mp3InputRef)}
        >
          MP3
        </Button>
        <input type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={imageInputRef}
          onChange={(e) => handleFileUpload(e, 'Image')}
        />
        <Button variant="contained" sx={{ bgcolor: theme.text.primary, color: theme.text.light, textTransform: 'uppercase' }}
          onClick={() => triggerFileInput(imageInputRef)}
        >
          Image
        </Button>
      </Box>
      <Button variant="text" sx={{ color: theme.text.primary, textTransform: 'uppercase' }}
        onClick={() => setViewAllOpen(true)}
      >
        View All
      </Button>
      <Dialog open={viewAllOpen} onClose={() => setViewAllOpen(false)}>
        <DialogTitle>
          All Attachments
          <IconButton
            onClick={() => setViewAllOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {attachments.length === 0 ? (
            <Typography>No attachments available.</Typography>
          ) : (
            attachments.map((attachment, index) => (
              <Box key={index} sx={{ mb: '8px' }}>
                <Typography>
                  {attachment.type}:{" "}
                  <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                    {attachment.name}
                  </a>
                </Typography>
              </Box>
            ))
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProfileSection;