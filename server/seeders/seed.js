const db = require('../config/connection');
const { Product, User } = require('../models');
const productSeeds = require('./productSeeds.json');

const cleanDB = require('./cleanDB');

db.once('open', async () => { //listens for 'open' event to execute function
    try {
        try { //resets the collections
            await cleanDB('Product', 'products');
            await cleanDB('User', 'users');
        } catch (error) {
            console.error('Error in cleaning database', error);
        }

        await Product.create(productSeeds); 
        console.log('products seeded');

        //example user for testing
        const user = await User.create({ //creates new user
            username: 'exampleUser',
            email: 'user@example.com',
            password: 'password123'
        });

        //example deck for testing
        console.log('user seeded');
        console.log('all done!');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database', error);
    }
})