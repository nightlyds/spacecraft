import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import MenuButton from './components/menu/MenuButton.jsx';
import Menu from './components/menu/Menu.jsx';
import counterpart from 'counterpart';
import en from './lang/en';
import uk from './lang/uk';
import './css/spacecraft.css'
import './css/media_spacecraft.css'

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.setLocale('en');

const Spacecraft = ({ loadUp, data, loading, error }) => {
    let [menuOpenCheck, setMenuOpen] = useState(false);
    // useEffect(() => {
    //     loadUp();
    // }, [])
    function menuOpen(){
        setMenuOpen(!menuOpenCheck)
    }
    return (
        <div className="spacecraft">
            <MenuButton menuOpen={menuOpen} icon={menuOpenCheck} />
            {menuOpenCheck && <Menu />}
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
