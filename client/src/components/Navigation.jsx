import React from "react";
const navigation = () => {
	return (
		<div>
			<ul className="menu">
				<li className="menu-item">
					<a href="/users" className="menu-link">
						Users
					</a>
				</li>
				<li className="menu-item">
					<a href="/" className="menu-link">
						Add User
					</a>
				</li>
			</ul>
		</div>
	);
};

export default navigation;
