const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/moonblood-studio');
console.log(process.env.MONGODB_URI, "if you see me, this means connection is working");

module.exports = mongoose.connection;
