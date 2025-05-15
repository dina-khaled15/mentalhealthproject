import React from "react";

const PathToWellnessSection = ({ black }) => (
  <div className="container-fluid ps-4 ps-md-3 ps-lg-4 mt-5">
    <div className="row gx-2">
      <div
        className="col-12 col-md-6 mb-4 mb-md-0"
        style={{ transform: "translateX(20px)" }} 
      >
        <div className="position-relative rounded-3 overflow-hidden" style={{ maxWidth: "570px" }}>
          <img
            src={black}
            alt="black background"
            className="img-fluid"
            style={{ width: "90%", height: "480px", objectFit: "cover" }}
            loading="lazy"
          />
          <button
            className="btn btn-outline-secondary rounded-pill position-absolute"
            style={{
              bottom: "430px",
              left: "16px",
              fontSize: "13px",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              border: "2px solid #D3D3D3",
              backgroundColor: "white",
              color: "black",
              textTransform: "none",
            }}
          >
            # How it Works
          </button>
          <h6
            className="position-absolute text-black"
            style={{
              bottom: "30px",
              right: "80px",
              fontSize: "30px",
              fontWeight: 700,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Your Path
            <br /> to Wellness
          </h6>
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
        {[
          {
            step: "1",
            title: "Assessment",
            description:
              "Our experienced therapist will assess and understand your mental health needs through conversation and tests.",
          },
          {
            step: "2",
            title: "Sessions",
            description:
              "We will decide on regular counseling or group support and execute based on the assessment with a therapist.",
          },
          {
            step: "3",
            title: "Tracking",
            description:
              "The therapist assigned to your case will monitor and adjust your therapy session progress to make sure you get the best experience.",
          },
        ].map((item, index) => (
          <div key={index} className="d-flex align-items-start mb-4 position-relative">
            <div
              className="rounded-circle bg-black text-white d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "60px",
                fontSize: "22px",
                fontWeight: "bold",
                marginLeft: "-40px", 
                zIndex: 1,
              }}
            >
              {item.step}
            </div>
            <div className="ms-4">
              <h5
                className="fw-bold"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "25px",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h5>
              <p
                className="text-muted"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  maxWidth: "600px",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PathToWellnessSection;