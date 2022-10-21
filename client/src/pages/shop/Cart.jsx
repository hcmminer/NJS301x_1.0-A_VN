import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { API } from "../../config";
import { deleteCart, getCart } from "./apiShop";

const Cart = () => {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getCart().then((data) => {
			if (data.error) {
				console.log("failed");
			} else {
				setCart(data);
			}
		});
	}, [loading]);

	const handleSubmit = (product) => (e) => {
		e.preventDefault();
		deleteCart(product).then(console.log("ok"));
		setLoading(!loading);
	};

	return (
		<div>
			<Navigation />
			<main>
				<ul>
					{cart.map((p, i) => (
						<li key={i}>
							<p>
								{p.productData.title} {p.qty}
							</p>
							<form onSubmit={handleSubmit(p.productData)}>
								<input
									type="hidden"
									value={p.productData.id}
									name="productId"
								/>
								<button className="btn" type="submit">
									Delete
								</button>
							</form>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};
export default Cart;
