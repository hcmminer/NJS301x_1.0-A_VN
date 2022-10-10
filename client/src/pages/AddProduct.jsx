import React from "react";
import Navigation from "../components/Navigation";

const AddProduct = () => {
	return (
		<div>
			<Navigation />
			<form action="http://localhost:5000/add-product" method="POST">
				<input type="text" name="title" />
				<input type="text" name="imageUrl" />
				<input type="text" name="description" />
				<input type="text" name="price" />
				<button type="submit">Add Product</button>
			</form>
		</div>
	);
};

export default AddProduct;
