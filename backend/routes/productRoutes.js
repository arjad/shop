import express from 'express'
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const products=await Product.find({})
    res.json(products);
}))
router.get('/api/products', (req, res) => {
    const products=await Product.find({})
    res.json(products);
})
router.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
})


export default router;