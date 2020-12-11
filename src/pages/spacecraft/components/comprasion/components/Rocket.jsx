import React from "react";
import PropTypes from "prop-types";

const Rocket = ({
  rocketName,
  costs,
  firstFlight,
  country,
  successRate,
  height,
  diameter,
  mass,
  engines,
  enginesVersion,
  image,
}) => {
  return (
    <div className="comprasion-rocket">
      <div className="comprasion-rocket-image-box">
        <img src={image} alt="Rocket" className="comprasion-rocket-image" />
      </div>
      <div className="comprasion-rocket-title-box">
        <div className="comprasion-rocket-detail-box">
          <h2 className="comprasion-rocket-title">{rocketName}</h2>
        </div>
      </div>
      <div className="comprasion-rocket-info">
        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{firstFlight}</span>
        </div>
        <div className="comprasion-rocket-detail-box">
          <span className="comprasion-rocket-detail">{country}</span>
        </div>

        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{successRate}</span>
        </div>

        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{costs} $</span>
        </div>

        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{engines}</span>
        </div>

        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{enginesVersion}</span>
        </div>

        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{height} m</span>
        </div>

        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{diameter} m</span>
        </div>

        <div className="comprasion-rocket-detail-box">
          {" "}
          <span className="comprasion-rocket-detail">{mass} kg</span>
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketName: PropTypes.string,
  costs: PropTypes.number,
  firstFlight: PropTypes.string,
  country: PropTypes.string,
  successRate: PropTypes.number,
  height: PropTypes.number,
  diameter: PropTypes.number,
  mass: PropTypes.number,
  engines: PropTypes.string,
  enginesVersion: PropTypes.string,
  image: PropTypes.string,
};

export default Rocket;
