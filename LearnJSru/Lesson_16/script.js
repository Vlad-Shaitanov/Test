"use strict";

let user = new Object();//синтаксис "конструктор объекта"

let setUp = {}; /*синтаксис "литерал объекта"
данный синтаксис предпочтительнее*/

let person = { //создали объект
	name: "Michael",
	age: 25,
	gender: "Male",
	"year Of Born": 1990,//использование св-ва из нескольких слов
};
console.log(person.gender);//вывели значение по ключу
let age = person.age; //присвоили другой переменной свойство из объекта
console.log(age);
console.log(person);

person.isAdmin = true; //добавили новое свойство объекту
console.log(person);

delete person.gender; //удалили одно из свойств объекта
console.log(person);

console.log(person["year Of Born"]);//вызов св-ва из нескольких слов
person["name of pet"] = "Lucky Boy";//добавили св-во из нескольких слов
console.log(person);