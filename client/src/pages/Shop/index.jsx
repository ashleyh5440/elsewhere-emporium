import products from '../../data/index';
import ProductCard from '../../components/ProductCard/CardProduct';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './style.css';

const categories = [
    'Digital Prints',
    'Bookmarks',
    'Stickers',
    'Coloring Pages',
];

function Shop() {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        const formatted = category.toLowerCase().replace(/\s+/g, '-');
        navigate(`/shop/${formatted}`);
    }
    return (
        <section className="shop-page">
            <h1>Category</h1>
            <Row>
                {categories.map ((cat, i) => (
                    <div className="category-box">
                        <div className="diamond"></div>
                        <div className="square"></div>
                        <Button
                            key={i}
                            varient="outline-dark"
                            className="m-2"
                            onClick={() => handleCategoryClick(cat)}
                        >
                            {cat}
                        </Button>
                    </div>
                    // <Button
                    // key={i}
                    // varient="outline-dark"
                    // className="m-2"
                    // onClick={() => handleCategoryClick(cat)}
                    // >
                    //     {cat}
                    // </Button>
                ))}
            </Row>
            {/* <Row className="product-list">
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row> */}
        </section>
    )
};

export default Shop;