import React from "react";

const AddToCart = ({ product }) => {
	return (
		<div>
			<form action="/cart" method="post">
				<button class="btn" type="submit">
					Add to Cart
				</button>
				<input type="hidden" name="productId" value={product.id} />
			</form>
		</div>
	);
};

export default AddToCart;
