const User = require("../models/user");

exports.postAddUser = (req, res, next) => {
	const user = new User(req.body.name);
	user.save();
	res.redirect("http://localhost:5173/users");
};

exports.getUsers = (req, res, next) => {
	User.fetchAll((users) => {
		res.status(200).json(users);
	});
};
