import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "../assets/consultantBanner.jpg";

const ConsultationBanner = () => {
  return (
    <div
      className="position-relative d-flex align-items-center py-4 px-3"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        lineHeight:"45px"
      }}
    >
      {/* Black Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}
      ></div>

      {/* Content */}
      <div className="container text-center d-flex position-relative text-white" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="group">
            <p className="mb-2 text-capitalize fw-bold">
              Schedule an appointment for a
            </p>
            <h2 className="fw-bolder text-uppercase">Complimentary Consultation.</h2>       
          
            <button className="btn bg-light fw-bold px-4">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBanner;
