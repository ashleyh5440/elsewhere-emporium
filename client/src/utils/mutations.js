import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

//add item to user's cart

export const ADD_PRODUCT = gql `
    mutation addProduct($productId: ID!, $userCartId: ID!) {
        addProduct(productId: $productId, userCartId: $userCartId) {
            _id
            cart_name
            products {
                _id
                name
                category
                price
                image
            }
        }
    }
`;

//remove item from user's cart

export const REMOVE_PRODUCT = gql `
    mutation removeProduct($productId: ID!, $userCartId: ID!) {
        removeProduct(productId: $productId, userCartId: $userCartId) {
            _id
            cart_name
            products {
                _id
                name
                category
                price
                image
            }
        }
    }
`;

