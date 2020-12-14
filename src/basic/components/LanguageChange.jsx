import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import counterpart from "counterpart";

const LanguageChange = () => {
  let [language, takeLanguage] = useState(false);
  const [cookies, setCookie] = useCookies(["language"]);

  function writeLanguage(language) {
    if(language === "EN"){
      counterpart.setLocale("en");
    }else if(language === "UK"){
      counterpart.setLocale("uk");
    }
    setCookie("language", language, { path: "/", expiress: 60 * 60 * 24 * 30, SameSite: 'None' });
  }
  return (
    <div className="language-change">
      <div className="language-change-current-box">
        <span
          className="language-change-current"
          onClick={() => {
            takeLanguage(!language);
          }}
        >
          {cookies.language === 'EN' ? 'EN' : 'UK'}
          <FontAwesomeIcon
            icon={faSortDown}
            className="language-change-current-icon"
          />
        </span>
      </div>
      {language && (
        <div className="language-change-all">
          <span
            className="language-change-all-language language-change-all-language-first"
            onClick={() => {
              writeLanguage("EN");
            }}
          >
            EN
          </span>
          <span
            className="language-change-all-language"
            onClick={() => {
              writeLanguage("UK");
            }}
          >
            UK
          </span>
        </div>
      )}
    </div>
  );
};

export default LanguageChange;
