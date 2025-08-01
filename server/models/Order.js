const {Schema, model} = require('mongoose');

const orderSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 1
            },
        },
    ],
    total: {
        type: Number,
        required: true,
    }, 
    status: {
        type: String,
        default: 'Pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

const Order = model('Order', orderSchema);

module.exports = Order;