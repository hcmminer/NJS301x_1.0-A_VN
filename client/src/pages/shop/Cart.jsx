import React from "react";
import Navigation from "../../components/Navigation";

const Cart = () => {
	return (
		<div>
			<Navigation />
			<main>
				{products.length > 0 ? (
					<ul>
						{products.map((p, i) => (
							<li key={i}>
								<p>
									{p.productData.title} ({p.qty})
								</p>
								<form action="/cart-delete-item" method="POST">
									<input
										type="hidden"
										value={p.productData.id}
										name="productId"
									/>
									<button class="btn" type="submit">
										Delete
									</button>
								</form>
							</li>
						))}
					</ul>
				) : (
					<h1>No Products in Cart!</h1>
				)}
			</main>
		</div>
	);
};

export default Cart;
