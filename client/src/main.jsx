import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import EditProduct from "./pages/admin/EditProduct";

const router = createBrowserRouter([
	{
		path: "/admin/add-product",
		element: <EditProduct editing={false} />,
	},
	{
		path: "/admin/edit-product",
		element: <EditProduct editing={true} />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
