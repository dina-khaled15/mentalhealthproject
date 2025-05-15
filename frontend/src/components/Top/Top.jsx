import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const Top = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <Container
      fluid
      className="bg-white text-dark d-flex flex-column align-items-center py-5 px-3 px-md-5"
      style={{ fontFamily: "'Manrope', sans-serif", maxWidth: "1200px" }}
    >
      {/* About Button */}
      <Button
        variant="outline-secondary"
        className="rounded-pill text-dark fw-semibold border-secondary mb-4 align-self-start"
        style={{ textTransform: "none", fontSize: "1rem" }}
      >
        <WorkspacePremiumIcon style={{ marginRight: 6 }} />
        About Wellthy
      </Button>

      {/* Heading */}
      <h1
        className="fw-medium  w-100"
        style={{
          fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
          color: "#474747",
          marginBottom: "2rem",
          fontWeight: 500,
          lineHeight: 1.1,
          maxWidth: "100%",
        }}
      >
        Empowering your mental wellness
        <br />
        with compassion and care
      </h1>

      {/* Explore Button */}
      <Button
        variant="link"
        className="text-dark fw-medium mb-4 align-self-end"
        style={{ textTransform: "none", fontSize: "1.5rem" }}
      >
        Explore Wellthy <ArrowCircleDownIcon />
      </Button>

      {/* Image or Video */}
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        {!showVideo ? (
          <img
            src={"http://res.cloudinary.com/defus4mj2/image/upload/v1747316841/hnafcgoom2hliyufqy9y.png"}
            alt="Mental Health Visual"
            onClick={handleImageClick}
            style={{
              cursor: "pointer",
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/hPL8zP-VbLw?autoplay=1"
            title="Empowering Mental Wellness"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "block",
            }}
          ></iframe>
        )}
      </div>
    </Container>
  );
};

export default Top;
