import React, { useState } from "react";
import counterpart from "counterpart";
import "./css/about.css";
import "./css/media_about.css";
import en from "./lang/en";
import uk from "./lang/uk";
import MenuButton from "../../basic/components/menu/MenuButton.jsx";
import Menu from "../../basic/components/menu/Menu.jsx";
import Footer from "../../basic/components/Footer.jsx";
import LanguageChange from "../../basic/components/LanguageChange.jsx";
import Info from './components/info/Info.jsx'

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("uk", uk);
counterpart.setLocale("en");

const About = () => {
  let [menuOpenCheck, setMenuOpen] = useState(false);

  function menuOpen() {
    setMenuOpen(!menuOpenCheck);
  }
  return (
    <div className="about">
      <MenuButton menuOpen={menuOpen} icon={menuOpenCheck} />
      {menuOpenCheck && <Menu />}
      <LanguageChange />
      <div className="about-content">
        <Info />
      </div>
      <Footer />
    </div>
  );
};

export default About;
