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
	console.log(data);
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

export const editProduct = async (productId) => {
	const res = await fetch(`${API}/admin/edit-product/${productId}`);
	const data = await res.json();
	return data;
};

export const postEditProduct = async (product) => {
	const res = await fetch(`${API}/admin/edit-product`, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	});
};
