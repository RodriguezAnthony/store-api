const { Product } = require('../models');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, price, inventory } = req.body;
        const product = await Product.create({ name, price, inventory });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.showProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
