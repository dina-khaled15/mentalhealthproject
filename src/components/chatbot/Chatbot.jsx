import React, { useState, useEffect, useRef } from "react";
import { Paper } from "@mui/material";
import ChatFab from "../chatbot/ChatFab";
import ChatHeader from "../chatbot/ChatHeader";
import ChatMessages from "../chatbot/ChatMessages";
import ChatInput from "../chatbot/ChatInput";
import ChatOptions from "../chatbot/ChatOptions";
import { colors, stages } from "../data/chatbotData";

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

  useEffect(() => {
    if (open && messages.length === 0) {
      displayGreetingWithOptions("initial");
    }
  }, [open]);

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
    displayGreetingWithOptions("initial");
  };

  return (
    <>
      <ChatFab onClick={() => {
        setOpen(!open);
        setIsMinimized(false);
      }} />
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
                stages[currentStage].options.length > 0 && (
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