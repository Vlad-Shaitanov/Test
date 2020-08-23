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

//?Свойство из переменной
function makeUser(name, age) {
	return {
		name, // то же, что и name: name
		age  // то же, что и age: age
	};
}
let user = makeUser("Fred", 30);
console.log(user.name);


//?Проверка существования св-ва
let color = {
	wall: "white",
	floor: "red",
	door: "brown",
};
console.log(color.window === undefined);
/*получили релультат true, значит св-ва window в объекте нет*/
console.log("wall" in color);//true, св-во существует в объекте
console.log("window" in color);//false, св-во отсутствует
let part = "wall";//переменная имеет значение, равное св-ву в объекте
console.log(part in color);

//? Цикл for in
let player = {
	account: "study",
	lvl: 100,
	numOfChars: 3,
};
for (let key in player) {
	//выводит ключи
	console.log(key);
	//выводит значения ключей
	console.log(player[key]);
}

//? Копирование по ссылке
let box = {
	toy: true,
};
let thing = box;
console.log(box.toy);
thing.toy = false; // изменено по ссылке из переменной "thing"
console.log(box.toy); // изменено по ссылке из переменной "box"


//?Сравнение объектов
let a = {};
let b = a;
console.log(a == b);//true, один и тот же объект

let c = {};
let d = {};
console.log(c == d);//false, разные объекты


//? Упорядочивание св-в объекта
let codes = {
	"+49": "Германия",
	"+41": "Швейцария",
	"+44": "Великобритания",
	"+1": "США",
};
for (let code in codes) {
	console.log(+code);
}


//?----------TASKS

//1)
let currentUser = {};
currentUser.name = "John";
currentUser.surname = "Smith";
currentUser.name = "Pete";
delete currentUser.name;