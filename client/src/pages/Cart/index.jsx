import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../components/CartContext";

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Cart/style.css'

const Cart = () => {
    const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <section className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <Container>
                    {cart.map(item => (
                        <div className="item-box" key={item._id}>
                            <h4>{item.name}</h4>
                            <div className="image-box">
                                <img src={item.image} />
                            </div>
                            <Row className="qnty-box">
                                <Col><Button className="sub-btn" onClick={() => decreaseQty(item._id)}>-</Button></Col>
                                <Col className="qty-col" style={{color: "white"}}>Qty: {item.quantity}</Col>
                                <Col><Button className="add-btn"onClick={() => increaseQty(item._id)}>+</Button></Col>
                            </Row>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                            <Button onClick={() => removeFromCart(item._id)}>Remove</Button>
                        </div>
                    ))}
                </Container>
            )}
            <div className="checkout-box">
                <h3>Total: ${total.toFixed(2)}</h3>
                <Button id="checkout-btn">Checkout</Button>
                <Link to="/shop"><Button id="return-btn">Keep Shopping</Button></Link>
            </div>
        </section>
    );
};

export default Cart;