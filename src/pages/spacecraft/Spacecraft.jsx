import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import MenuButton from './components/menu/MenuButton.jsx'
import counterpart from 'counterpart';
import en from './lang/en';
import uk from './lang/uk';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.setLocale('en');

const Spacecraft = ({ loadUp, data, loading, error }) => {
    // useEffect(() => {
    //     loadUp();
    // }, [])
    return (
        <div className="spacecraft">
            <MenuButton />
        </div>
    )
}

Spacecraft.propTypes = {
    loadUp: PropTypes.func,
    data: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool
}

Spacecraft.defaultProps = {
    loadUp: () => {},
    data: [],
    loading: false,
    error: false
}

export default Spacecraft;
