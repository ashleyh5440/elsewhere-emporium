// Important for useQuery: The resolver matches the typeDefs entry point and informs the request of the relevant data
 
    // Important for Query Variables: Each query resolver function can accept up to four parameters.
    // The second parameter, commonly referred to as "args," represents the variable argument values passed with the query.
    // It is always an object, and in this case, we are destructuring that object to retrieve the profileId value.
    
 
  // Important for useMutation: The resolver matches the typeDefs entry point and informs the request of the relevant data


const { Product, Order,Category } = require('../models');

const resolvers = {
  Query:{
    // products: async () => Product.find(),
    products: async () => Product.find().populate('category'),
    orders: async () => Order.find(),
    categories: async () => Category.find(),
    product: async (_, { productId }) => Product.findById(productId),
    productsByCategory: async (_, { category }) => {
      return Product.find({ category: new RegExp(`^${category}$`, 'i') });
    },
  },

  Mutation: {
    addProduct: async (parent, { name }) => {
      return Product.create({ name, price, image });
    },
    removeProduct: async (_, { id }) => {
      return await Product.findByIdAndDelete(id);
    },
    createOrder: async (_, { email, products }) => {
      return await Order.create({ email, products });
    },

  },
};

module.exports = resolvers;
