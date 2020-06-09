"use strict";

let student = {
	name: "Vlad",
	age: 30,
};
console.log(student);

student.course = 2;
console.log(student);

student.gend = "male";
console.log(student);

delete student.gend;
console.log(student);

let key = prompt("Что вы хотите знать о юзере?", "name");
alert(student[key]);
