import React from 'react';
import Translate from 'react-translate-component';

const LaunchesDefault = () => {
    return (
        <div className="launches-default">
            <div className="launches-default-box">
                <Translate component="span" content="launchesDefaultName" className="launches-default-detail" />
            </div>
            <div className="launches-default-box">
                <Translate component="span" content="launchesDefaultDate" className="launches-default-detail" />
            </div>
            <div className="launches-default-box">
                <Translate component="span" content="launchesDefaultSuccess" className="launches-default-detail" />
            </div>
            <div className="launches-default-box">
                <Translate component="span" content="launchesDefaultUpcoming" className="launches-default-detail" />
            </div>
        </div>
    )
}

export default LaunchesDefault
