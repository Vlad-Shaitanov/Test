"use strict";

//Синтаксис
let id = Symbol();

//Создаем символ с описанием
let id2 = Symbol("id");

let id3 = Symbol("id");
console.log(id2 === id3);// false, символы уникальны

/*Символы не преобразуются автоматически к строке, поэтому в случае
необходимости приводим к строке явно при помощи to.Sting()*/
console.log(id2.toString());

//? "Скрытые свойства"
let user = {
	name: "Fred",
	age: 30,
};
let id4 = Symbol("id");
user[id4] = 1;
console.log(user[id4]);// мы можем получить доступ к данным по ключу-символу

let user2 = { name: "Вася" };
// Объявляем в нашем скрипте свойство "id"
user2.id = "Наш идентификатор";
// ...другой скрипт тоже хочет свой идентификатор...
user2.id = "Их идентификатор";
// Ой! Свойство перезаписано сторонней библиотекой!

//? Символы в литеральном объекте
let id = Symbol("id");
let user = {
	name: "Вася",
	[id]: 123 // просто "id: 123" не сработает
};

//? Cимволы игнорируются циклом for…in
let id = Symbol("id");
let user = {
	name: "Вася",
	age: 30,
	[id]: 123
};
for (let key in user) alert(key); // name, age 
//(свойства с ключом-символом нет среди перечисленных)
// хотя прямой доступ по символу работает
alert("Напрямую: " + user[id]);

let id = Symbol("id");
let user = {
	[id]: 123
};
let clone = Object.assign({}, user);
alert(clone[id]); // 123

//? Глобальные символы
// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан
// читаем его снова в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");
// проверяем -- это один и тот же символ
alert(id === idAgain); // true

//? Symbol.keyFor
// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// получаем имя по символу
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
alert(Symbol.keyFor(globalSymbol)); // name, глобальный символ
alert(Symbol.keyFor(localSymbol)); // undefined для неглобального символа
alert(localSymbol.description); // name