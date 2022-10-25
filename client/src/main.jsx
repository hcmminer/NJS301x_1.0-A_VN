import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import EditProduct from "./pages/admin/EditProduct";
import Products from "./pages/admin/Products";
import ProductList from "./pages/shop/ProductList";
import ProductDetail from "./pages/shop/ProductDetail";
import Cart from "./pages/shop/Cart";
import { API } from "./config";
const router = createBrowserRouter([
	// PRODUCTS
	{
		path: "/products",
		element: <ProductList />,
	},
	{
		path: "/products/:productId",
		element: <ProductDetail />,
		loader: async ({ params }) => {
			return fetch(`${API}/products/${params.productId}`);
		},
	},
	// CART
	{
		path: "/cart",
		element: <Cart />,
	},
	// ADMIN
	{
		path: "/admin/add-product",
		element: <EditProduct editing={false} path="/admin/add-products" />,
	},
	{
		path: "/admin/edit-product/:productId",
		element: <EditProduct editing={true} path="/admin/edit-product" />,
	},
	{
		path: "admin/products",
		element: <Products path="admin/products" />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
