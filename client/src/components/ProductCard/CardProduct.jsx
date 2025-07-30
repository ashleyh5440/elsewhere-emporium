import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';

const ProductCard = ({ product }) => {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);
  if (loading) return <p>loading . . .</p>
  if (error) return <p>Error fetching products</p>
  
  return (
    <Card className="product-card">
      {data.products.map((product) => (
        <div>
          <img src={product.image} />
          <h3>{product.name}</h3>
          <span>${product.price}</span>
        </div>
      ))}

    </Card>
  );
};

export default ProductCard;