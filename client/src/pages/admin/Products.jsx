import Navigation from "../../components/Navigation";
import React, { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "./apiAdmin";

const products = () => {
	const [products, setProducts] = useState([]);
	const [cartLoading, setCartLoading] = useState(false);
	const prods = products;
	useEffect(() => {
		getProducts().then((data) => {
			if (data.error) {
				console.log(data.error.message);
			} else {
				setProducts(data);
			}
		});
	}, [cartLoading]);

	const deleteEvent = (product) => (e) => {
		deleteProduct(product).then(console.log("deleted"));
		setCartLoading(!cartLoading);
	};

	const editEvent = (productId) => (e) => {};
	return (
		<div>
			<Navigation />
			<main>
				{prods.length > 0 ? (
					<div className="grid">
						{prods.map((product, index) => (
							<article className="card product-item" key={index}>
								<header className="card__header">
									<h1 className="product__title">
										{product.title}
									</h1>
								</header>
								<div className="card__image">
									<img
										src={product.imageUrl}
										alt={product.imageUrl}
									/>
								</div>
								<div className="card__content">
									<h2 className="product__price">
										${product.price}
									</h2>
									<p className="product__description">
										{product.description}
									</p>
								</div>
								<div className="card__actions">
									<a
										href={`/admin/edit-product/${product.id}`}
										className="btn"
										onClick={editEvent(product)}
									>
										Edit
									</a>
									<a onClick={deleteEvent(product)}>Delete</a>
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

export default products;
