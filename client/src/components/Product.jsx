import React from "react";

const Product = ({ item }) => {
	return (
		<div className="item">
			<div className="item-image">
				<img src={item.imageUrl} alt="" className="item-img" />
			</div>
			<div className="item-content">
				<h3 className="item-title">{item.title}</h3>
				<p className="item-text">{item.description}</p>
				<p className="item-text">{item.price}</p>
			</div>
		</div>
	);
};

export default Product;
