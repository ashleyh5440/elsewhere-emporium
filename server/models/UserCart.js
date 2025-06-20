const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Digital Prints', 'Accessories', 'Coloring Pages'],
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const userCartSchema = new Schema ({
    name: {
        type: String,
        required: true,
        default: 'Cart',
    },
    user_id: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [productSchema]
});

const UserCart = model('UserCart', userCartSchema);

model.exports = UserCart;
