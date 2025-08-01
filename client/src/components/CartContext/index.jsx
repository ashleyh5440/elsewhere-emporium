import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart){
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(item => item._id === product._id);
            //increase quanity if already in cart
            if (existing) {
                return prev.map(item =>
                    item._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const increaseQty = (productId) => {
        setCart((prev) =>
            prev.map(item =>
                item._id === productId
                ? { ...item, quantity: item.quantity + 1}
                : item
            )
        );
    };

    const decreaseQty = (productId) => {
        setCart((prev) => 
            prev.map(item =>
                item._id === productId
                ? { ...item, quantity: item.quantity - 1}
                : item
            ).filter(item => item.quantity > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter(item => item._id !== productId));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseQty, decreaseQty }} >
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };