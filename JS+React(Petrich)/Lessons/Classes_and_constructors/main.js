"use strict";

function User(name, id) {//Конструктор объектов
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = () => {
		console.log(`Hello, ${this.name}!`);
	};
}

User.prototype.exit = function (name) {//Добавление нового св-ва в конструктор
	console.log(`Пользователь ${this.name} вышел`);
};

let alex = new User("Alex", 35),
	petr = new User("Petr", 23);
console.log(alex, petr);
alex.hello();
petr.hello();
alex.exit();


class Student {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;

	}
	hello() {
		console.log(`Hello, ${this.name}!`);
	}

	exit() {
		console.log(`Пользователь ${this.name} вышел`);
	}
}
let max = new Student("Max", 35),
	john = new Student("John", 23);
console.log(max, john);
max.hello();
john.hello();
john.exit();