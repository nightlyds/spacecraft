import React from "react";
import Translate from "react-translate-component";

const Menu = () => {
  return (
    <div className="menu">
      <Translate
        component="a"
        href="/"
        content="menuSpacecraft"
        className="menu-link menu-link-first animate__animated animate__bounce"
      />
      <Translate
        component="a"
        href="/list"
        content="menuList"
        className="menu-link animate__animated animate__bounce animate__slow"
      />
      <Translate
        component="a"
        href="/about"
        content="menuAbout"
        className="menu-link menu-link-last animate__animated animate__bounce animate__slower"
      />
    </div>
  );
};

export default Menu;
