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
function sum(a, b) {
	return a + b;
}
let result = sum(10, 15);
console.log(result);