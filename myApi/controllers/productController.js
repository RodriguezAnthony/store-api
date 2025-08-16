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

// Show all products
exports.showProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Show a single product
exports.showProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        product.name = req.body.name;
        product.price = req.body.price;
        product.inventory = req.body.inventory;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        await product.destroy();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
