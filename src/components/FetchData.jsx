import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => setTodos(data))
    }, [])

    return (
        <div>
            {
                todos.length > 0 ? todos.map((todo) => (
                    <p key={todo.id}>{todo.title}</p>
                )) : (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}

export default FetchData