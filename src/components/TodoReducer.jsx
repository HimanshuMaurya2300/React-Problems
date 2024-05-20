import React, { useReducer, useState } from 'react'

const TodoReducer = () => {

    const [taskText, setTaskText] = useState('')

    const taskReducer = (state, action) => {

        switch (action.type) {
            case 'ADD_TASK':
                return [...state, {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }]

            case 'DELETE_TASK':
                return state.filter((task) => task.id !== action.payload)

            case 'TOGGLE_TASK':
                return state.map((task) => {
                    if (task.id === action.payload) {
                        return { ...task, completed: !task.completed }
                    }
                    return task
                })

            default:
                return state
        }
    }

    const [tasks, dispatch] = useReducer(taskReducer, [])

    const addTask = () => {
        dispatch({ type: 'ADD_TASK', payload: taskText })
    }

    const toggleTask = (id) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id })
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={taskText}
                placeholder='Add New Task'
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button onClick={addTask}>
                Add Task
            </button>
            <hr />
            <ul>
                {
                    tasks.map((task) => (
                        <li key={task.id}>
                            <span
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                onClick={() => toggleTask(task.id)}
                            >
                                {task.text}
                            </span>
                            &nbsp;
                            <button
                                onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoReducer