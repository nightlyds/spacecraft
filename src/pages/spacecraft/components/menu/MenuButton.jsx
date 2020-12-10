import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MenuButton = () => {
    return (
        <div className="menu-button">
            <FontAwesomeIcon icon={faBars} className="menu-button-icon" />
        </div>
    )
}

export default MenuButton
