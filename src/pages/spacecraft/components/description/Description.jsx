import React from "react";
import Translate from "react-translate-component";

const Description = () => {
  return (
    <div className="spacecraft-description">
      <Translate
        component="h1"
        content="spacecraftDescriptionTitle"
        className="spacecraft-description-title"
      />
      <Translate
        component="p"
        content="spacecraftDescriptionText"
        className="spacecraft-description-text"
      />
    </div>
  );
};

export default Description;
