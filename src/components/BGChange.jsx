import React, { useState } from 'react'

const BGChange = () => {

    const [bgColor, setBgColor] = useState('yellow')

    const handleClick = () => {
        setBgColor(bgColor === 'yellow' ? 'lightblue' : 'yellow')
    }

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: bgColor,
                width: '200px',
                height: '200px',
                cursor: 'pointer',
            }}
        >
            BGChange
        </div>
    )
}

export default BGChange