import React, { useState } from 'react'
import '../style/responsiveMenu.css'
import { GiHamburgerMenu } from "react-icons/gi";


const ResponsiveMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button className="menu-icon" onClick={toggleMenu}>
                <GiHamburgerMenu />
            </button>

            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default ResponsiveMenu