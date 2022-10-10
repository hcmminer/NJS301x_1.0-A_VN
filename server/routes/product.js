const express = require("express");

const productController = require("../controllers/product.js");

const router = express.Router();

router.get("/", productController.getProducts);

router.post("/add-product", productController.postAddProduct);

module.exports = router;
