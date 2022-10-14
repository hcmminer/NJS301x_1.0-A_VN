import React from "react";
import AddToCart from "../../components/AddToCart";

const ProductDetail = ({product}) => {
	return (
		<div>
			<main class="centered">
				<h1>{product.title}</h1>
				<hr />
				<div>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<h2>{product.price}</h2>
				<p>{product.description}</p>
				<AddToCart />
			</main>
		</div>
	);
};

export default ProductDetail;
