import React, { useEffect, useState } from "react";
import AddToCart from "../../components/AddToCart";
import Navigation from "../../components/Navigation";
import { getProducts } from "./apiShop";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const prods = products;
	useEffect(() => {
		getProducts().then((data) => {
			if (data.error) {
				console.log("No Product Found!");
			} else {
				setProducts(data);
			}
		});
	}, []);

	return (
		<div>
			<Navigation />
			<main>
				{prods.length > 0 ? (
					<div className="grid">
						{prods.map((product, index) => (
							<article key={index} className="card product-item">
								<header className="card__header">
									<h1 className="product__title">
										{product.title}
									</h1>
								</header>
								<div className="card__image">
									<img
										src={product.imageUrl}
										alt={product.title}
									/>
								</div>
								<div className="card__content">
									<h2 className="product__price">
										{product.price}
									</h2>
									<p className="product__description">
										{product.description}
									</p>
								</div>
								<div className="card__actions">
									<a
										href={`/products/${product.id}`}
										className="btn"
									>
										Details
									</a>
									<AddToCart product={product} />
								</div>
							</article>
						))}
					</div>
				) : (
					<h1>No Products Found!</h1>
				)}
			</main>
		</div>
	);
};

export default ProductList;
