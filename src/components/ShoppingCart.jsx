import React from 'react'
import { useCart } from '../context/CartContext'

const ShoppingCart = () => {

    const { cartState, cartDispatch } = useCart()

    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
        { id: 4, name: 'Product 4', price: 40 },
        { id: 5, name: 'Product 5', price: 50 }
    ]

    const addToCart = (product) => {

        const existingCartItem = cartState.cartItems.find(item => item.id === product.id)

        if (existingCartItem) {

            cartDispatch({ type: 'UPDATE_CART', payload: { id: product.id, quantity: existingCartItem.quantity + 1 } })
            return
        }
        else {
            cartDispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } })
        }
    }

    const updateQuantity = (id, quantity) => {
        if (quantity > 0) {
            cartDispatch({ type: 'UPDATE_CART', payload: { id: id, quantity } })
        }
    }

    const removeFromCart = (id) => {
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: id })
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartState.cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - Rs{item.price} - {item.quantity}
                        &nbsp;
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            +
                        </button>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            -
                        </button>
                        &nbsp;
                        <button onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <hr />
            <h3>
                Total: Rs {
                    cartState.cartItems.reduce((total, item) => {
                        return total + item.price * item.quantity
                    }, 0)
                }
            </h3>
            <hr />
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - Rs{product.price} &nbsp;
                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingCart