const db = require('../config/connection');
const { Product, Order, Category } = require('../models');
const productSeeds = require('./productSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Product', 'products');
    await cleanDB('Category', 'categories')
    
    await Product.create(productSeeds);

    //this extracts products based on their categories
    const uniqueCategories = [...new Set(productSeeds.map(p => p.category))];

    //create category docs in the database
    const categoryDocs = uniqueCategories.map(name => ({
      name, 
      image: `images/${name.toLowerCase()}.png`
    }));

    await Category.create(categoryDocs);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
