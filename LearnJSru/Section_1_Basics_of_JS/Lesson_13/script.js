"use strict";

function showMessage() {
	console.log("Вам письмо!");
}
showMessage();

//локальные переменные
function showName() {
	let name = "Vlad";
	console.log(name);
}
showName();


//Внешние переменные
let surname = "Ivanov";
function showSurname() {
	console.log(`Ваша фамилия ${surname}`);
}
showSurname();
//
let userName = "Fedor";
function showUserName() {
	let userName = "Stepan";//объявили локальную переменную
	let message = `Привет ${userName}`;
	console.log(message);
}
console.log(userName);
/*функция создаст и будет использовать свою собственную
локальную переменную userName*/
showUserName();
console.log(userName);
// Fedor, не изменилась, функция не трогала внешнюю переменную

//
let color = "Оранжевый";
function showColor() {
	color = "Синий"; //изменяем значение внешней переменной
	let answer = `Вы выбрали ${color} цвет`;
	console.log(answer);
}
console.log(color);
/*Оранжевый - до вызова функции*/
showColor();
console.log(color);
/*Синий - после вызова функции значение
внешней переменной было изменено*/


//---Параметры функций
function showWelcome(from, text) {
	from = "* " + from + " *";
	console.log(from + ", " + text);
}
showWelcome("Vlad", "приветствуем Вас");
showWelcome("Petr", "нам очень понравилось Ваше резюме");


//---Значение по умолчанию
function showGreeting(from, text = "текст по умолчанию") {
	from = "* " + from + " *";
	console.log(from + ", " + text);
}
/*Теперь, если параметр text не указан, его значением будет "текст не добавлен"
В данном случае "текст не добавлен" это строка, но на её месте могло бы быть и
более сложное выражение,
которое бы вычислялось и присваивалось при отсутствии параметра*/
showGreeting("Vlad");


//---Возврат значения
// function sum(a, b) {
// 	return a + b;
// }
// let result = sum(10, 15);
// console.log(result);
// //

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm("А родители разрешили?");
// 	}
// }
// let age = prompt("Сколько Вам лет", "");

// if (checkAge(age)) {
// 	alert("Доступ разрешен");
// } else {
// 	alert("Доступ закрыт!");
// }

//функция поиска простого числа (моя)
// let n;
// function searchSimple(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (!searhNum(i)) {
// 			continue;
// 		}
// 		console.log(i);
// 	}
// }
// function searhNum(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (n % i == 0) {
// 			return false;
// 		}
// 		return true;
// 	}
// }
// searchSimple(10);

//поиск простого числаа из учебника
// function showPrimes(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (!isPrime(i)) continue;
// 		console.log(i);  // простое
// 	}
// }
// function isPrime(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (n % i == 0) return false;
// 	}
// 	return true;
// }
// let n;
// showPrimes(10);

//----------TASKS

//1)

//2)
// let lvl = +prompt("What's your lvl?", "");
// function checkLvl(lvl) {
// 	//тернарный оператор
// 	// return (lvl > 18) ? alert("The entrance is allowed")
// 	// 	: confirm("Родители разрешили?");
// 	//оператор ИЛИ
// 	return (lvl > 18) || confirm("Родители разрешили?");
// }
// checkLvl(lvl);

//3) возврат меньшего числа
let a,
	b;
function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}
console.log(min(7, 3));


//4) квадрат числа
let x = +prompt("Введите число", ""),
	n = +prompt("Введите значение степени числа");
function pow(x, n) {
	if (n >= 1) {
		let result = x;
		for (let i = 1; i < n; i++) {
			result *= x;
		}
		return result;
	} else {
		return prompt(`Степень ${n} не поддерживается, введите новое число`);
	}
}
alert(pow(x, n));