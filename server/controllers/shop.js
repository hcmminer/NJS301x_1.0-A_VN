const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.status(200).json(products);
	});
};

exports.getProduct = (req, res, next) => {
	const prodId = req.params.productId;
	Product.findById(prodId, (product) => {
		res.status(200).json(product);
	});
};

// exports.getIndex = (req, res, next) => {
// 	Product.fetchAll((products) => {
// 		res.render("shop/index", {
// 			prods: products,
// 			pageTitle: "Shop",
// 			path: "/",
// 		});
// 	});
// };

exports.getCart = (req, res, next) => {
	Cart.getCart((cart) => {
		Product.fetchAll((products) => {
			const cartProducts = [];
			for (product of products) {
				const cartProductData = cart.products.find(
					(prod) => prod.id === product.id
				);
				if (cartProductData) {
					cartProducts.push({
						productData: product,
						qty: cartProductData.qty,
					});
				}
			}
			res.json(cartProducts);
		});
	});
};

exports.postCart = (req, res, next) => {
	const prodId = req.body.id;
	Product.findById(prodId, (product) => {
		Cart.addProduct(prodId, product.price);
	});
};

exports.postCartDeleteProduct = (req, res, next) => {
	const prodId = req.body.id;
	Product.findById(prodId, (product) => {
		Cart.deleteProduct(prodId, product.price);
	});
};

exports.getOrders = (req, res, next) => {
	res.render("shop/orders", {
		path: "/orders",
		pageTitle: "Your Orders",
	});
};

exports.getCheckout = (req, res, next) => {
	res.render("shop/checkout", {
		path: "/checkout",
		pageTitle: "Checkout",
	});
};
