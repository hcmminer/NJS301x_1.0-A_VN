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
				{/* <li className="menu-item">
					<a href="/" className="menu-link">
						Add User
					</a>
				</li> */}
				<li className="menu-item">
					<a href="/" className="menu-link">
						Shop
					</a>
				</li>
				<li className="menu-item">
					<a href="/add-product" className="menu-link">
						Add Product
					</a>
				</li>
			</ul>
		</div>
	);
};

export default navigation;
