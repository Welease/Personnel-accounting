var main = function (depObj) {
	"use strict";

	var $input = $("<input>").addClass("input-name"),
		$butLogin = $("<button>").text("Войти в аккаунт").addClass("authorization-btn");

	$("main .main-text").append($input);
	$("main .main-text").append('<br>');
	$("main .container").append($butLogin);
};

$(document).ready(function () {
	$.getJSON("/departments.json", function (depObj) {
		// вызов функции main с аргументом в виде объекта toDoObjects
		main(depObj);
	});
});

