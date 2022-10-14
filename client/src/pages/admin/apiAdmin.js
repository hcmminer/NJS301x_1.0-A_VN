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
