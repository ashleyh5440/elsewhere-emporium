// Important for useMutation: We bring in gql from the @apollo/client library to allow us to parse mutations (and queries) as template literals
import { gql } from '@apollo/client';

// Important for useMutation: Each mutation we'd like to be able to perform gets exported out of our mutations.js utility
export const ADD_PRODUCT = gql`
  mutation addProduct($name: String!) {
    addProduct(name: $name) {
      _id
      name
      category
      image
      price
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation removeProduct($name: String!) {
    removeProduct(name: $name) {
      _id
      name
      category
      image
      price
    }
  }
`;

export const CREATE_ORDER = gql `
    mutation createOrder($email: String!, $products: [OrderItemInput] ! ) {
        createOrder(email: $email, products: $products) {
            _id
            email
            createdAt
            products {
                productId
                quanity
            }
        }
    }
`;


