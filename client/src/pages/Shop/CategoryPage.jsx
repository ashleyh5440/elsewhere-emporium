import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import products from '../../data/index';
import ProductCard from '../../components/ProductCard/CardProduct';

const formatCategory = (slug) => {
    return slug
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

function CategoryPage() {
    const { category } = useParams();
    const formattedCategory = formatCategory(category);

    const filteredProducts = products.filter(
        product => product.category === formattedCategory
    );

    return (
        <section>
              {/* <h2>{formattedCategory}</h2> */}
              <Row>
                {filteredProducts.length ? (
                    filteredProducts.map(product => (
                        <Col key={product.id} md={4} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))
                ) : (
                    <p>None found</p>
                )}
              </Row>
        </section>
    )
}

export default CategoryPage;