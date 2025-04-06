import { NavLink, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './style.css';

function Cart() {

    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        //when user clicks the checkout btn, their taken to checkout page to pay
    }

    return (
        <section className="cart-page"> 
            <Container>
                <Row id="box1">
                    <Col sm={8}>
                    <table className="in-cart">
                        <thead>
                            <tr>
                                <th scope="col" width={250}>Product</th>
                                <th scope="col" width={150}>Quanity</th>
                                <th scope="col" width={150}>Price</th>
                                {/* <th scope="col" width="130"></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div>product here</div>
                                </td>
                                <td>
                                    <div className="quantity-box">
                                        <Button variant="outline-light">-</Button>
                                        <div>q</div>
                                        <Button variant="outline-light">+</Button>
                                    </div>
                                </td>
                                <td><div>$$$</div></td>
                            </tr>
                        </tbody>
                    </table>
                    </Col>
                    <Col sm={4}>
                        <div id="total-box">
                            Total
                        </div>
                    </Col>
                    <Row>
                        <div id="checkout-box">
                            <Button>Checkout</Button>
                        </div>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default Cart;