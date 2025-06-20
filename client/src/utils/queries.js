import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
        }
    }
`;

export const QUERY_USERCART = gql `
    query getUserCarts($userId: ID!) {
        getUserDecks(user_id: $userId) {
            _id
            user_id
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

export const QUERY_PRODUCTS = gql`
    query getProducts {
        getProducts {
        _id
        name
        category
        price
        image
        }
    }
`;