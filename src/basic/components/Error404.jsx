import React, { useState } from "react";
import counterpart from "counterpart";
import "../css/basic.css";
import "../css/media_basic.css";
import en from "../lang/en";
import uk from "../lang/uk";
import MenuButton from "./menu/MenuButton.jsx";
import Menu from "./menu/Menu.jsx";
import Footer from "./Footer.jsx";
import LanguageChange from "./LanguageChange.jsx";
import Translate from 'react-translate-component';

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("uk", uk);

const Error404 = () => {
  let [menuOpenCheck, setMenuOpen] = useState(false);

  function menuOpen() {
    setMenuOpen(!menuOpenCheck);
  }
  return (
    <div className="error-404">
      <MenuButton menuOpen={menuOpen} icon={menuOpenCheck} />
      {menuOpenCheck && <Menu />}
      <LanguageChange />
      <div className="error-404-content">
        <h2 className="error-404-title">404</h2>
        <Translate component="span" content="error404" className="error-404-text" />
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
