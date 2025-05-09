import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import ReactSwitch from "react-switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import io from "socket.io-client";

import "./App.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
// Pages & Components
import DoctorsPage from "./pages/DocPage";
import HomePage from "./pages/HomePage";
import Children from "./pages/Children";
import EmotionAdventure from "./pages/EmotionAdventure";
import Game from "./pages/Game";
import Bubble from "./components/Bubble/Bubble";
import CardMatchGame from "./components/Matching/Matching";
import StoryVideosPage from "./pages/StoryVideoPage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import DoctorPage from "./pages/Doctor";
import About from "./pages/About";
import Issues from "./pages/Issues";
import Details from "./pages/IssuesDetails";
import PartnerPharmaciesPage from "./pages/Pharmacies";
import ChatUIComponent from "./pages/UserProfile";
import Form from "./components/Booking";
import Contact from "./pages/Contact";
import PatternGame from "./components/PatternGame/PatternGame";
import Chatbot from "./components/chatbot/Chatbot";


// Theme context
export const ThemeContext = createContext(null);

const socket = io("http://localhost:3000");

// Scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (

    <GoogleOAuthProvider clientId="1056928485911-u4acuvki99757886rhl09mnkd10r4dk1.apps.googleusercontent.com">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Router>
          <ScrollToTopOnRouteChange /> {/* هنا ضفنا المكون علشان تبدأ الصفحة من فوق */}
          <Routes>
            <Route path="/booking" element={<Form />} />
            <Route path="/profile" element={<ChatUIComponent socket={socket} />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctorDetails/:doctorId" element={<DoctorPage />} /> {/* Changed to DoctorPage */}
            <Route path="/about" element={<About />} />
            <Route path="/kids" element={<Children />} />
            <Route path="/games" element={<Game />} />
            <Route path="/pattern" element={<PatternGame />} />
            <Route path="/bubble" element={<Bubble />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/details/:title" element={<Details />} />
            <Route path="/pharmacies" element={<PartnerPharmaciesPage />} />
            <Route path="/card-matching" element={<CardMatchGame />} />
            <Route path="/stories" element={<StoryVideosPage />} />
            <Route path="/story/:videoId" element={<VideoPlayerPage />} />
            <Route path="/feelings" element={<EmotionAdventure />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Chatbot />
        </Router>
      </ThemeContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
