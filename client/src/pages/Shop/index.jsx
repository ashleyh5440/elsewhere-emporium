import { useQuery } from '@apollo/client';
import React from 'react';
import{ Link } from "react-router-dom"
import { QUERY_PRODUCTS } from '../../utils/queries';
import { QUERY_CATEGORIES } from '../../utils/queries';

// import '../../components/CategoryList/index'

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Shop/style.css'

const Shop = () => {
    const { loading, data, error } = useQuery(QUERY_CATEGORIES);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Um ... this is awkward but ...</p>

    const categories = data?.categories || [];
    console.log(categories)
    return (
        <section className="shop-container">
            <div className="category-box">
                <p>see me??</p>
                {categories.map((cat) => (
                    <Link 
                        to={`/shop/${cat.name}`}
                        key={cat._id}
                        className='category-card' 
                    >
                        <h3>{cat.name}</h3>
                        <div className="cat-img"><img src={cat.image}/></div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Shop;