const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.showProducts);
router.post('/', productController.createProduct);

module.exports = router;