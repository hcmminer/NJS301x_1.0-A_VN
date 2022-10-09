import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import AddUser from "./pages/AddUser";
import Users from './pages/Users'

const router = createBrowserRouter([
	{
		path: "/",
		element: <AddUser />,
	},
	{
		path: "/users",
		element: <Users />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
