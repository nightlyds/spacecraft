import React from 'react'
import Translate from 'react-translate-component'

const Menu = () => {
    return (
        <div className="menu">
            <Translate component="a" content="menuSpacecraft" className="menu-link" />
            <Translate component="a" content="menuList" className="menu-link" />
            <Translate component="a" content="menuAbout" className="menu-link" />
        </div>
    )
}

export default Menu
