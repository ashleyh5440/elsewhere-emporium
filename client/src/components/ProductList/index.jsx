import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_PRODUCTS_BY_CATEGORY } from '../../utils/queries';
import { CartContext } from '../CartContext';

import { Link } from 'react-router-dom';
import { TypeKind } from 'graphql';

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
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div>
            <p>hi!!!!!! see me?</p>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product, console.log("click"))}>Add to cart</button>
          </div>
        ))}
      </div>
      <Link to="/shop"><button>Return to Shop page</button></Link>
    </div>
  )
}

export default ProductList;
