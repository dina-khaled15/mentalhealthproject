import React, { useEffect, useRef } from 'react';
import { Box, Typography, TextField, IconButton, Paper } from '@mui/material';
import { Delete, Send, Mic, Stop, AttachFile, VideoCall } from '@mui/icons-material';

const ChatSection = ({theme,activeChat,messages,message,setMessage,sendMessage,isRecording,
  startRecording,stopRecordingAndSend,cancelRecording,recordingDuration,formatTime,startVideoCall
}) => {
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      sendMessage({
        text: `Attached a file: ${file.name}`,
        received: false,
        type: 'attachment',
        attachmentUrl: fileUrl,
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Box sx={{flexGrow: 1,display: 'flex',flexDirection: 'column',overflow: 'hidden',bgcolor: '#F8F7F4',
        borderLeft: `1px solid ${theme.border}`,
        borderRight: `1px solid ${theme.border}`}}>
      <Box
        sx={{bgcolor:'#F8F7F4',padding:'16px',display: 'flex',justifyContent: 'space-between',alignItems: 'center',
          borderBottom: `1px solid ${theme.border}`,}}>
        <Typography variant="h6" sx={{ color: theme.text.primary }}>
          {activeChat}
        </Typography>
        <IconButton onClick={startVideoCall}>
          <VideoCall />
        </IconButton>
      </Box>
      <Box
        sx={{flexGrow: 1,overflowY: 'auto',padding: '16px',display: 'flex',flexDirection: 'column',gap: '12px',bgcolor: '#F8F7F4',}}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{display: 'flex',
              justifyContent: msg.received ? 'flex-start' : 'flex-end'}}>
            <Paper
              sx={{color: theme.text.primary,bgcolor: theme.background.light,maxWidth: '70%',padding: '8px 12px', position: 'relative',
                borderRadius: msg.received ? '12px 12px 12px 0' : '12px 12px 0 12px',}} >
              {msg.type === 'audio' ? (
                <Box>
                  <audio controls src={msg.audioUrl} />
                  <Typography variant="caption">
                    {formatTime(msg.duration)}
                  </Typography>
                </Box>
              ) : msg.type === 'attachment' ? (
                <Typography>
                  <a href={msg.attachmentUrl} target="_blank" rel="noopener noreferrer">
                    {msg.text}
                  </a>
                </Typography>
              ) : (
                <Typography>{msg.text}</Typography>
              )}
              {msg.received && (
                <IconButton size="small" sx={{ position: 'absolute', top: '-10px', right: '-10px' }}>
                  <Delete fontSize="small" />
                </IconButton>
              )}
            </Paper>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <Box sx={{bgcolor: '#F8F7F4',padding: '12px',display: 'flex',alignItems: 'center',gap: '8px',
          borderTop: `1px solid ${theme.border}`,}}>
        {isRecording ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1 }}>
            <Typography sx={{ color: theme.accent.red }}>
              Recording: {formatTime(recordingDuration)}
            </Typography>
            <IconButton onClick={stopRecordingAndSend}>
              <Stop sx={{ color: theme.accent.red }} />
            </IconButton>
            <IconButton onClick={cancelRecording}>
              <Delete />
            </IconButton>
          </Box>
        ) : (
          <>
            <IconButton onClick={startRecording}>
              <Mic />
            </IconButton>
            <IconButton onClick={triggerFileInput}>
              <AttachFile />
            </IconButton>
            <input type="file"
              accept="image/*,video/*,audio/mpeg,application/pdf"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <TextField fullWidth variant="outlined"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  bgcolor: theme.background.primary
                }
              }}
            />
            <IconButton onClick={sendMessage} disabled={!message.trim()}>
              <Send sx={{ color: message.trim() ? theme.text.primary : theme.text.secondary }} />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ChatSection;