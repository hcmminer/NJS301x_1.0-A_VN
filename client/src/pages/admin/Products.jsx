const { default: Navigation } = require("../../components/Navigation");
import React from "react";

const products = () => {
	return (
		<div>
			<Navigation />
			<main>
				{prods.length > 0 ? (
					<div class="grid">
						{prods.map((product, index) => (
							<article class="card product-item" key={index}>
								<header class="card__header">
									<h1 class="product__title">
										{product.title}
									</h1>
								</header>
								<div class="card__image">
									<img
										src="{ product.imageUrl }"
										alt="{ product.title }"
									/>
								</div>
								<div class="card__content">
									<h2 class="product__price">
										${product.price}
									</h2>
									<p class="product__description">
										{product.description}
									</p>
								</div>
								<div class="card__actions">
									<a
										href="/admin/edit-product/{ product.id }?edit=true"
										class="btn"
									>
										Edit
									</a>
									<form
										action="/admin/delete-product"
										method="POST"
									>
										<input
											type="hidden"
											value="{ product.id }"
											name="productId"
										/>
										<button class="btn" type="submit">
											Delete
										</button>
									</form>
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
