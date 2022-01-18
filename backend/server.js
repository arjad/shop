import express from 'express';
import dotenv from 'dotenv';
import Products from './data/products.js';
import connectDB from './config/db.js'; //db file import
connectDB();
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// get routes
app.get('/', (req, res) => {
    res.send('Api is running.....')
});

app.get('/api/products', (req, res) => {
   res.json(Products)
})

app.get('/api/products/:id', (req, res) => {
   const product = Products.find(p => p._id === req.params.id)
   res.json(product);
})

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );
