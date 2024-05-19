import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const cartInitialState = {
        cartItems: []
    }

    function cartReducer(state, action) {

        console.log(action)
        switch (action.type) {

            case 'ADD_TO_CART':
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }

            case 'UPDATE_CART':
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item)
                }

            case 'REMOVE_FROM_CART':
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.id !== action.payload)
                }

            default:
                return state
        }
    }

    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)


    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


const useCart = () => {
    return useContext(CartContext)
}

export { useCart }