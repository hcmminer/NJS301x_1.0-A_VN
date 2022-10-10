const fs = require("fs");
const path = require("path");

// lay file tu may tinh
const p = path.join(
	path.dirname(require.main.filename),
	"data",
	"products.json"
);

// tien xu ly cho cb - dinh dang doi so vao phai la obj
const getProductFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Product {
	constructor(title, imageUrl, description, price) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	save() {
		getProductFromFile((product) => {
			product.push(this);
			fs.writeFile(p, JSON.stringify(product), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		getProductFromFile(cb);
	}
};
