import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import AddUser from "./pages/AddUser";
import Users from "./pages/Users";
import Shop from "./pages/shop";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
	// {
	// 	path: "/",
	// 	element: <AddUser />,
	// },
	{
		path: "/users",
		element: <Users />,
	},
	{
		path: "/",
		element: <Shop />,
	},
	{
		path: "/add-product",
		element: <AddProduct />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
