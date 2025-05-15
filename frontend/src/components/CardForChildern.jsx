import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faBook, faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const HomeCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: (
        <>
          <FontAwesomeIcon icon={faGamepad} style={{ marginRight: 8, color: "#FF6347" }} />
          Fun Games
        </>
      ),
      description: "Enjoy games that help you learn and laugh at the same time!",
      buttonText: "Start Playing",
      path: "/games",
    },
    {
      title: (
        <>
          <FontAwesomeIcon icon={faBook} style={{ marginRight: 8, color: "#4682B4" }} />
          Lovely Stories
        </>
      ),
      description: "Read fun and meaningful stories.",
      buttonText: "Read a Story",
      path: "/stories",
    },
    {
      title: (
        <>
          <FontAwesomeIcon icon={faFaceSmile} style={{ marginRight: 8, color: "#32CD32" }} />
          Know Your Feelings
        </>
      ),
      description: "Discover the meaning of different feelings and how to handle them.",
      buttonText: "Explore Feelings",
      path: "/feelings",
    },
  ];

  return (
    <div className="container py-4">
      <div className="row g-4 justify-content-center">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div
              className="card h-100 shadow-sm"
              style={{
                borderRadius: "16px",
                backgroundColor: "#F8F7F4",
                color: "#000",
                fontFamily: "Manrope",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title mb-3"
                  style={{
                    fontWeight: 600,
                    fontSize: "25px",
                  }}
                >
                  {card.title}
                </h5>
                <p
                  className="card-text"
                  style={{
                    fontWeight: 400,
                    fontSize: "17px",
                  }}
                >
                  {card.description}
                </p>
                <div className="mt-auto pt-3">
                  <button
                    className="btn w-100"
                    style={{
                      backgroundColor: "#000",
                      color: "#fff",
                      fontWeight: "bold",
                      fontFamily: "Manrope",
                      textTransform: "none",
                    }}
                    onClick={() => navigate(card.path)}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#4682B4")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
