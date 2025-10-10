// Important for useQuery: We bring in gql from the @apollo/client library to allow us to parse queries (and mutations) as template literals
import { gql } from '@apollo/client';

// Important for useQuery: Each query we'd like to be able to perform gets exported out of our queries.js utility
export const QUERY_PRODUCTS = gql`
  query allProducts {
    products {
      _id
      name
      category
      images
      price
    }
  }
`;

// Important for Query Variables: To successfully execute this GraphQL query, you would need to provide a non-null ID value for the profileId argument. This value is passed using the $profileId variable, which represents the placeholder for the actual value in the query.
export const QUERY_SINGLE_PRODUCT = gql`
  query singleProduct($productId: ID!) {
    product(productId: $productId) {
      _id
      name
      category
      images
      description
      price
    }
  }
`;

export const QUERY_PRODUCTS_BY_CATEGORY = gql`
  query productsByCategory($category: String!) {
    productsByCategory(category: $category) {
      _id
      name
      category
      images
      price
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
      image
    }
  }
`;

export const QUERY_SINGLE_ORDER = gql `
    query singleOrder {
        order {
            _id
            email
            createdAt
            products {
                productID
                quantity
            }
        }
    }
`;

export const QUERY_ORDERS = gql `
    query getOrders {
        orders {
            _id
            email
            createdAt
            products {
                productID
                quantity
            }
        }
    }
`;
