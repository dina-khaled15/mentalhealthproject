import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";

const SafeMessage = () => {
  return (
    <div className="container my-4">
      <div className="row justify-content-center" >
        <div
          className="col-12 col-md-10 col-lg-8"
          style={{
            backgroundColor: "#F8F7F4",
            borderRadius: "16px",
            padding: "24px 32px",
            minHeight: "78vh",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "35px",
            }}
            className="mb-4"
          >
            Welcome to Your Safe Space!
          </h3>

          <h5
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: "30px",
            }}
            className="mb-3"
          >
            <strong>
              Hello, little heroes!{" "}
              <WavingHandIcon
                style={{
                  fontSize: "40px",
                  color: "#FFA500",
                  verticalAlign: "middle",
                }}
              />
            </strong>
          </h5>

          <p
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 500,
              fontSize: "20px",
            }}
            className="mb-3"
          >
            We’re here to help you feel happy, understand yourself better, and
            learn how to take care of your mind and heart.
          </p>

          <p
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 500,
              fontSize: "20px",
            }}
            className="mb-4"
          >
            On our website, you’ll find fun information, helpful games, and simple
            tips to help you grow stronger and happier every day.
          </p>

          <h5
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 400,
              fontSize: "25px",
            }}
            className="mb-3"
          >
            <strong>Always remember:</strong>
          </h5>

          <p
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 450,
              fontSize: "20px",
            }}
            className="mb-1"
          >
            - You are important.
          </p>
          <p
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 450,
              fontSize: "20px",
            }}
            className="mb-1"
          >
            - You are smart and brave.
          </p>
          <p
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 450,
              fontSize: "20px",
            }}
            className="mb-4"
          >
            - And every new day is a chance to be even better.
          </p>

          <h5
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 700,
              fontSize: "30px",
            }}
            className="mb-3"
          >
            Ready to start this journey with us?{" "}
            <FontAwesomeIcon
              icon={faPlaneUp}
              size="lg"
              style={{ color: "#FFA500", verticalAlign: "middle" }}
            />
          </h5>

          <h5
            style={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: "30px",
            }}
          >
            We’re so happy you’re here!
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SafeMessage;
