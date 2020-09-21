"use strict";

let user = {
	name: "Mike",
	age: 35,
};
user.hello = function () {
	console.log(`Good morning! ${user.name}`);
};
console.log(user);
user.hello();

//
let person = {
	surname: "Ivanov",
	age: 30,
	sayHi() {
		console.log(`Здравствуйте, мистер ${this.surname}`);
	}
};
person.sayHi();


//
let student = {
	surname: "Ivanov",
	age: 20
};
let teacher = {
	surname: "Petrov",
	age: 50
};
function sayHello() {
	console.log(`Добрый день ${this.surname}`);
}
student.func = sayHello;
teacher.func = sayHello;

student.func();
teacher.func();




//----------TASKS
//1)
let user2 = {
	name: "John",
	hi: function () {
		console.log(this.name);
	}
};
(user2.hi)();


//2)
let obj, method;
obj = {
	go: function () { alert(this); }
};

obj.go();               // (1) [object Object]
(obj.go)();             // (2) [object Object]
(method = obj.go)();    // (3) undefined
(obj.go || obj.stop)(); // (4) undefined

//Случаи (1) и (2) это то обычный вызов метода объекта через точку ., и this
//ссылается на объект перед точкой

//Случай (3). Здесь мы имеем более сложный вызов (expression).method(). Такой
//вызов работает, как если бы он был разделён на 2 строчки:
//f = obj.go; // вычисляется выражение (переменная f ссылается на код функции)
//f();        // вызов функции, на которую ссылается f
//Здесь f() выполняется как функция, без передачи значения this.

//Случай (4). Тут похожая ситуация на случай (3) – идёт потеря значения this.


//3)
function makeUser() {
	return {
		name: "Джон",
		ref: this
	};
}

let user3 = makeUser();

alert(user3.ref.name); // Error: Cannot read property 'name' of undefined
/*Это потому, что правила, которые определяют значение this, никак не смотрят
на объявление объекта. Важен лишь момент вызова метода.
Здесь значение this внутри makeUser() является undefined, потому что makeUser()
вызвана как функция, не через «точку» как метод.*/

//А вот противоположный случай:
function makeUser() {
	return {
		name: "Джон",
		ref() {
			return this;
		}
	};
}

let user4 = makeUser();
alert(user4.ref().name); // Джон
//Теперь это работает, поскольку user4.ref() вызывается как метод.
//И значением this становится объект перед точкой..


//4)Создание калькулятора
let calculator = {
	read() {
		this.a = +prompt("Введите первое число", "");
		this.b = +prompt("Введите второе число", "");
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	}
};
calculator.read();
alert(`Сумма чисел равна: ${calculator.sum()}`);
alert(`Произведение чисел равно: ${calculator.mul()}`);


//5) Лестница
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	}
};
ladder
	.up()
	.up()
	.down()
	.up()
	.down()
	.showStep();