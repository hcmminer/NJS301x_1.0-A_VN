import { API } from "../../config.js";

export const createProduct = async (product) => {
	const response = await fetch(`${API}/admin/add-product`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	});
	const data = await response.json();
	return data;
};

export const getProducts = async () => {
	const response = await fetch(`${API}/admin/products`);
	const data = await response.json();
	return data;
};

export const deleteProduct = async (product) => {
	const res = await fetch(`${API}/admin/delete-product`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	});
};
