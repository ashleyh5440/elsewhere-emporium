import React, { useContext } from "react";
import { CartContext } from "../../components/CartContext";

const Cart = () => {
    const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item._id}>
                            <h4>{item.name}</h4>
                            <div style={{width: "30%", display: "flex", justifyContent: "space-around"}}>
                                <button onClick={() => decreaseQty(item._id)}>-</button>
                                <p>Qty: {item.quantity}</p>
                                <button onClick={() => increaseQty(item._id)}>+</button>
                            </div>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                            <button onClick={() => removeFromCart(item._id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            )}
            <button>Checkout</button>
        </div>
    );
};

export default Cart;