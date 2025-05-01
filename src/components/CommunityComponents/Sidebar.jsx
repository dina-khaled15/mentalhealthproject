import React from 'react';
import { Box, Avatar, Typography, TextField, InputAdornment, Tabs, Tab, List, ListItem, ListItemAvatar, ListItemText, Divider, IconButton } from '@mui/material';
import { Search, PersonAdd, Call } from '@mui/icons-material';

const Sidebar = ({ theme, searchQuery, handleSearchChange, activeTab, setActiveTab, activeChat, changeActiveChat, filteredPeople, filteredFriends, friends, addFriend, makeCall }) => {
  return (
    <Box sx={{ width: 300, bgcolor: '#F8F7F4', borderRight: `1px solid ${theme.border}`, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: `1px solid ${theme.border}`, bgcolor: '#F8F7F4', }}>
        <Avatar sx={{ bgcolor: theme.background.dark }} />
        <Box ml={2}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: theme.text.primary }}>David Peters</Typography>
        </Box>
      </Box>
      
      <Box sx={{ p: 2, borderBottom: `1px solid ${theme.border}`, bgcolor: '#F8F7F4', }}>
        <TextField
          variant="outlined"
          placeholder="Search Here..."
          size="small"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: theme.border },
              '&:hover fieldset': { borderColor: theme.text.secondary },
              '&.Mui-focused fieldset': { borderColor: theme.text.primary },
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
      
      <Box sx={{ flexGrow: 1, overflow: 'auto', bgcolor: '#F8F7F4' }}>
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
                        bgcolor: '#F8F7F4',
                        '&:hover': { bgcolor: '#F8F7F4' }
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
                      }} sx={{ color: theme.text.primary }}>
                        <PersonAdd fontSize="small" />
                      </IconButton>
                    )}
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))
            ) : (
              <Typography sx={{ textAlign: 'center', color:'#F8F7F4', p: 2 }}>No people found.</Typography>
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
                        bgcolor: '#F8F7F4',
                        '&:hover': { bgcolor: '#F8F7F4' }
                      },
                      '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.05)' }
                    }}
                  >
                    <ListItemAvatar><Avatar sx={{ bgcolor: theme.text.primary }} /></ListItemAvatar>
                    <ListItemText 
                      primary={<Typography sx={{ color:theme.text.primary }}>{name}</Typography>} 
                      secondary={<Typography variant="body2" sx={{ color: theme.text.secondary }}>Friend</Typography>} 
                    />
                    <IconButton size="small" onClick={(e) => {
                      e.stopPropagation();
                      makeCall(`peer-id-${name.replace(/\s/g, '').toLowerCase()}`);
                    }} sx={{ color: theme.text.primary }}>
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
  );
};

export default Sidebar;