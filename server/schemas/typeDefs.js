const typeDefs = `
    type Product {
        _id: ID!
        name: String!
        description: String!
        category: String!
        image: String!
    }

    type User {
        _id: ID!
        email: String!
    } 


    type Auth {
        token: ID!
        user: User
      }

    type Query {
        getProducts: [Product]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs; 