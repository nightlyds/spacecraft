import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const LanguageChange = () => {
  let [language, takeLanguage] = useState(false);
  return (
    <div className="language-change">
      <div className="language-change-current-box">
        <span
          className="language-change-current"
          onClick={() => {
            takeLanguage(!language);
          }}
        >
          EN{" "}
          <FontAwesomeIcon
            icon={faSortDown}
            className="language-change-current-icon"
          />
        </span>
      </div>
      {language && (
        <div className="language-change-all">
          <span className="language-change-all-language language-change-all-language-first">EN</span>
          <span className="language-change-all-language">UK</span>
        </div>
      )}
    </div>
  );
};

export default LanguageChange;
