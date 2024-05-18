import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState('#000000')

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <div>
            <input type="color" onChange={handleChange} />
            <div style={{ backgroundColor: color, width: '200px', height: '200px' }}>
            </div>
            <p> Selected Color: {color}</p>
        </div>
    )
}

export default ColorPicker