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