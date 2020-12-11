import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const MenuButton = ({ menuOpen, icon }) => {
  function menuButtonClick(){
    menuOpen();
  }
  return (
    <div
      className="menu-button"
      onClick={() => {
        menuButtonClick()
      }}
    >
      <div className="menu-button-background">
        <FontAwesomeIcon icon={!icon ? faBars : faTimes} className={`menu-button-icon animate__animated ${!icon ? 'animate__rubberBand' : 'animate__rotateIn'}`} />
      </div>
    </div>
  );
};

MenuButton.propTypes = {
  menuOpen: PropTypes.func,
  icon: PropTypes.bool
}

MenuButton.defaultProps = {
  menuOpen: () => {},
  icon: false
}

export default MenuButton;
