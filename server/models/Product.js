const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
        type: String,
        required: true,
    },
    categoryImage: {
      type: String,
      required: true,
    },
    images: {
        type: [String],
        required: true,
        validate: (arr) => arr.length > 0 //needs to have at least one image but can have more
    },
    description: {
      type: String,
      // required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = model('Product', productSchema);

module.exports = Product;
