import React from "react";

const ImageStatisticSection = ({ issueData, groupImg, aloneImg }) => (
  <div className="container-fluid mt-5 px-3 px-md-4">
    <div
      className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 gap-md-1" // زيادة الـ gap إلى gap-md-1 لشاشات md
    >
      <div className="col-12 col-md-5 d-flex justify-content-center">
        <img
          src={groupImg}
          alt="Group"
          className="img-fluid rounded-3"
          style={{
            width: "80%",
            height: "27vh",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </div>

      <div className="col-12 col-md-2 d-flex justify-content-center">
        <div
          className="card h-100 rounded-5"
          style={{ backgroundColor: "#F2F0E9", color: "black" }}
        >
          <div className="card-body p-3 text-center">
            <h6
              className="fw-bold"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "18.3px",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              "{issueData.statistic}"
            </h6>
            <p
              className="text-muted"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              - Psychological Studies
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4 d-flex justify-content-center">
        <img
          src={aloneImg}
          alt="Alone"
          className="img-fluid rounded-4"
          style={{
            maxWidth: "100%",
            height: "26vh",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default ImageStatisticSection;