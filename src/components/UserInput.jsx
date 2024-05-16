import React, { useState } from 'react'

const UserInput = () => {

    const [input, setInput] = useState('')

    return (
        <div>
            <input
                type='text'
                onChange={
                    (e) => setInput(e.target.value)
                }
                value={input}
            />
            <p>User Input :- {input}</p>
        </div>
    )
}

export default UserInput