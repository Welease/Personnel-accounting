var Department = require("../models/Department.js"),
	DepartmentController = {},
	Employee = require("../models/Employee.js");

DepartmentController.index = function (req, res) {
	var login = req.params.login || null;

	if (login !== null && login == "admin") {
		Department.find(function (err, result) {
			if (err !== null) {
				res.json(500, err);
			} else if (result.length === 0) {
				res.status(404).json({ "result_length": 0 });
			} else {
				res.json(200, result);
			}
		});
	}
};

module.exports = DepartmentController;