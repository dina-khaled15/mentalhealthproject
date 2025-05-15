import React from "react";

const PsychologyBanner = () => {
  return (
    <div
      className="w-100 mt-6 py-5 px-4 px-md-5 text-white"
      style={{ 
        fontFamily: "'Manrope', sans-serif", 
        backgroundColor: "#000", 
        marginTop: "5rem", 
      }}
    >
      
      <h1
        className="fw-normal"
        style={{ lineHeight: 1.3, fontSize: "4rem" }} 
      >
        Exploring various psychological concepts, theories, and research findings in an accessible way.
      </h1>

      <style>
        {`
          @media (max-width: 960px) {
            h1 {
              font-size: 2.5rem !important;
            }
          }
          @media (max-width: 600px) {
            h1 {
              font-size: 2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default PsychologyBanner;
