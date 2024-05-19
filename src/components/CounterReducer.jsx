import React, { useReducer } from 'react'

const CounterReducer = () => {

    const initialState = 0

    function reducer(state, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                if (state === 0) {
                    return state
                }
                return state - 1
            case 'RESET':
                return initialState
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Counter Reducer App</h1>
            <p>Count : {count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            &nbsp;
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default CounterReducer