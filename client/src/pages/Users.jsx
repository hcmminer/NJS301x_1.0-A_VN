import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navigation from "../components/Navigation";

const Users = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("http://localhost:5000/users");
			let data = await response.json();
			setUsers(data);
		};
		getUsers();
	}, []);

	return (
		<div>
			<Navigation />
			<ul>
				{users.length > 0 ? (
					users.map((i, index) => (
						<li key={index}>
							<a>{i.name}</a>
						</li>
					))
				) : (
					<h1>No Users Found!</h1>
				)}
			</ul>
		</div>
	);
};

export default Users;
