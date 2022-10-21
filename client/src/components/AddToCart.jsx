import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ product }) => {
	const navigate = useNavigate();
	const handlerSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`${API}/cart`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		}).then(navigate("/cart"));
	};
	return (
		<div>
			<form onSubmit={handlerSubmit}>
				<button className="btn">Add To Cart</button>
				<input type="hidden" name="productId" value={product.id} />
			</form>
		</div>
	);
};

export default AddToCart;
