export const colors = {
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
    buttonSecondary: "#F2F0E9",
  };
  
  export const stages = {
    initial: {
      greeting: "Hello! How can I assist you today?",
      messageButtons: [
        { id: "medical", text: "Request Medical Consultation", nextStage: "medical", pageUrl: null },
        { id: "anxiety", text: "Help with Anxiety or Stress", nextStage: "anxiety", pageUrl: null },
        { id: "general", text: "General Information", nextStage: "general", pageUrl: null },
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
      ],
    },
    medical: {
      greeting: "We will guide you to the session booking page.",
      messageButtons: [
        { id: "booking", text: "Go to Booking page", nextStage: "end", pageUrl: "/booking" },
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
        { id: "back", text: "Back to options", nextStage: "initial", color: colors.buttonSecondary },
      ],
    },
    anxiety: {
      greeting: "Awesome! Taking you to the page now where you can find more helpful details.",
      messageButtons: [
        { id: "issues", text: "Go to Issues page", nextStage: "end", pageUrl: "/issues" },
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
        { id: "back", text: "Back to options", nextStage: "initial", color: colors.buttonSecondary },
      ],
    },
    general: {
      greeting: "Here's a page where you can find helpful information and articles.",
      messageButtons: [
        { id: "aboutus", text: "About us", nextStage: "end", pageUrl: "/about-us" },
        { id: "kids", text: "Kids", nextStage: "end", pageUrl: "/kids" },
      ],
      options: [
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
        { id: "back", text: "Back to options", nextStage: "initial", color: colors.buttonSecondary },
      ],
    },
    end: {
      greeting: "Thank you for using our service. Is there anything else I can help you with?",
      messageButtons: [],
      options: [
        { id: "restart", text: "Start Over", nextStage: "initial", color: colors.buttonPrimary },
        { id: "chat", text: "Chat with us", nextStage: null, action: "startChat", color: colors.buttonSecondary },
      ],
    },
  };