const express = require("express");
const router = express.Router();
const Product = require("../models/ProductSchema");

router.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ error: "Invalid product ID format" });
        }

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
router.get("/product/price", async (req, res) => {
    const price = req.query.price;

    if (!price || isNaN(price)) {
        return res.status(400).json({ error: "Invalid or missing price parameter" });
    }

    try {
        const products = await Product.find({ price: Number(price) });

        if (!products.length) {
            return res.status(404).json({ message: "No products found at this price" });
        }

        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
