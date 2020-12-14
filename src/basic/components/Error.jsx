import React from 'react';
import Translate from 'react-translate-component';
import en from "../lang/en";
import uk from "../lang/uk";
import counterpart from "counterpart";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("uk", uk);

const Error = () => {
    return (
        <div className="error">
            <Translate component="span" content="errorMessage" className="error-message" />
        </div>
    )
}

export default Error;