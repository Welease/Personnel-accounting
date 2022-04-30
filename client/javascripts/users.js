var main = function (UsersObjects) {
	"use strict";
	var $input = $("<input>").addClass("input-name"),
		$butLogin = $("<button>").text("Войти в аккаунт").addClass("authorization-btn");

	$butLogin.on("click", function () {
		var login = $input.val();
		if (login !== null && login.trim() !== "") {
			var loginUser = { "login": login };
			$.ajax({
				'url': '/users/' + login,
				'type': 'GET'
			}).done(function (response) {
				window.location.replace('users/' + login + '/');
			}).fail(function (jqXHR, textStatus, error) {
				console.log(error);
				alert("Ошибка!" + jqXHR.status + " " + jqXHR.textStatus);
			});
		}
		else
			alert("Неудачное имя пользователя!");
	});

	$("main .authorization").append($input);
	$("main .authorization").append('<br>');
	$("main .authorization").append($butLogin);
}

$(document).ready(function() {
	$.getJSON("users.json", function (UsersObjects) {
		main(UsersObjects);
	});
});