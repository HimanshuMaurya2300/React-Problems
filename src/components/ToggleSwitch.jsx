import React, { useState } from 'react'

const ToggleSwitch = () => {

    const [isToggle, setIsToggle] = useState(false)

    const handleToggle = () => {
        setIsToggle(!isToggle)
    }

    return (
        <>
            <label>
                <input type="checkbox" onChange={handleToggle} />
            </label>
            <p>{isToggle ? 'On' : 'Off'}</p>
        </>
    )
}

export default ToggleSwitch