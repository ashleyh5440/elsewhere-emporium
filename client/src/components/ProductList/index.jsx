import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_PRODUCTS_BY_CATEGORY } from '../../utils/queries';
import { CartContext } from '../CartContext';

import { Link } from 'react-router-dom';
import { TypeKind } from 'graphql';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import '../ProductList/style.css'


const ProductList = () => {
  const { category } =  useParams();
  const { addToCart } = useContext(CartContext)

  const { loading, error, data } = useQuery(QUERY_PRODUCTS_BY_CATEGORY, {
    variables: { category },
  });
  console.log("category from url", category);

  if (loading) return <p>Loading products ...</p>
  if (error) return <p>Grrrrr.....</p>

  const products = data?.productsByCategory || [];
  // console.log("products fetched", products)

  //be sure to add images in the form of {product.image}
  return (
    <section id="productlist-comp">
      <Container>
        {products.map((product) => (
          <div className="product-box">
            <h3>{product.name}</h3>
            <div className="product-img">
              <img src={product.image}/>
              image here
            </div>
            <p>${product.price.toFixed(2)}</p>
            <Button onClick={() => {
              console.log("click")
               addToCart(product)
            }}>Add to cart</Button>
          </div>
        ))}
      </Container>
      <Link to="/shop"><Button id="return-btn">Return to Shop page</Button></Link>
    </section>
  )
}

export default ProductList;
