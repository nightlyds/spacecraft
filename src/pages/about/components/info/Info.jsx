import React from "react";
import Translate from "react-translate-component";
import GitHub from "../../images/github.svg";
import Instagram from "../../images/instagram.svg";

const Info = () => {
  return (
    <div className="about-info">
      <div className="about-info-title-box">
        <Translate
          component="h2"
          content="infoTitle"
          className="about-info-title"
        />
      </div>
      <div className="about-info-description">
        <Translate
          component="p"
          content="infoDescription"
          className="about-info-description"
        />
      </div>
      <div className="about-info-social">
        <div className="about-info-social-box">
          <a href="https://github.com/nightlyds/">
            <img src={GitHub} className="about-info-social-icon" alt="GitHub" />
          </a>
        </div>
        <div className="about-info-social-box">
          <a href="https://www.instagram.com/safonovdaniel/">
            <img
              src={Instagram}
              className="about-info-social-icon about-info-social-icon-last"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
