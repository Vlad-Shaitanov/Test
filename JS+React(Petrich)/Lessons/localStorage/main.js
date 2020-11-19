"use strict";

const student = {
	name: "John",
	surname: "Smith",
	course: "first"
};
//Передача значения в localStorage
localStorage.setItem("student", JSON.stringify(student));

//Получение значения по ключу из localStorage
console.log(JSON.parse(localStorage.getItem("student")));

//Удаление записи по ключу из localStorage
localStorage.removeItem("student");

//Полная очистка локального хранилища
localStorage.clear();

window.addEventListener("DOMContentLoaded", function () {
	let checkbox = document.querySelector("#form-checkbox"),
		changeBtn = document.querySelector(".bottom-btn"),
		form = document.querySelector(".form");

	if (localStorage.getItem("isChecked") === "true") {
		checkbox.checked = true;
	}
	if (localStorage.getItem("bg") === "changed") {
		form.style.backgroundColor = "#FF4766";
	}

	checkbox.addEventListener("click", function () {
		localStorage.setItem("isChecked", true);
	});

	changeBtn.addEventListener("click", function () {
		localStorage.setItem("bg", "changed");
		form.style.backgroundColor = "#FF4766";
	});

	let persone = {
		name: "Alex",
		age: 35,
		devices: ["mobile phone", "notebook", "PC"]
	};

	let serializedPersone = JSON.stringify(persone);
	localStorage.setItem("Alex", serializedPersone);
	console.log(JSON.parse(localStorage.getItem("Alex")));
});
