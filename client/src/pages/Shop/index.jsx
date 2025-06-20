import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { NavLink, useNavigate } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import './style.css';

//have featured/sale items

function Shop() {
    return (
        <section className="shop-page">
            <div className="container1">
                <div id="box1">
                    <div className="category-box">
                        <h3>Bookmarks and stickers</h3>
                    </div>
                </div>
                <div id="box2">
                    <div className="category-box">
                        <h3>Digital Prints</h3>
                    </div>
                </div>
                <div md="auto" id="box3">
                    <div className="category-box">
                        <h3>Coloring Pages</h3>
                        <h3>Accessories</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shop;