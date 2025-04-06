import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './style.css';

function Checkout() {
    return (
        <section className="checkout-page">
            <Container>
                <h2>Checkout</h2>
                <Row style={{width: "90%", marginTop: "5%"}}>
                <Col xs={6} className="left-col">
                    {/* contact */}
                    <Row>
                        <p><strong>Contact Information</strong></p>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Mobile no"
                                    aria-label="Mobile no"
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>
                {/* shipping if needed */}
                    <Row style={{marginTop: "5%"}}>
                        <p><strong>Shipping Address</strong></p>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Addresss"
                                    required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address 2 (Optional)"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select" required>
                                        <option value>-- Country --</option>
                                        <option>United States</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select" required>
                                        <option value>-- State --</option>
                                        <option>California</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Zip"
                                    required
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>
                {/* billing */}
                    <Row style={{marginTop: "5%"}}>
                        <p><strong>Billing Address</strong></p>
                        <div className="form-check form-check-inline ms-3">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                            />
                            <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                            >
                                Same as Shipping Infomation
                            </label>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-md-12">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Addresss"
                                    required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address 2 (Optional)"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select" required>
                                        <option value>-- Country --</option>
                                        <option>United States</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select" required>
                                        <option value>-- State --</option>
                                        <option>California</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Zip"
                                    required
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>
                {/* payment */}
                    <Row style={{marginTop: "5%"}}>
                        <p><strong>Payment Information</strong></p>
                        <div className="card-body">
                            {/* payment types */}
                            <div className="row g-3 mb-3 border-bottom">
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input
                                        id="credit"
                                        name="paymentMethod"
                                        type="radio"
                                        className="form-check-input"
                                        defaultChecked
                                        required
                                        />
                                        <label className="form-check-label" htmlFor="credit">
                                            Credit card
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input
                                        id="paypal"
                                        name="paymentMethod"
                                        type="radio"
                                        className="form-check-input"
                                        required
                                        />
                                        <label className="form-check-label" htmlFor="paypal">
                                            PayPal
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* card number */}
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name on card"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Card number"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Expiration month"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Expiration year"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="CVV"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer border-info d-grid" style={{marginTop: "5%"}}>
                            <Button>Pay <strong>(total)</strong> Now</Button>
                        </div>
                    </Row>
                </Col>
                <Col className="right-col">
                {/* cart preview with total */}
                    <div>
                        <p><strong>Cart</strong></p>
                        {/* repeats as many times as needed */}
                        <Row>
                            <Col>product</Col>
                            <Col>price</Col>
                        </Row>
                        <Row style={{marginTop: "5%", borderTop: "2px solid white"}}>
                            <Col>Total</Col>
                            <Col>$$</Col>
                        </Row>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Checkout;