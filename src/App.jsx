import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({});
import "./App.css";
import DoctorsPage from "./page/DocPage";
import HomePage from "./page/HomePage";
import Children from "./page/Children";
import EmotionAdventure from "./page/EmotionAdventure";
import Game from "./page/game";
import Bubble from "./page/Bubble";
import CardMatchGame from "./page/Matching";
import StoryVideosPage from "./page/StoryVideoPage";
import VideoPlayerPage from "./page/VideoPlayerPage";
import DoctorDetails from "./page/Doctor";
import About from "./page/About";
import Issues from "./page/Issues";
import Details from "./page/IssuesDetails";
import Chatbot from "./page/chatbot";
import ChatUIComponent from "./page/community";
import io from 'socket.io-client';


// اتصالات Socket.IO
const socket = io('http://localhost:3000'); // عنوان السيرفر إذا كنت حابة تستخدمه مستقبلاً

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/profile" element={<ChatUIComponent socket={socket} />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctorDetails/:doctorId" element={<DoctorDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/kids" element={<Children />} />
        <Route path="/games" element={<Game />} />
        <Route path="/bubble" element={<Bubble />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/service/:title" element={<Details />} />
        <Route path="/card-matching" element={<CardMatchGame />} />
        <Route path="/stories" element={<StoryVideosPage />} />
        <Route path="/story/:videoId" element={<VideoPlayerPage />} />
        <Route path="/feelings" element={<EmotionAdventure />} />
      </Routes>
      <Chatbot/>
    </Router>
  );
}

export default App;