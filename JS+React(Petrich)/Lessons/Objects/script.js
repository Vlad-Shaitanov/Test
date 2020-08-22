"use strict";

let options = {
	width: 1024,
	height: 1024,
	name: "test",
};
console.log(options.name);
options.boolean = false;
console.log(options.boolean);

options.colors = {//мы добавили в наш объект еще обин объект
	border: "black",
	background: "red",
};
delete options.boolean;//удалили св-во объекта
console.log(options);

for (let key in options) {
	/*Запустили цикл, который перебирает все св-ва объекта
	и выводит их значение*/
	console.log("Свойство " + key + " имеет значение " +
		options[key]);
}
console.log(Object.keys(options).length);//Определяем кол-во свойств в объекте

