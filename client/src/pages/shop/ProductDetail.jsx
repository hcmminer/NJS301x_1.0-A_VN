import React from "react";
import Navigation from "../../components/Navigation";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
	const product = useLoaderData();
	return (
		<div>
			<Navigation />
			<main class="centered">
				<h1>{product.title}</h1>
				<hr />
				<div>
					<img src={product.imageUrl} alt={product.title} />
				</div>
				<h2>{product.price}</h2>
				<p>{product.description}</p>
			</main>
		</div>
	);
};

export default ProductDetail;
