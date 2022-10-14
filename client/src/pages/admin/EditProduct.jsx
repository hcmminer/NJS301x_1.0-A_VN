import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { createProduct } from "./apiAdmin";

const EditProduct = ({ editing, product }) => {
	const [newProduct, setNewtProduct] = useState({
		title: "",
		imageUrl: "",
		description: "",
		price: "",
	});
	const [editingProduct, setEditingProduct] = useState(product);

	const clickSubmit = (event) => {
		event.preventDefault();
		createProduct(newProduct)
			.then((data) => {
				if (data.error) {
					console.log(data.error);
				} else {
					console.log(data);
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<Navigation />
			<main>
				<form className="product-form" onSubmit={clickSubmit}>
					<div className="form-control">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							name="title"
							id="title"
							value={
								editing
									? editingProduct.title
									: newProduct.title
							}
							onChange={(e) => {
								if (editing) {
									setEditingProduct({
										...editingProduct,
										title: e.target.value,
									});
								} else {
									setNewtProduct({
										...newProduct,
										title: e.target.value,
									});
								}
							}}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="imageUrl">Image URL</label>
						<input
							type="text"
							name="imageUrl"
							id="imageUrl"
							value={
								editing
									? editingProduct.imageUrl
									: newProduct.imageUrl
							}
							onChange={(e) => {
								if (editing) {
									setEditingProduct({
										...editingProduct,
										imageUrl: e.target.value,
									});
								} else {
									setNewtProduct({
										...newProduct,
										imageUrl: e.target.value,
									});
								}
							}}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="price">Price</label>
						<input
							type="number"
							name="price"
							id="price"
							step="0.01"
							value={
								editing
									? editingProduct.price
									: newProduct.price
							}
							onChange={(e) => {
								if (editing) {
									setEditingProduct({
										...editingProduct,
										price: e.target.value,
									});
								} else {
									setNewtProduct({
										...newProduct,
										price: e.target.value,
									});
								}
							}}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="description">Description</label>
						<textarea
							value={
								editing
									? editingProduct.description
									: newProduct.description
							}
							onChange={(e) => {
								if (editing) {
									setEditingProduct({
										...editingProduct,
										description: e.target.value,
									});
								} else {
									setNewtProduct({
										...newProduct,
										description: e.target.value,
									});
								}
							}}
							name="description"
							id="description"
							rows="5"
						></textarea>
					</div>
					{editing
						? `<input 
							type="hidden" 
							value={editing ? editingProduct.id : newProduct.id}
							onChange={(e) => {
								if (editing) {
									setEditingProduct({
										...editingProduct,
										id: e.target.value,
									});
								} 
							}}
							name="productId">`
						: ""}
					<button className="btn" type="submit">
						{editing ? "Update Product" : "Add Product"}
					</button>
				</form>
			</main>
		</div>
	);
};

export default EditProduct;
