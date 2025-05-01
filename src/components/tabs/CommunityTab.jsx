import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import io from 'socket.io-client';
import Peer from 'peerjs';
import Sidebar from '../CommunityComponents/Sidebar';
import ChatSection from '../CommunityComponents/ChatSection';
import ProfileSection from '../CommunityComponents/ProfileSection';
import VideoCallDialog from '../CommunityComponents/VideoCallDialog';

const socket = io('http://localhost:3000');

const CommunityTab = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = useState([]);
  const [peer, setPeer] = useState(null);
  const [call, setCall] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [videoCallActive, setVideoCallActive] = useState(false);
  const [activeChat, setActiveChat] = useState('Dianne Johnson');
  const [isRecording, setIsRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [audioChunks, setAudioChunks] = useState([]);
  const recordingTimer = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const people = ['Lisa Roy', 'Jamie Taylor', 'Jason Roy', 'Amy Frost', 'Paul Wilson', 'Ana Williams'];

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

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, { text: msg, received: true }]);
    });

    const peerInstance = new Peer();
    setPeer(peerInstance);

    peerInstance.on('call', (incomingCall) => {
      setVideoCallActive(true);
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          incomingCall.answer(stream);
          setCall(incomingCall);
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }
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
        peer.destroy();
      }
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      if (recordingTimer.current) {
        clearInterval(recordingTimer.current);
      }
    };
  }, [audioStream]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', message);
      setMessages((prevMessages) => [...prevMessages, { text: message, received: false }]);
      setMessage('');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPeople = people.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFriends = friends.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addFriend = (friendName) => {
    if (!friends.includes(friendName)) {
      setFriends((prevFriends) => [...prevFriends, friendName]);
    }
  };

  const changeActiveChat = (personName) => {
    setActiveChat(personName);
    setMessages([]);
  };

  const startVideoCall = () => {
    setVideoCallActive(true);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error('Error accessing media devices:', err));
  };

  const makeCall = (friendPeerId) => {
    setVideoCallActive(true);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        if (peer) {
          const call = peer.call(friendPeerId, stream);
          setCall(call);
          call.on('stream', (remoteStream) => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
            }
          });
        }
      })
      .catch((err) => console.error('Error accessing media devices:', err));
  };

  const endVideoCall = () => {
    setVideoCallActive(false);
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
        recorder.start(200);
        setIsRecording(true);
        recordingTimer.current = setInterval(() => {
          setRecordingDuration(prev => prev + 1);
        }, 1000);
      })
      .catch((err) => console.error('Error accessing microphone:', err));
  };

  const stopRecordingAndSend = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      clearInterval(recordingTimer.current);
      recordingTimer.current = null;
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      setTimeout(() => {
        if (audioChunks.length > 0) {
          const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setMessages((prevMessages) => [
            ...prevMessages, 
            { 
              type: 'audio',
              received: false, 
              audioUrl: audioUrl,
              duration: recordingDuration 
            }
          ]);
          setAudioChunks([]);
          setRecordingDuration(0);
        }
      }, 300);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      clearInterval(recordingTimer.current);
      recordingTimer.current = null;
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      setAudioChunks([]);
      setRecordingDuration(0);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif', bgcolor: theme.background.primary }}>
      <Sidebar
        theme={theme}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeChat={activeChat}
        changeActiveChat={changeActiveChat}
        filteredPeople={filteredPeople}
        filteredFriends={filteredFriends}
        friends={friends}
        addFriend={addFriend}
        makeCall={makeCall}
      />
      <ChatSection
        theme={theme}
        activeChat={activeChat}
        messages={messages}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecordingAndSend={stopRecordingAndSend}
        cancelRecording={cancelRecording}
        recordingDuration={recordingDuration}
        formatTime={formatTime}
        startVideoCall={startVideoCall}
      />
      <ProfileSection
        theme={theme}
        activeChat={activeChat}
        friends={friends}
        addFriend={addFriend}
        startVideoCall={startVideoCall}
      />
      <VideoCallDialog
        videoCallActive={videoCallActive}
        endVideoCall={endVideoCall}
        activeChat={activeChat}
        localVideoRef={localVideoRef}
        remoteVideoRef={remoteVideoRef}
      />
    </Box>
  );
};

export default CommunityTab;