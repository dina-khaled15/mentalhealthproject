import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import {Mic,MicOff,Videocam,VideocamOff,Fullscreen,FullscreenExit} from '@mui/icons-material';

const VideoCallDialog = ({
  videoCallActive,
  endVideoCall,
  activeChat,
  localVideoRef,
  remoteVideoRef
}) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  const toggleMic = () => {
    const stream = localVideoRef.current?.srcObject;
    if (stream) {
      stream.getAudioTracks().forEach(track => {
        track.enabled = !micOn;
      });
    }
    setMicOn(prev => !prev);
  };

  const toggleVideo = () => {
    const stream = localVideoRef.current?.srcObject;
    if (stream) {
      stream.getVideoTracks().forEach(track => {
        track.enabled = !videoOn;
      });
    }
    setVideoOn(prev => !prev);
  };

  if (!videoCallActive) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: fullscreen ? 0 : '10%',
        left: fullscreen ? 0 : '10%',
        width: fullscreen ? '100vw' : '80vw',
        height: fullscreen ? '100vh' : '80vh',
        bgcolor: '#000',
        zIndex: 1300,
        borderRadius: fullscreen ? 0 : '12px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0,0,0,0.5)'
      }}>

      <video ref={remoteVideoRef} autoPlay
        style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%', objectFit: 'cover',zIndex: 1}}/>

      <video ref={localVideoRef} autoPlay muted
        style={{position: 'absolute',bottom: 24,right: 24,width: '250px',height: '180px',objectFit: 'cover',
          borderRadius: '10px',border: '2px solid white',zIndex: 2}}/>
      <Box sx={{position: 'absolute',top: 16,left: 16,color: '#fff',zIndex: 2}}>
        <Typography variant="subtitle1" fontWeight="bold">
          {activeChat}
        </Typography>
      </Box>

      <IconButton
        onClick={() => setFullscreen(prev => !prev)}
        sx={{position: 'absolute',top: 16,right: 16,color: '#fff',zIndex: 2}}>
        {fullscreen ? <FullscreenExit /> : <Fullscreen />}
      </IconButton>

      <Box sx={{position: 'absolute',bottom: 24,left: '50%',transform: 'translateX(-50%)',display: 'flex',gap: 3,zIndex: 2}}>
        <IconButton onClick={toggleMic}
          sx={{bgcolor: '#fff',width: 56,height: 56,borderRadius: '50%','&:hover': { bgcolor: '#eee' }}}>
          {micOn ? <Mic /> : <MicOff />}
        </IconButton>

        <IconButton onClick={endVideoCall}
          sx={{bgcolor: 'red',color: '#fff',width: 56,height: 56,borderRadius: '50%',fontWeight: 'bold',fontSize: 22,
            '&:hover': { bgcolor: '#c00' }}}>
          ⨉
        </IconButton>

        <IconButton onClick={toggleVideo} sx={{bgcolor: '#fff',width: 56,height: 56,borderRadius: '50%',
            '&:hover': { bgcolor: '#eee' }}}>
          {videoOn ? <Videocam /> : <VideocamOff />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoCallDialog;
