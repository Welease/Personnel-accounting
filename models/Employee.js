var mongoose = require("mongoose"),
	EmployeeSchema,
	ObjectId = mongoose.Schema.Types.ObjectId;

// Это модель Mongoose для сотрудников
var EmployeeSchema = mongoose.Schema({
	id: Number,
	login: String,
	role: String,
	name: String,
	surname: String,
	middleName: String,
	phone: String,
	position: String,
	departmentId: { type: ObjectId, ref: "Department" }
});

var Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;