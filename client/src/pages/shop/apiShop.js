import { API } from "../../config.js";

export const getProducts = async () => {
	const res = await fetch(`${API}/products`);
	const data = await res.json();
	return data;
};

export const getCart = async () => {
	const res = await fetch(`${API}/cart`);
	const data = await res.json();
	return data;
};

export const deleteCart = async (product) => {
	const res = await fetch(`${API}/cart-delete-item`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	});
};
