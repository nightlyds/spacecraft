import React from "react";
import Translate from "react-translate-component";

const Comprasion = () => {
  return (
    <div className="comprasion-labels">
      <div className="comprasion-labels-rocket-name">
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="rocketName"
            className="comprasion-labels-label"
          />
        </div>
      </div>
      <div className="comprasion-labels-details">
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="firstFlight"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="country"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="successRate"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="costs"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="engines"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="enginesVersion"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="height"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="diameter"
            className="comprasion-labels-label"
          />
        </div>
        <div className="comprasion-labels-label-box">
          <Translate
            component="span"
            content="mass"
            className="comprasion-labels-label"
          />
        </div>
      </div>
    </div>
  );
};

export default Comprasion;
