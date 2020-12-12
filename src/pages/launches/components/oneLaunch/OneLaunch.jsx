import React from "react";
import PropTypes from "prop-types";
import Translate from "react-translate-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Success from "../../images/success.svg";
import Fail from "../../images/fail.svg";

const OneLaunch = ({ launch, oneLaunchClose }) => {
  const api_request = launch ? launch.data : undefined;
  return (
    <div className="launch-background">
      <div className="launch">
        <div className="launch-header">
          <FontAwesomeIcon
            icon={faTimes}
            className="launch-header-icon"
            onClick={() => {
              oneLaunchClose();
            }}
          />
        </div>
        {api_request && (
          <div className="launch-content">
            <div className="launch-content-header">
              <h2 className="launch-content-header-title">
                {api_request.mission_name}
              </h2>
            </div>
            <div className="launch-content-details">
              <div className="launch-content-image-box">
                <img
                  src={api_request.links.mission_patch}
                  className="launch-content-image"
                  alt="Launch"
                />
              </div>
              <div className="launch-content-data">
                <div className="launch-content-data-box">
                  <span className="launch-content-data-detail">
                    <Translate
                      component="span"
                      className="launch-content-data-detail-sub-title"
                      content="launchDetails"
                    />
                    : {api_request.details}
                  </span>
                </div>
                <div className="launch-content-data-box">
                  <span className="launch-content-data-detail">
                    <Translate
                      component="span"
                      className="launch-content-data-detail-sub-title"
                      content="launchData"
                    />
                    : {api_request.launch_date_utc}
                  </span>
                </div>
                <div className="launch-content-data-box">
                  <span className="launch-content-data-detail">
                    <Translate
                      component="span"
                      className="launch-content-data-detail-sub-title"
                      content="launchRocket"
                    />
                    : {api_request.rocket.rocket_name}
                  </span>
                </div>
                <div className="launch-content-data-box">
                  <span className="launch-content-data-detail">
                    <Translate
                      component="span"
                      className="launch-content-data-detail-sub-title"
                      content="launchRocketType"
                    />
                    : {api_request.rocket.rocket_type}
                  </span>
                </div>
                <div className="launch-content-data-box">
                  <span className="launch-content-data-detail">
                    <Translate
                      component="span"
                      className="launch-content-data-detail-sub-title"
                      content="launchUpcoming"
                    />
                    : {api_request.upcoming === true ? "yes" : "no"}
                  </span>
                </div>
                <div className="launch-content-data-box launch-content-data-box-image">
                  <span className="launch-content-data-detail">
                    <Translate
                      component="span"
                      className="launch-content-data-detail-sub-title"
                      content="launchSuccess"
                    />
                    :{" "}
                  </span>
                  <img
                  src={api_request.launch_success === true ? Success : Fail}
                  alt="Success"
                  className="launch-content-data-detail-image"
                />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

OneLaunch.propTypes = {
  launch: PropTypes.object,
  oneLaunchClose: PropTypes.func,
};

OneLaunch.defaultProps = {
  oneLaunchClose: () => {},
};

export default OneLaunch;
