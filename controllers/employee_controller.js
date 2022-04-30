var Employee = require("../models/Employee.js");
var Department = require("../models/Department.js");

var EmployeeController = {};

//проверка, не существует ли уже пользователь
Employee.find({},function (err, result) {
	if (err !== null){
		console.log("Что-то идет не так");
		console.log(err);
	} else if (result.length === 0) {
		console.log("Создание тестового пользователя...");
		var dep = new Department({ "id": 0, "name": "adminDepartment" });
		dep.save(function (err, result) {
			if (err) {
				consoler.log(error);
			} else {
				console.log("Test dep added");
			}
		});
		var employee = new Employee({ "id": 0, "login": "admin", "name": "Танзиля", "surname": "Фаррухшина", "middleName": "Радиковна", "phone": "89393972828", "position": "Руководитель", "departmentId": dep });
		employee.save(function (err, result) {
			if (err) {
				console.log(err);
			} else {
				console.log("Тестовый пользователь сохранен");
			}
		});
	}
});

EmployeeController.index = function (req, res) {
	console.log('Вызвано действие: EmployeeController.index');
	Employee.find(function (err, employees) {
		if (err !== null) {
		  res.json(500, err);
		} else {
			res.status(200).json(employees);
		}
	});
};


//Отобразить пользователя
EmployeeController.show = function (req, res) {
	console.log('Вызвано действие: отобразить пользователя: ' + req.params.login);
	Employee.find({ 'login': req.params.login}, function (err, result) {
		if (err) {
			console.log(err);
		} else if (result.length !== 0) {
			console.log('Sending response to ' + req.params.login);
			res.sendfile('./client/list.html');
		} else {
			res.send(404);
		}
	});
};


module.exports = EmployeeController;