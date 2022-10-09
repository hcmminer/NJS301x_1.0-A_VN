import React from "react";
import Navigation from "../components/Navigation";

const AddUser = () => {
	return (
		<div>
			<Navigation />
			<form action="http://localhost:5000/" method="POST">
				<input type="text" name="name" />
				<button type="submit">Add user name</button>
			</form>
		</div>
	);
};

export default AddUser;
