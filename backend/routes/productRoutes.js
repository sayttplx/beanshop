const express = require('express');
const router = express.Router();

const { 
    getAllProducts, 
    getProductById }
    = require('../controller/productControllers')


// hämta alla produkter från db.
// /api/products
router.get('/', getAllProducts);

// hämta en produk med id från db.
// /api/products/:id
router.get('/:id', getProductById);

module.exports = router;