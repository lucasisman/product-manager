const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.routes');

const app = express();
const PORT = 5000; // Cambia este valor a un puerto no usado

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', productRoutes);

// MongoDB connection
const uri = 'mongodb://localhost:27017/product-manager';
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
