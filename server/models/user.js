const fs = require("fs");
const path = require("path");

// lay file tu may tinh
const p = path.join(
	path.dirname(require.main.filename),
	"data",
	"users.json"
);

// tien xu ly cho cb - dinh doi so vao phai la obj
const getUserFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class User {
	constructor(t) {
		this.name = t;
	}

	save() {
		getUserFromFile((user) => {
			user.push(this);
			fs.writeFile(p, JSON.stringify(user), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		getUserFromFile(cb);
	}
};
