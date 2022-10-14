import React from "react";
import AddToCart from "../../components/AddToCart";

const ProductList = () => {
	return (
		<div>
			<main>
				{prods.length > 0 ? (
					<div class="grid">
						{prods.map((product, index) => (
							<article key={index} class="card product-item">
								<header class="card__header">
									<h1 class="product__title">
										{product.title}
									</h1>
								</header>
								<div class="card__image">
									<img
										src={product.imageUrl}
										alt={product.title}
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
										href="/products/{ product.id }"
										class="btn"
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
