import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Product from "../components/Product";

const shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			const response = await fetch("http://localhost:5000/");
			let data = await response.json();
			setProducts(data);
		};
		getProducts();
	}, []);

	return (
		<div>
			<Navigation />
			<ul>
				{products.length > 0 ? (
					products.map((item, index) => (
						<li key={index}>
							<Product item={item} />
						</li>
					))
				) : (
					<h1>No Products Foundaaa</h1>
				)}
			</ul>
		</div>
	);
};

export default shop;
