import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <Container fluid className="py-5 text-white">
      <Container className="text-start mb-4">
        <h1 className="display-4">At Wellthy, we provide personalized mental health counseling with licensed therapists focused on your unique needs.</h1>
      </Container>
      <Row>
        <Col xs={12} md={7} className="mb-4">
          <div className="position-relative">
            {!showVideo ? (
              <>
                <img
                  src="http://res.cloudinary.com/defus4mj2/image/upload/v1747318189/mtrvd4cffcnri7dkg7e2.png"
                  alt="Main Video"
                  className="img-fluid rounded"
                  borderRadius="20px"
                />
                <Button
                  variant="light"
                  className="position-absolute top-50 start-50 translate-middle rounded-circle p-3"
                  onClick={handlePlayClick}
                >
                  ▶️
                </Button>
              </>
            ) : (
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/1i9OktVsTWo?autoplay=1"
                title="Meditation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            )}
          </div>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column gap-3">
          <img
            src="http://res.cloudinary.com/defus4mj2/image/upload/v1747318113/pkq77rmkkcriwgm4ionz.png"
            alt="Therapy Session"
            className="img-fluid rounded mb-3"
          />
          <img
            src="http://res.cloudinary.com/defus4mj2/image/upload/v1747317037/k5dx1ubnigw8uihrwexd.webp"
            alt="Friends Outing"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
