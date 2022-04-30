var mongoose = require("mongoose");

var DepartmentSchema = mongoose.Schema({
	name: String,
	id: String
});

var Department = mongoose.model("Department", DepartmentSchema);
module.exports = Department;