// import React, { useState, useEffect } from 'react';
// import { Box, Avatar, Typography, TextField, IconButton, List, ListItem, ListItemAvatar, ListItemText, Divider, Button, InputAdornment } from '@mui/material';
// import { Send, AttachFile, Mic, Search, VideoCall, FavoriteBorder, PersonAdd } from '@mui/icons-material';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000'); // اتصال بـ Socket.IO

// const ChatUIComponent = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   // استماع للرسائل من السيرفر
//   useEffect(() => {
//     socket.on('message', (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     return () => {
//       socket.off('message'); // تنظيف الـ event listener عند الخروج
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim()) {
//       // إرسال الرسالة للسيرفر
//       socket.emit('message', message);
//       setMessages((prevMessages) => [...prevMessages, message]); // إضافة الرسالة الجديدة للواجهة
//       setMessage(''); // مسح محتوى حقل النص
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>

//       {/* Left Sidebar */}
//       <Box sx={{ width: 300, bgcolor: '#f3f3f3', borderRight: '1px solid #ccc', p: 2 }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//           <Avatar src="/david.jpg" />
//           <Box ml={2}>
//             <Typography variant="subtitle1" fontWeight="bold">David Peters</Typography>
//             <Typography variant="caption">Senior Developer</Typography>
//           </Box>
//         </Box>
//         <TextField
//           variant="outlined"
//           placeholder="Search Here..."
//           size="small"
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <Search fontSize="small" />
//               </InputAdornment>
//             ),
//           }}
//         />
//         <List sx={{ mt: 2 }}>
//           {['Lisa Roy', 'Jamie Taylor', 'Jason Roy', 'Amy Frost', 'Paul Wilson', 'Ana Williams'].map((name, index) => (
//             <React.Fragment key={index}>
//               <ListItem button>
//                 <ListItemAvatar><Avatar /></ListItemAvatar>
//                 <ListItemText primary={name} secondary="Message preview..." />
//               </ListItem>
//               <Divider />
//             </React.Fragment>
//           ))}
//         </List>
//       </Box>

//       {/* Chat Section */}
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #ccc' }}>
//           <Avatar />
//           <Box ml={2}>
//             <Typography fontWeight="bold">Dianne Jhonson</Typography>
//           </Box>
//         </Box>

//         <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
//           {/* Chat bubbles */}
//           {messages.map((msg, index) => (
//             <Typography
//               key={index}
//               sx={{
//                 bgcolor: index % 2 === 0 ? '#f1f1f1' : '#2196f3',
//                 color: index % 2 === 0 ? 'black' : 'white',
//                 p: 1.5,
//                 borderRadius: 2,
//                 maxWidth: '50%',
//                 mb: 1,
//                 ml: index % 2 === 0 ? 0 : 'auto',
//               }}
//             >
//               {msg}
//             </Typography>
//           ))}
//         </Box>

//         {/* Message Input */}
//         <Box sx={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #ccc', p: 2 }}>
//           <IconButton><Mic /></IconButton>
//           <TextField
//             fullWidth
//             placeholder="Write something..."
//             variant="outlined"
//             size="small"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             sx={{ mx: 2 }}
//           />
//           <IconButton><AttachFile /></IconButton>
//           <IconButton onClick={sendMessage}><Send /></IconButton>
//         </Box>
//       </Box>

//       {/* Right Profile Section */}
//       <Box sx={{ width: 280, bgcolor: '#f9f9f9', borderLeft: '1px solid #ccc', p: 2 }}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Avatar sx={{ width: 80, height: 80, mb: 1 }} />
//           <Typography fontWeight="bold">Dianne Jhonson</Typography>
//           <Typography variant="caption" color="textSecondary">Junior Developer</Typography>

//           <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
//             <Button startIcon={<PersonAdd />} size="small" variant="outlined">Chat</Button>
//             <Button startIcon={<VideoCall />} size="small" variant="outlined">Video Call</Button>
//           </Box>

//           <Box sx={{ mt: 2 }}>
//             <Typography variant="subtitle2">Attachments</Typography>
//             <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//               <Button variant="contained" size="small">PDF</Button>
//               <Button variant="contained" size="small">VIDEO</Button>
//               <Button variant="contained" size="small">MP3</Button>
//               <Button variant="contained" size="small">IMAGE</Button>
//             </Box>
//             <Button sx={{ mt: 1 }} size="small" fullWidth>View All</Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ChatUIComponent;


import React, { useState, useEffect, useRef } from 'react';
import { Box, Avatar, Typography, TextField, IconButton, List, ListItem, ListItemAvatar, ListItemText, Divider, Button, InputAdornment, Dialog, Tabs, Tab, CircularProgress } from '@mui/material';
import { Send, AttachFile, Mic, Search, VideoCall, PersonAdd, Close, Call, Stop, Delete } from '@mui/icons-material';
import io from 'socket.io-client';
import Peer from 'peerjs';

// Connect to Socket.IO server
const socket = io('http://localhost:3000');

const ChatUIComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState([]); // Friends list
  const [peer, setPeer] = useState(null); // PeerJS instance
  const [call, setCall] = useState(null); // For incoming calls
  const [activeTab, setActiveTab] = useState(0); // 0 for chats, 1 for friends
  const [videoCallActive, setVideoCallActive] = useState(false); // Video call status
  const [activeChat, setActiveChat] = useState('Dianne Johnson'); // Current active chat
  
  // Recording states
  const [isRecording, setIsRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [audioChunks, setAudioChunks] = useState([]);
  const recordingTimer = useRef(null);
  
  const localVideoRef = useRef(null); // Reference for local video
  const remoteVideoRef = useRef(null); // Reference for remote video

  // List of people (or chats)
  const people = ['Lisa Roy', 'Jamie Taylor', 'Jason Roy', 'Amy Frost', 'Paul Wilson', 'Ana Williams'];

  // Listen for messages from the server
  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, { text: msg, received: true }]);
    });

    // Create PeerJS connection
    const peerInstance = new Peer();
    setPeer(peerInstance);

    // Listen for incoming calls
    peerInstance.on('call', (incomingCall) => {
      setVideoCallActive(true);
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          incomingCall.answer(stream); // Answer the call
          setCall(incomingCall);
          
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }

          // Connect remote video
          incomingCall.on('stream', (remoteStream) => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
            }
          });
        })
        .catch((err) => console.error('Error accessing media devices:', err));
    });

    return () => {
      socket.off('message');
      if (peer) {
        peer.destroy(); // Clean up peer when leaving page
      }
      
      // Stop any active media streams
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      
      // Clear timer
      if (recordingTimer.current) {
        clearInterval(recordingTimer.current);
      }
    };
  }, [audioStream]);

  const sendMessage = () => {
    if (message.trim()) {
      // Send message to server
      socket.emit('message', message);
      setMessages((prevMessages) => [...prevMessages, { text: message, received: false }]); // Add new message to UI
      setMessage(''); // Clear text field
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search state
  };

  // Filter people based on search input
  const filteredPeople = people.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Filter friends based on search input
  const filteredFriends = friends.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add a friend
  const addFriend = (friendName) => {
    if (!friends.includes(friendName)) {
      setFriends((prevFriends) => [...prevFriends, friendName]);
    }
  };

  // Change active chat
  const changeActiveChat = (personName) => {
    setActiveChat(personName);
    setMessages([]); // Reset messages when changing chat
  };

  // Video calls
  const startVideoCall = () => {
    setVideoCallActive(true);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream; // Display local video
        }

        // Assuming there's a friend's ID
        if (peer) {
          // The following code is for illustration only - should be replaced with a real ID
          // peer.call('friendPeerId', stream);
        }
      })
      .catch((err) => console.error('Error accessing media devices:', err));
  };

  // Make a video call
  const makeCall = (friendPeerId) => {
    setVideoCallActive(true);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream; // Display local video
        }

        if (peer) {
          const call = peer.call(friendPeerId, stream);
          setCall(call);

          // Display remote video
          call.on('stream', (remoteStream) => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
            }
          });
        }
      })
      .catch((err) => console.error('Error accessing media devices:', err));
  };

  // End video call
  const endVideoCall = () => {
    setVideoCallActive(false);
    
    // Stop video streams
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
      localVideoRef.current.srcObject = null;
    }
    
    if (remoteVideoRef.current && remoteVideoRef.current.srcObject) {
      remoteVideoRef.current.srcObject = null;
    }
    
    if (call) {
      call.close();
      setCall(null);
    }
  };

  // Start audio recording
  const startRecording = () => {
    setAudioChunks([]);
    setRecordingDuration(0);
    
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        setAudioStream(stream);
        
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        
        recorder.ondataavailable = (e) => {
          setAudioChunks(chunks => [...chunks, e.data]);
        };
        
        // Start recording
        recorder.start(200); // Collect data every 200ms
        setIsRecording(true);
        
        // Start timer
        recordingTimer.current = setInterval(() => {
          setRecordingDuration(prev => prev + 1);
        }, 1000);
      })
      .catch((err) => console.error('Error accessing microphone:', err));
  };

  // Stop audio recording and send
  const stopRecordingAndSend = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      
      // Stop timer
      clearInterval(recordingTimer.current);
      recordingTimer.current = null;
      
      // Stop audio tracks
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      
      // Process the audio after a slight delay to ensure all data is collected
      setTimeout(() => {
        if (audioChunks.length > 0) {
          const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
          const audioUrl = URL.createObjectURL(audioBlob);
          
          // Send the audio as a message
          setMessages((prevMessages) => [
            ...prevMessages, 
            { 
              type: 'audio',
              received: false, 
              audioUrl: audioUrl,
              duration: recordingDuration 
            }
          ]);
          
          // Reset recording related states
          setAudioChunks([]);
          setRecordingDuration(0);
          
          // You could also upload the audio to a server here
          // const formData = new FormData();
          // formData.append('audio', audioBlob, 'recording.mp3');
          // fetch('/api/upload-audio', { method: 'POST', body: formData });
        }
      }, 300);
    }
  };
  
  // Cancel recording
  const cancelRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      
      // Stop timer
      clearInterval(recordingTimer.current);
      recordingTimer.current = null;
      
      // Stop audio tracks
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      
      // Reset recording related states
      setAudioChunks([]);
      setRecordingDuration(0);
    }
  };

  // Format recording time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  // Theme colors
  const theme = {
    background: {
      primary: '#F8F7F4',
      secondary: '#F2F0E9',
      dark: '#000000',
      light: '#FFFFFF'
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
      light: '#FFFFFF'
    },
    border: '#E0E0E0',
    accent: {
      red: '#FF3B30',
      green: '#34C759'
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif', bgcolor: theme.background.primary }}>

      {/* Left Sidebar */}
      <Box sx={{ width: 300, bgcolor: theme.background.light, borderRight: `1px solid ${theme.border}`, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: `1px solid ${theme.border}`, bgcolor: theme.background.light }}>
          <Avatar sx={{ bgcolor: theme.background.dark }} />
          <Box ml={2}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: theme.text.primary }}>David Peters</Typography>
        
          </Box>
        </Box>
        
        <Box sx={{ p: 2, borderBottom: `1px solid ${theme.border}`, bgcolor: theme.background.light }}>
          <TextField
            variant="outlined"
            placeholder="Search Here..."
            size="small"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.border,
                },
                '&:hover fieldset': {
                  borderColor: theme.text.secondary,
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.text.primary,
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" sx={{ color: theme.text.secondary }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          sx={{ 
            borderBottom: `1px solid ${theme.border}`,
            '& .MuiTab-root': { color: theme.text.secondary },
            '& .Mui-selected': { color: theme.text.primary },
            '& .MuiTabs-indicator': { backgroundColor: theme.text.primary },
          }}
        >
          <Tab label="Chats" />
          <Tab label="Friends" />
        </Tabs>
        
        <Box sx={{ flexGrow: 1, overflow: 'auto', bgcolor: theme.background.light }}>
          {activeTab === 0 ? (
            <List>
              {filteredPeople.length > 0 ? (
                filteredPeople.map((name, index) => (
                  <React.Fragment key={index}>
                    <ListItem 
                      button 
                      selected={activeChat === name}
                      onClick={() => changeActiveChat(name)}
                      sx={{ 
                        '&.Mui-selected': { 
                          bgcolor: theme.background.secondary,
                          '&:hover': { bgcolor: theme.background.secondary }
                        },
                        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.05)' }
                      }}
                    >
                      <ListItemAvatar><Avatar sx={{ bgcolor: theme.background.dark }} /></ListItemAvatar>
                      <ListItemText 
                        primary={<Typography sx={{ color: theme.text.primary }}>{name}</Typography>} 
                        secondary={<Typography variant="body2" sx={{ color: theme.text.secondary }}>Message preview...</Typography>} 
                      />
                      {!friends.includes(name) && (
                        <IconButton size="small" onClick={(e) => {
                          e.stopPropagation();
                          addFriend(name);
                        }}
                        sx={{ color: theme.text.primary }}
                        >
                          <PersonAdd fontSize="small" />
                        </IconButton>
                      )}
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              ) : (
                <Typography sx={{ textAlign: 'center', color: theme.text.secondary, p: 2 }}>No people found.</Typography>
              )}
            </List>
          ) : (
            <List>
              {filteredFriends.length > 0 ? (
                filteredFriends.map((name, index) => (
                  <React.Fragment key={index}>
                    <ListItem 
                      button 
                      selected={activeChat === name}
                      onClick={() => changeActiveChat(name)}
                      sx={{ 
                        '&.Mui-selected': { 
                          bgcolor: theme.background.secondary,
                          '&:hover': { bgcolor: theme.background.secondary }
                        },
                        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.05)' }
                      }}
                    >
                      <ListItemAvatar><Avatar sx={{ bgcolor: theme.background.dark }} /></ListItemAvatar>
                      <ListItemText 
                        primary={<Typography sx={{ color: theme.text.primary }}>{name}</Typography>} 
                        secondary={<Typography variant="body2" sx={{ color: theme.text.secondary }}>Friend</Typography>} 
                      />
                      <IconButton size="small" onClick={(e) => {
                        e.stopPropagation();
                        makeCall(`peer-id-${name.replace(/\s/g, '').toLowerCase()}`); // Using temporary ID
                      }}
                      sx={{ color: theme.text.primary }}
                      >
                        <Call fontSize="small" />
                      </IconButton>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              ) : (
                <Typography sx={{ textAlign: 'center', color: theme.text.secondary, p: 2 }}>No friends found.</Typography>
              )}
            </List>
          )}
        </Box>
      </Box>

      {/* Chat Section */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: theme.background.primary }}>
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: `1px solid ${theme.border}`, justifyContent: 'space-between', bgcolor: theme.background.light }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: theme.background.dark }} />
            <Box ml={2}>
              <Typography fontWeight="bold" sx={{ color: theme.text.primary }}>{activeChat}</Typography>
            </Box>
          </Box>
          <Box>
            <IconButton onClick={startVideoCall} sx={{ color: theme.text.primary }}><VideoCall /></IconButton>
          </Box>
        </Box>

        <Box sx={{ 
          flexGrow: 1, 
          overflowY: 'auto', 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: theme.background.primary 
        }}>
          {/* Chat bubbles */}
          {messages.map((msg, index) => (
            <Box key={index} sx={{ mb: 2, alignSelf: msg.received ? 'flex-start' : 'flex-end' }}>
              {msg.type === 'audio' ? (
                <Box
                  sx={{
                    bgcolor: msg.received ? theme.background.light : theme.background.dark,
                    color: msg.received ? theme.text.primary : theme.text.light,
                    p: 1.5,
                    borderRadius: 2,
                    maxWidth: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.1)'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'space-between' }}>
                    <Typography variant="caption">🎤 Voice Message</Typography>
                    <Typography variant="caption">{formatTime(msg.duration)}</Typography>
                  </Box>
                  <audio controls src={msg.audioUrl} style={{ width: '100%' }} />
                </Box>
              ) : (
                <Typography
                  sx={{
                    bgcolor: msg.received ? theme.background.light : theme.background.dark,
                    color: msg.received ? theme.text.primary : theme.text.light,
                    p: 1.5,
                    borderRadius: 2,
                    maxWidth: '60%',
                    wordBreak: 'break-word',
                    boxShadow: '0px 1px 3px rgba(0,0,0,0.1)'
                  }}
                >
                  {msg.text}
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        {/* Message Input */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          borderTop: `1px solid ${theme.border}`, 
          bgcolor: theme.background.light 
        }}>
          {/* Recording UI */}
          {isRecording && (
            <Box sx={{ 
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: theme.background.secondary,
              borderBottom: `1px solid ${theme.border}`
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ 
                  width: 10, 
                  height: 10, 
                  borderRadius: '50%', 
                  bgcolor: theme.accent.red,
                  mr: 1,
                  animation: 'pulse 1.5s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                  },
                }} />
                <Typography variant="body2" sx={{ mr: 2 }}>Recording</Typography>
                <Typography variant="body2" fontWeight="bold">{formatTime(recordingDuration)}</Typography>
              </Box>
              <Box>
                <IconButton 
                  onClick={cancelRecording} 
                  size="small" 
                  sx={{ color: theme.accent.red, mr: 1 }}
                >
                  <Delete />
                </IconButton>
                <IconButton 
                  onClick={stopRecordingAndSend} 
                  size="small" 
                  sx={{ 
                    bgcolor: theme.background.dark,
                    color: theme.text.light,
                    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.8)' }
                  }}
                >
                  <Send fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          )}
          
          {/* Regular message input */}
          <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            {!isRecording ? (
              <IconButton 
                onClick={startRecording}
                sx={{ color: theme.text.primary }}
              >
                <Mic />
              </IconButton>
            ) : (
              <IconButton 
                onClick={stopRecordingAndSend}
                sx={{ 
                  color: theme.accent.red,
                  animation: 'pulse 1.5s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                  },
                }}
              >
                <Stop />
              </IconButton>
            )}
            <TextField
              fullWidth
              placeholder="Write something..."
              variant="outlined"
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
              disabled={isRecording}
              sx={{ 
                mx: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.border,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.text.secondary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.text.primary,
                  },
                },
              }}
            />
            <IconButton sx={{ color: theme.text.primary }} disabled={isRecording}><AttachFile /></IconButton>
            <IconButton onClick={sendMessage} sx={{ color: theme.text.primary }} disabled={isRecording || !message.trim()}>
              <Send />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Right Profile Section */}
      <Box sx={{ width: 280, bgcolor: theme.background.light, borderLeft: `1px solid ${theme.border}`, p: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ width: 80, height: 80, mb: 1, bgcolor: theme.background.dark }} />
          <Typography fontWeight="bold" sx={{ color: theme.text.primary }}>{activeChat}</Typography>
          <Typography variant="caption" sx={{ color: theme.text.secondary }}>
            {friends.includes(activeChat) ? 'Friend' : 'User'}
          </Typography>

          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            {!friends.includes(activeChat) ? (
              <Button 
                startIcon={<PersonAdd />} 
                size="small" 
                variant="outlined"
                onClick={() => addFriend(activeChat)}
                sx={{ 
                  borderColor: theme.background.dark,
                  color: theme.text.primary,
                  '&:hover': {
                    borderColor: theme.text.primary,
                    bgcolor: 'rgba(0, 0, 0, 0.05)'
                  }
                }}
              >
                Add Friend
              </Button>
            ) : (
              <Button 
                startIcon={<VideoCall />} 
                size="small" 
                variant="contained" 
                onClick={startVideoCall}
                sx={{ 
                  bgcolor: theme.background.dark,
                  color: theme.text.light,
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)'
                  }
                }}
              >
                Video Call
              </Button>
            )}
          </Box>

          <Box sx={{ mt: 4, width: '100%' }}>
            <Typography variant="subtitle2" sx={{ mb: 1, color: theme.text.primary }}>Attachments</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  bgcolor: theme.background.dark,
                  color: theme.text.light,
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)'
                  }
                }}
              >PDF</Button>
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  bgcolor: theme.background.dark,
                  color: theme.text.light,
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)'
                  }
                }}
              >VIDEO</Button>
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  bgcolor: theme.background.dark,
                  color: theme.text.light,
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)'
                  }
                }}
              >MP3</Button>
              <Button 
                variant="contained" 
                size="small"
                sx={{ 
                  bgcolor: theme.background.dark,
                  color: theme.text.light,
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.8)'
                  }
                }}
              >IMAGE</Button>
            </Box>
            <Button 
              sx={{ 
                mt: 2,
                color: theme.text.primary,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.05)'
                }
              }} 
              size="small" 
              fullWidth
            >View All</Button>
          </Box>
        </Box>
      </Box>

      {/* Video Call Dialog */}
      <Dialog
        open={videoCallActive}
        fullWidth
        maxWidth="md"
        onClose={endVideoCall}
        PaperProps={{
          style: {
            backgroundColor: '#121212',
            color: 'white',
            borderRadius: '12px',
            overflow: 'hidden'
          }
        }}
      >
        <Box sx={{ position: 'relative', height: '70vh', display: 'flex', flexDirection: 'column' }}>
          {/* Main Video (Remote) */}
          <Box sx={{ 
            position: 'relative',
            flexGrow: 1,
            bgcolor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <video 
              ref={remoteVideoRef} 
              autoPlay 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                display: 'block'
              }}
            />
            
            {/* Controls */}
            <Box sx={{ 
              position: 'absolute', 
              bottom: '20px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 2,
              bgcolor: 'rgba(0,0,0,0.5)',
              padding: 1,
              borderRadius: 4
            }}>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <Mic />
              </IconButton>
              <IconButton 
                sx={{ bgcolor: '#f44336', color: 'white' }}
                onClick={endVideoCall}
              >
                <Close />
              </IconButton>
              <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                <VideoCall />
              </IconButton>
            </Box>
          </Box>
          
          {/* Local Video (Picture-in-Picture) */}
          <Box sx={{ 
            position: 'absolute', 
            width: '150px', 
            height: '150px', 
            bottom: '85px', 
            right: '20px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '2px solid white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            <video 
              ref={localVideoRef} 
              autoPlay 
              muted 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                backgroundColor: '#333'
              }}
            />
          </Box>
          
          {/* Call Info */}
          <Box sx={{ 
            position: 'absolute', 
            top: '20px', 
            left: '20px', 
            display: 'flex', 
            alignItems: 'center',
            bgcolor: 'rgba(0,0,0,0.5)',
            padding: '5px 10px',
            borderRadius: '8px'
          }}>
            <Avatar sx={{ width: 35, height: 35 }} />
            <Typography sx={{ ml: 1 }}>{activeChat}</Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ChatUIComponent;