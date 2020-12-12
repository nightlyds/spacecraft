import React from "react";
import PropsTypes from "prop-types";
import Success from "../../images/success.svg";
import Fail from "../../images/fail.svg";

const LaunchesList = ({ launches, oneLaunchOpen }) => {
  const api_request = launches ? launches.data : [];
  return (
    <div className="launches-list">
      {api_request &&
        api_request.map((point, index) => (
          <div className="launches-list-point" key={`${point}_${index}`} onClick={() => {oneLaunchOpen(point.flight_number)}}>
            <div className="launches-list-point-box">
              <span className="launches-list-point-detail">
                {point.mission_name}
              </span>
            </div>
            <div className="launches-list-point-box">
              <span className="launches-list-point-detail">
                {point.launch_date_utc}
              </span>
            </div>
            <div className="launches-list-point-box">
              {point.launch_success === true ? (
                <img
                  src={Success}
                  alt="success"
                  className="launches-list-success-icon"
                />
              ) : (
                <img
                  src={Fail}
                  alt="fail"
                  className="launches-list-success-icon"
                />
              )}
            </div>
            <div className="launches-list-point-box">
              <span className="launches-list-point-detail">
                {point.upcoming === true ? 'yes' : 'no'}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

LaunchesList.propTypes = {
  launches: PropsTypes.object,
  oneLaunchOpen: PropsTypes.func
};

export default LaunchesList;
