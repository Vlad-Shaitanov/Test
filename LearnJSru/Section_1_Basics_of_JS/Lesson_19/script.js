"use strict";

function Student(name, age) {
	this.name = name;
	this.age = age;
	this.human = true;
}

let john = new Student("JOHN", 23);
let susan = new Student("SUSAN", 24);
console.log(john);
console.log(susan);

//
let racer = new function () {
	this.name = "Michael";
	this.age = 38;
	this.team = "Ferrari";
	this.startNumber = 10;
};
console.log(racer);

//
function User() {
	console.log(new.target);
}
// без "new":
User(); // undefined
// с "new":
new User(); // function User { ... }

//
function BigUser() {
	this.name = "Вася";

	return { name: "Godzilla" };  // <-- возвращает этот объект
}
console.log(new BigUser().name);  // Godzilla, получили этот объект

function SmallUser() {
	this.name = "Вася";

	return; // <-- возвращает this
}
console.log(new SmallUser().name);  // Вася


//==========TASKS
//1)
let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log(new A() == new B()); // true

//2)
function Calculator() {
	this.read = function () {
		let first = +prompt("Введите первое число", 0),
			second = +prompt("Введите второе число", 0);
		this.a = first;
		this.b = second;
	};
	this.sum = function () {
		return this.a + this.b;
	};
	this.mul = function () {
		return this.a * this.b;
	};
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//3)
function Accumulator(startingValue) {
	this.startingValue = startingValue;
	this.value = startingValue;//Текущее значение
	this.read = function () {
		let number = +prompt("Введите число", 0);
		return this.value += number;
	};
}
let accumulator = new Accumulator(10); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет сумму этих значений