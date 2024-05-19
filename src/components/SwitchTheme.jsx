import React from 'react'
import '../style/Theme.css'
import { useTheme } from '../context/ThemeContext'

const SwitchTheme = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div>
            <label htmlFor="switch">Dark Mode</label>
            <input type="checkbox" id="switch" onChange={toggleTheme} />

            <div className={`container ${theme === 'light' ? 'light' : 'dark'}`}>
                Testing Dark Mode
            </div>
        </div>
    )
}

export default SwitchTheme