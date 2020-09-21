"use strict";

let sum = "Hello" / 2;
console.log(sum); //NaN

//типы кавычек
let userName = "Elijah Wood";
console.log(`And a winner is: ${userName}`);
console.log(`Result: ${1 + 3}`);

// Пример встраивания if
let number = 10;
if (number > 0 && number < 2) {
	number = "numsmall";
	console.log("small");
} else {
	number = "numbig";
	console.log("big");
}
console.log(`the num is: ${number}`);

//Булевы значения
let isGreater = 4 > 1;
console.log(isGreater);

//null
//специальное значение, которое представляет собой «ничего», «пусто»
let age = null;
console.log(age);

//undefined
//Переменная обявлена, но значение не присвоено
let month;
console.log(month);

//typeof
console.log(typeof (0));
console.log(typeof (null));
console.log(typeof (undefined));
console.log(typeof ("pedro"));
console.log(typeof (alert));
console.log(typeof (true));
console.log(typeof ("105"));


//----------TASK

let myName = "Vladislav";
console.log(`Hello, ${1}`); //Hello, 1
console.log(`Hello, ${"name"}`); //Hello, name
console.log(`Hello, ${myName}`); //Hello, Vladislav