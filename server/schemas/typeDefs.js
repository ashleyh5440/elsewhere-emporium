const typeDefs = `
  type Product {
    _id: ID!
        name: String!
        category: String!
        images: [String]!
        description: String
        price: Int!
  }

   type OrderItem {
        productId: ID!
        quantity: Int!
    }
    
    type Order {
        _id: ID!
        email: String!
        products: [OrderItem]
        createdAt: String!
    }

    input OrderItemInput {
        productId: ID!
        quantity: Int!
    }

    type Category {
      _id: ID!
      name: String!
      image: String!
    }

  # Important for useQuery: We define our Query type to inform our entry points
  # The Query type is built-in to GraphQL, so we only need to extend it to include which kinds of information we plan to request in our application
  
  type Query {
    products: [Product]!
    orders: [Order]!
    categories: [Category]
    productsByCategory(category: String!): [Product]
    product(productId: ID!): Product
    
     # Important for Query Variables: The product query field allows us to fetch the specific Product data by using the productId argument and providing a non-null ID value as the argument value
  }

  # Important for useMutation: We define our Mutation type to inform our entrypoints
  
  type Mutation {
    addProduct(name: String!, 
      category: String!,
      image: String!,
      price: Int!): Product
    removeProduct(productId: ID!): Product
    createOrder(email: String!, products: [OrderItemInput]!): Order
  }
`;

module.exports = typeDefs;
