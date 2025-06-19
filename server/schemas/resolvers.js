const { Product, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getProducts: async () => { //gets all products from database
            try {
                const products = await Product.find();
                return products;
            } catch (error) {
                throw new Error('Failed to fetch products');
            }
        }
    },
    Mutation: {
        addUser: async (_, { email, password }) => { //adds user
            try {
                const user = await User.create({ email, password });
                const token = signToken(user);
                return { token, user }
            } catch (error) {
                throw new Error('Failed to add user');
            }
        },
        login: async (_, { email, password }) => {
            try {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError('User not found');
                }
                const correctPassword = await user.isCorrectPassword(password);
                if(!correctPassword) {
                    throw new AuthenticationError('Incorrect password');
                }
                const token = signToken(user);
                return { token, user };
            } catch (error) {
                throw new AuthenticationError('Login failed');
            }
        }
    }
};

module.exports = resolvers; 