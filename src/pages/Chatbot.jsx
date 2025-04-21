import React, { useState, useEffect, useRef } from "react";
import { 
  Box, 
  Fab, 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  IconButton, 
  Avatar, 
  Tooltip,
  CircularProgress,
  InputAdornment
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentStage, setCurrentStage] = useState("initial");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  // Color theme
  const colors = {
    primary: "#000000",
    lightBg: "#F8F7F4",
    mediumBg: "#F2F0E9",
    white: "#FFFFFF",
    gray: "#757575",
    lightGray: "#e0e0e0",
    darkGray: "#333333",
    userBubble: "#F2F0E9",
    botBubble: "#FFFFFF",
    buttonPrimary: "#000000",
    buttonSecondary: "#F2F0E9"
  };
  
  // Stage definitions with inline buttons
  const stages = {
    initial: {
      greeting: "Hello! How can I assist you today?",
      messageButtons: [
        { id: "medical", text: "Request Medical Consultation", nextStage: "medical", pageUrl: null },
        { id: "anxiety", text: "Help with Anxiety or Stress", nextStage: "anxiety", pageUrl: null },
        { id: "general", text: "General Information", nextStage: "general", pageUrl: null }
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary }
      ]
    },
    medical: {
      greeting: "We will guide you to the session booking page.",
      messageButtons: [
        { id: "booking", text: "Go to Booking page", nextStage: "end", pageUrl: "/booking" }
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
        { id: "back", text: "Back to options", nextStage: "initial", color: colors.buttonSecondary }
      ]
    },
    anxiety: {
      greeting: "Awesome! Taking you to the page now where you can find more helpful details.",
      messageButtons: [
        { id: "issues", text: "Go to Issues page", nextStage: "end", pageUrl: "/issues" }
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
        { id: "back", text: "Back to options", nextStage: "initial", color: colors.buttonSecondary }
      ]
    },
    general: {
      greeting: "Here's a page where you can find helpful information and articles.",
      messageButtons: [
        { id: "aboutus", text: "About us", nextStage: "end", pageUrl: "/about-us" },
        { id: "kids", text: "Kids", nextStage: "end", pageUrl: "/kids" }
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
        { id: "back", text: "Back to options", nextStage: "initial", color: colors.buttonSecondary }
      ]
    },
    end: {
      greeting: "Thank you for using our service. Is there anything else I can help you with?",
      messageButtons: [],
      options: [
        { id: "restart", text: "Start Over", nextStage: "initial", color: colors.buttonPrimary },
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary }
      ]
    }
  };

  // Initial greeting when chat opens
  useEffect(() => {
    if (open && messages.length === 0) {
      displayGreetingWithOptions("initial");
    }
  }, [open]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat mode is activated
  useEffect(() => {
    if (isChatMode && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isChatMode]);

  const displayGreetingWithOptions = (stage) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          from: "bot", 
          text: stages[stage].greeting,
          buttons: stages[stage].messageButtons || []
        }
      ]);
      setIsTyping(false);
      setCurrentStage(stage);
    }, 1000);
  };

  const navigateToPage = (url) => {
    if (url) {
      window.location.href = url;
    }
  };

  const handleChatInputSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    setMessages(prev => [
      ...prev,
      { from: "user", text: input }
    ]);
    
    // Clear input
    setInput("");
    
    // Bot response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { 
          from: "bot", 
          text: "Thank you for your message. Our representative will get back to you shortly. Would you like to continue exploring other options?"
        }
      ]);
    }, 1500);
  };

  const startChatMode = () => {
    setIsChatMode(true);
    setMessages(prev => [
      ...prev,
      { 
        from: "bot", 
        text: "You can type your message below. How can we assist you today?"
      }
    ]);
  };

  const handleOptionClick = (option) => {
    // Add user selection to chat
    setMessages(prev => [
      ...prev,
      { from: "user", text: option.text }
    ]);
    
    // Check for special actions
    if (option.action === "startChat") {
      startChatMode();
      return;
    }
    
    // If this option has a page URL, navigate to that page after a delay
    if (option.pageUrl) {
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
          ...prev,
          { from: "bot", text: `Redirecting you to ${option.pageUrl}...` }
        ]);
        
        // Navigate after showing the redirect message
        setTimeout(() => {
          navigateToPage(option.pageUrl);
        }, 1000);
      }, 1000);
    }
    // If this option leads to a next stage
    else if (option.nextStage) {
      setIsTyping(true);
      
      setTimeout(() => {
        displayGreetingWithOptions(option.nextStage);
      }, 1000);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setIsChatMode(false);
    displayGreetingWithOptions("initial");
  };

  return (
    <>
      {/* Chat Button */}
      <Fab
        color="default"
        aria-label="chat"
        onClick={() => {
          setOpen(!open);
          setIsMinimized(false);
        }}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: colors.mediumBg,
          color: colors.primary,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <ChatIcon />
      </Fab>

      {/* Chat Window */}
      {open && (
        <Paper
          elevation={4}
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: isMinimized ? 250 : 340,
            height: isMinimized ? 60 : 500,
            borderRadius: 16,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.lightBg,
            zIndex: 999,
            transition: "all 0.3s ease",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Header */}
          <Box
            style={{
              padding: "12px 16px",
              backgroundColor: colors.primary,
              color: colors.white,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar sx={{ bgcolor: colors.mediumBg, width: 32, height: 32, color: colors.primary }}>
                <SentimentSatisfiedAltIcon fontSize="small" />
              </Avatar>
              <Typography variant="subtitle1" fontWeight="600">
                Support Chat
              </Typography>
            </Box>
            <Box>
              <IconButton 
                size="small" 
                onClick={() => setIsMinimized(!isMinimized)}
                sx={{ color: colors.white, mr: 1 }}
              >
                {isMinimized ? <ChatIcon fontSize="small" /> : <SelfImprovementIcon fontSize="small" />}
              </IconButton>
              <IconButton 
                size="small" 
                onClick={() => setOpen(false)}
                sx={{ color: colors.white }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <Box
                style={{
                  flexGrow: 1,
                  overflowY: "auto",
                  padding: "16px",
                  backgroundColor: colors.lightBg,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {messages.map((msg, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                      mb: 2,
                    }}
                  >
                    {msg.from === "bot" && (
                      <Avatar
                        sx={{
                          bgcolor: colors.mediumBg,
                          color: colors.primary,
                          width: 32,
                          height: 32,
                          mr: 1,
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      >
                        <SentimentSatisfiedAltIcon fontSize="small" />
                      </Avatar>
                    )}
                    <Box
                      sx={{
                        maxWidth: "75%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: msg.from === "user" ? colors.userBubble : colors.botBubble,
                          color: colors.darkGray,
                          padding: "10px 14px",
                          borderRadius: msg.from === "user" ? "15px 15px 0 15px" : "15px 15px 15px 0",
                          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        <Typography variant="body2">{msg.text}</Typography>
                      </Box>
                      
                      {/* Inline message buttons */}
                      {msg.from === "bot" && msg.buttons && msg.buttons.length > 0 && (
                        <Box sx={{ mt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                          {msg.buttons.map((button, btnIdx) => (
                            <Button
                              key={btnIdx}
                              variant="contained"
                              size="small"
                              endIcon={<ArrowForwardIcon fontSize="small" />}
                              onClick={() => handleOptionClick(button)}
                              sx={{
                                bgcolor: colors.buttonPrimary,
                                color: colors.white,
                                "&:hover": { 
                                  bgcolor: "#333333"
                                },
                                borderRadius: "8px",
                                textTransform: "none",
                                alignSelf: "flex-start",
                                py: 0.75,
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              {button.text}
                            </Button>
                          ))}
                        </Box>
                      )}
                    </Box>
                    {msg.from === "user" && (
                      <Avatar
                        sx={{
                          bgcolor: colors.primary,
                          color: colors.white,
                          width: 32,
                          height: 32,
                          ml: 1,
                          mt: 0.5,
                          flexShrink: 0,
                        }}
                      >
                        U
                      </Avatar>
                    )}
                  </Box>
                ))}
                
                {isTyping && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: colors.mediumBg,
                        color: colors.primary,
                        width: 32,
                        height: 32,
                        mr: 1,
                        flexShrink: 0,
                      }}
                    >
                      <SentimentSatisfiedAltIcon fontSize="small" />
                    </Avatar>
                    <Box
                      sx={{
                        backgroundColor: colors.botBubble,
                        color: colors.darkGray,
                        padding: "12px 18px",
                        borderRadius: "15px 15px 15px 0",
                        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress size={16} thickness={5} sx={{ color: colors.primary }} />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        Typing...
                      </Typography>
                    </Box>
                  </Box>
                )}
                <div ref={messagesEndRef} />
              </Box>

              {/* Options Buttons or Chat Input */}
              {isChatMode ? (
                <Box component="form" onSubmit={handleChatInputSubmit} sx={{ p: 2, bgcolor: colors.mediumBg, display: "flex", alignItems: "center" }}>
                  <TextField
                    fullWidth
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    variant="outlined"
                    size="small"
                    inputRef={inputRef}
                    sx={{
                      bgcolor: colors.white,
                      borderRadius: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton 
                            type="submit" 
                            disabled={!input.trim()}
                            sx={{ color: colors.primary }}
                          >
                            <SendIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <IconButton 
                    onClick={resetChat} 
                    sx={{ ml: 1, color: colors.primary, bgcolor: colors.white, "&:hover": { bgcolor: colors.lightGray } }}
                  >
                    <ReplayIcon />
                  </IconButton>
                </Box>
              ) : (
                stages[currentStage] && stages[currentStage].options.length > 0 && (
                  <Box sx={{ px: 2, py: 1, bgcolor: colors.mediumBg }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}>
                      {stages[currentStage].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="contained"
                          onClick={() => handleOptionClick(option)}
                          sx={{
                            bgcolor: option.color || colors.buttonPrimary,
                            color: option.color === colors.buttonSecondary ? colors.darkGray : colors.white,
                            "&:hover": { 
                              bgcolor: option.color === colors.buttonSecondary ? 
                                "#E8E6DF" : "#333333" 
                            },
                            borderRadius: "8px",
                            textTransform: "none",
                            justifyContent: "space-between",
                            paddingY: 1,
                          }}
                        >
                          {option.text}
                          {!option.text.toLowerCase().includes("back") && (
                            <span style={{ 
                              width: 20, 
                              height: 20, 
                              borderRadius: "50%", 
                              backgroundColor: option.color === colors.buttonSecondary ? colors.primary : colors.white,
                              color: option.color === colors.buttonSecondary ? colors.white : colors.primary,
                              display: "flex", 
                              alignItems: "center", 
                              justifyContent: "center",
                              fontSize: 14,
                              marginLeft: 5
                            }}>✓</span>
                          )}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                )
              )}
            </>
          )}
        </Paper>
      )}
    </>
  );
}