const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
	const product = new Product(
		req.body.title,
		req.body.imageUrl,
		req.body.description,
		req.body.price
	);
	product.save();
	res.redirect("http://localhost:5173/");
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.status(200).json(products);
	});
};
