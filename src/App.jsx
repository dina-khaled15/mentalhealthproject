// import About from "./About/About";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Issues from "./Issues/Screen";
import Details from "./Issues/Details";
import Pharmacies from "./Pharmacies/Pharmacies";

function App() {
  return (
    <Router> {/* Ensure BrowserRouter is here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/service/:title" element={<Details />} />
        <Route path="/pharmacies" element={<Pharmacies />} />
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