import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section
      className="bg-white text-black py-5 my-5"
      style={{ paddingRight: "2.5rem" }}
    >
      <div className="container-md">
        <h2
          className="fw-bold mb-3"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "28px",
          }}
        >
          Start your mental wellness journey <br />
          with Wellthy today!
        </h2>
        <p
          className="mb-4"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            opacity: 0.7,
            maxWidth: "600px",
            fontSize: "16px",
          }}
        >
          Book a consultation and take the first step toward a healthier,
          <br /> happier mind.
        </p>
        <Link
          to="/booking"
          className="btn btn-dark text-white fw-semibold"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "14px",
            borderRadius: "4px",
            padding: "0.5rem 1.5rem",
            textTransform: "none",
          }}
        >
          Book Counseling
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "8px" }}
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.146 12.354a.5.5 0 0 1 0-.708L12.793 9H1.5a.5.5 0 0 1 0-1h11.293L10.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
