const express = require("express");
const router = express.Router();
const forMensProduct = require("../models/forMens");

// Route to get all men's products
router.get("/forMens", async (req, res) => {
  try {
    const Mens = await forMensProduct.find({});
    res.status(200).json(Mens);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving men's products",
        error: error.message,
      });
  }
});

module.exports = router;
