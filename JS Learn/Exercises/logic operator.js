"use strict";

//alert(null || 2 || undefined); //2

//alert(alert(1) || 2 || alert(3));
/*Первый оператор ИЛИ || выполнит первый alert(1).
Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного
значения.
Так как второй*/

//alert(alert(1) && alert(2));

// let age = 13;
// if (age >= 14 && age <= 90) {
// 	alert("В диапазоне!");
// } else if (!(age >= 14 && age <= 90)) {
// 	alert("Вне диапазона!");
// }

// let age = 55;
// if (!(age >= 14 && age <= 90));

let name = prompt("Кто здесь?", "");
if (name == "Админ") {
	let password = prompt("Пароль", "");
	if (password == "Я Главный") {
		alert("Здравствуйте!");
	} else if (password == "" || password == null) {
		alert("Отменено!");
	} else {
		alert("Неверный пароль!");
	}
} else if (name == "" || name == null) {
	alert("Отменено!");
} else {
	alert("Я не знаю кто ты!");
}