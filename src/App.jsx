import React from "react";
// import About from "./About/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Issues from './Issues/Screen';
import Details from './Issues/Details';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/issues" element={<Issues />} />
        <Route path="/service/:title" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

//  function App() {
//    return (
//      <div>
//      <About/>
//  </div>
//    );
//  }

//  export default App;