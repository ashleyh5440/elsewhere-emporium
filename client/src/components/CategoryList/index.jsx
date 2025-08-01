import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// Important for useMutation: We import the specific query we'd like to perform from the mutations.js utility
import { ADD_PRODUCT } from '../../utils/mutations';
import { QUERY_PRODUCTS_BY_CATEGORY } from '../../utils/queries';

const CategoryList = () => {
    const { category } = useParams();
    const { loading, error, data } = useQuery(QUERY_PRODUCTS_BY_CATEGORY, {
        variables: { category },
    });

    if (loading) return <p>Loading products ...</p>;
    if (error) return <p>Error fetching products.</p>;

    const products = data?.productsByCategory || [];

    return (
        <div>
            <h2>{category}</h2>
            <div>
                {products.map((product) => (
                    <div>
                        <img src={product.image} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;