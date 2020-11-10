"use strict";

//=== Интерполяция ===
let name = "Fred",
	age = 30,
	mail = "example@mail.ru";

document.write(`Пользователю ${name} ${age} лет, его рабочая почта: ${mail}`);


//=== Особенности let и const ===
function makeArray() {
	var items = [];

	for (let i = 0; i < 10; i++) {
		var item = function () {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}
var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();


//=== Стрелочные функции ===
let fun = () => {
	console.log(this);
};
fun();

let obj = {
	number: 5,
	sayNumber() {
		let say = () => {
			console.log(this);
		};
		say();
	}
};
obj.sayNumber();

let btn = document.querySelector("button"),
	input = document.querySelector("#age");

btn.addEventListener("click", function () {
	let show = () => {
		console.log(this);
	};
	show();
});


//=== Параметры по умолчанию ===
function sum(a, b, c = 3) {
	console.log(a + b + c);
}
sum(2, 5);
sum(2, 5, 4);

function calcOrDouble(number, basis = 2) {
	console.log(number * basis);
}
calcOrDouble(3);
calcOrDouble(3, 5);


//=== Классы ===
class Rectangle {
	constructor(height, width = 20) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}
const square1 = new Rectangle(10, 10);
console.log(square1.calcArea());

const square2 = new Rectangle(10);
console.log(square2.calcArea());


//=== Spread-операторы ===
let musicStyle = ["Pop", "Rock", "Metal", "folk"],
	movieGenre = ["Comedy", "Drama", "Horror", "Thriller"],
	internet = [...musicStyle, ...movieGenre, "vk", "facebook", "instagram"];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(a + b + c);
}
let numbers = [2, 5, 7];
log(...numbers);