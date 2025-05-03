import { useState } from 'react';
import { FaUser, FaUsers, FaCheckCircle, FaHome } from 'react-icons/fa'; // Icons
import { Box, Button, Drawer, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import InfoTab from '../components/tabs/InfoTab';
import CommunityTab from '../components/tabs/CommunityTab';
import GoalsTrackTab from '../components/tabs/GoalsTrackTab';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('info');
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return <InfoTab />;
      case 'community':
        return <CommunityTab />;
      case 'goals':
        return <GoalsTrackTab />;
      default:
        return null;
    }
  };
  const tabs = [
    { key: 'info', label: 'User Info', icon: <FaUser /> },
    { key: 'community', label: 'Community', icon: <FaUsers /> },
    { key: 'goals', label: 'Goals Track', icon: <FaCheckCircle /> },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', bgcolor: '#F2F0E9', p: 2 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={5}>
            User Profile
          </Typography>
          <List>
            {tabs.map((tab) => (
              <ListItem key={tab.key} disablePadding>
                <ListItemButton
                  selected={activeTab === tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    '&.Mui-selected': { bgcolor: 'white', color: 'black', fontWeight: 'bold' },
                    '&:hover': { bgcolor: 'black', color: 'white' },
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit' }}>{tab.icon}</ListItemIcon>
                  <ListItemText primary={tab.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 'auto', pt: 5 }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<FaHome />}
              sx={{
                mb: 2,
                bgcolor: 'black',
                color: 'white',
                '&:hover': {
                  bgcolor: '#333',
                },
              }}
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
            <Button variant="contained" sx={{
                mb: 2,
                bgcolor: 'black',
                color: 'white',
                '&:hover': {
                  bgcolor: '#333',
                },
              }} fullWidth>
              Log out
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#F8F7F4' }}>
        {renderTabContent()}
      </Box>
    </Box>
  );
}
