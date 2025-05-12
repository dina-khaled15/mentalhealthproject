import React, { useState, useEffect, useRef } from "react";
import { Paper } from "@mui/material";
import axios from "axios";
import ChatFab from "../chatbot/ChatFab";
import ChatHeader from "../chatbot/ChatHeader";
import ChatMessages from "../chatbot/ChatMessages";
import ChatInput from "../chatbot/ChatInput";
import ChatOptions from "../chatbot/ChatOptions";
import { colors } from "../../data/chatbotData";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentStage, setCurrentStage] = useState("initial");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isChatMode, setIsChatMode] = useState(false);
  const [stages, setStages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const fetchStages = async () => {
    console.log("Fetching stages from http://localhost:4000/api/stages...");
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("http://localhost:4000/api/stages", { timeout: 5000 });
      console.log("API response:", response.data);

      // Transform the array into an object with stage names as keys
      const stagesObject = response.data.reduce((acc, stage) => {
        acc[stage.name] = {
          greeting: stage.greeting,
          messageButtons: stage.messageButtons || [], // Default to empty array if missing
          options: stage.options || [], // Default to empty array if missing
        };
        return acc;
      }, {});
      
      console.log("Transformed stages:", stagesObject);
      setStages(stagesObject);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError("Failed to load chatbot data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStages();
  }, []);

  useEffect(() => {
    if (stages) {
      console.log("Stages loaded:", stages);
    }
    if (open && messages.length === 0 && stages && !loading) {
      displayGreetingWithOptions("initial");
    }
  }, [open, stages, loading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isChatMode && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isChatMode]);

  const displayGreetingWithOptions = (stage) => {
    if (!stages || !stages[stage]) {
      console.log(`Stage ${stage} not found in stages:`, stages);
      return;
    }
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: stages[stage].greeting,
          buttons: stages[stage].messageButtons || [],
        },
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
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thank you for your message. Our representative will get back to you shortly. Would you like to continue exploring other options?",
        },
      ]);
    }, 1500);
  };

  const startChatMode = () => {
    setIsChatMode(true);
    setMessages((prev) => [
      ...prev,
      {
        from: "bot",
        text: "You can type your message below. How can we assist you today?",
      },
    ]);
  };

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { from: "user", text: option.text }]);
    if (option.action === "startChat") {
      startChatMode();
      return;
    }
    if (option.pageUrl) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { from: "bot", text: `Redirecting you to ${option.pageUrl}...` }]);
        setTimeout(() => {
          navigateToPage(option.pageUrl);
        }, 1000);
      }, 1000);
    } else if (option.nextStage) {
      setIsTyping(true);
      setTimeout(() => {
        displayGreetingWithOptions(option.nextStage);
      }, 1000);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setIsChatMode(false);
    if (stages) {
      displayGreetingWithOptions("initial");
    }
  };

  if (loading) {
    return (
      <>
        <ChatFab
          onClick={() => {
            setOpen(!open);
            setIsMinimized(false);
          }}
        />
        {open && (
          <Paper
            elevation={4}
            style={{
              position: "fixed",
              bottom: 90,
              right: 20,
              width: 340,
              height: 500,
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
            <ChatHeader
              isMinimized={isMinimized}
              toggleMinimize={() => setIsMinimized(!isMinimized)}
              onClose={() => setOpen(false)}
            />
            <div style={{ padding: 20, textAlign: "center" }}>Loading chatbot data...</div>
          </Paper>
        )}
      </>
    );
  }

  if (error) {
    return (
      <>
        <ChatFab
          onClick={() => {
            setOpen(!open);
            setIsMinimized(false);
          }}
        />
        {open && (
          <Paper
            elevation={4}
            style={{
              position: "fixed",
              bottom: 90,
              right: 20,
              width: 340,
              height: 500,
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
            <ChatHeader
              isMinimized={isMinimized}
              toggleMinimize={() => setIsMinimized(!isMinimized)}
              onClose={() => setOpen(false)}
            />
            <div style={{ padding: 20, textAlign: "center" }}>
              {error}
              <button
                onClick={fetchStages}
                style={{
                  marginTop: 10,
                  padding: "8px 16px",
                  cursor: "pointer",
                  backgroundColor: colors.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                }}
              >
                Retry
              </button>
            </div>
          </Paper>
        )}
      </>
    );
  }

  return (
    <>
      <ChatFab
        onClick={() => {
          setOpen(!open);
          setIsMinimized(false);
        }}
      />
      {open && stages && (
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
          <ChatHeader
            isMinimized={isMinimized}
            toggleMinimize={() => setIsMinimized(!isMinimized)}
            onClose={() => setOpen(false)}
          />
          {!isMinimized && (
            <>
              <ChatMessages
                messages={messages}
                isTyping={isTyping}
                onOptionClick={handleOptionClick}
                messagesEndRef={messagesEndRef}
              />
              {isChatMode ? (
                <ChatInput
                  input={input}
                  setInput={setInput}
                  onSubmit={handleChatInputSubmit}
                  onReset={resetChat}
                  inputRef={inputRef}
                />
              ) : (
                stages[currentStage] &&
                stages[currentStage].options?.length > 0 && (
                  <ChatOptions
                    options={stages[currentStage].options}
                    onOptionClick={handleOptionClick}
                  />
                )
              )}
            </>
          )}
        </Paper>
      )}
    </>
  );
}