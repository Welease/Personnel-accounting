var main = function (departmentObjects) {
	"use strict";
	//создание пустого массива с вкладками
	var tabs = [];
};

$(document).ready(function () {
	$.getJSON("/departments.json", function (depatmentObjects) {
		// вызов функции main с аргументом в виде объекта toDoObjects
		main(depatmentObjects);
	});
});

