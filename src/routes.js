const { Router } = require('express');
const productController = require('./app/controllers/productController');

const router = Router();

router.get('/products', productController.index);

module.exports = router;
