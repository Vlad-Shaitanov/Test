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