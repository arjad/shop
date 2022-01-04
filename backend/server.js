const express = require('express')
const app = express()
const Products = require('./data/product')
const dotenv  =require("dotenv")
dotenv.config();


app.get('/', (req, res) => {
    res.send('Api is running.....')
});

app.get('/api/products', (req, res) => {
    //json method to output json data
    res.json(Products)
})
app.get('/api/products/:id', (req, res) => {
    const product = Products.find(p => p._id === req.params.id)
    res.json(product);
})
 
 
app.listen(5000, () => {
        console.log('App listening on port 5000!'); 
    }
);
