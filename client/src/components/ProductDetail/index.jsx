import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_PRODUCT } from "../../utils/queries";
import { CartContext } from "../CartContext";

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import '../ProductDetail/style.css'

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const { loading, error, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: { productId },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>$^$#^@**</p>;

    const product = data?.product;
    if (!product) return <p>Not found</p>

    const images = product.images || [product.image];

    return (
        <section className="detail-page">
            <Row>
                <h2>{product.name}</h2>
                <Col xs={6} className="detail-left">
                    <Carousel>
                    {images.map((img, index) => (
                        <Carousel.Item>
                        <img className="d-block w-100" src={img} />
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col className="detail-right">
                        <p>description here?</p>
                    <p>${product.price.toFixed(2)}</p>
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                </Col>
                <div>
                    <Button onClick={() => navigate(-1)}>Back to products</Button>
                </div>
            </Row>
        </section>
    );
};

export default ProductDetail;