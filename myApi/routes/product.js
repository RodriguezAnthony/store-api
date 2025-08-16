const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.showProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.showProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;