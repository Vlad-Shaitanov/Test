"use strict";

// let user = new Object();//синтаксис "конструктор объекта"

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

// let currentName = prompt(
// 	"Информация о каком пользователе Вас интересует?", "name");
// alert(person[currentName]);

// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {
// 	[fruit]: 5,// имя свойства будет взято из переменной fruit
// };
// console.log(bag);// 5, если fruit="apple"

let veg = prompt("Какой овощ Вам нравится?", "Картофель");
let buy = {};
buy[veg] = 5;
console.log(buy);

let car = "Kia";
let garage = {//ключом является значение из переменной car
	["Your " + car + " is "]: "black",
};
console.log(garage);


function makeUser(name, age) {
	return {
		name, // то же, что и name: name
		age  // то же, что и age: age
	};
}
let user = makeUser("Fred", 30);
console.log(user.name);