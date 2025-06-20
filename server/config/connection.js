const mongoose = require('mongoose'); //importing Mongoose library

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moonblood-studio');

module.exports = mongoose.connection; 