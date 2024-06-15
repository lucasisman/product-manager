require('dotenv').config();
const mongoose = require('mongoose');

const dbName = 'product_manager';
const dbUrl = process.env.MONGO_URL || `mongodb://localhost:27017/${dbName}`;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));
