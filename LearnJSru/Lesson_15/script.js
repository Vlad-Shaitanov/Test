"use strict";

let a,
	b;
let sum = (a, b) => console.log(a + b);
sum(100, 350);

let sayHi = () => console.log("Hello!");
sayHi();

//Пример динамического создания функции
let age = prompt("Сколько Вам лет?", "");
let answer = (age < 18) ?
	() => alert("Привет") :
	() => alert("Приветствуем Вас!");
answer();

//Многострочные стрелочные функции

let c,
	d;
let calc = (c, d) => {
	let result = c + d;
	return result;// при фигурных скобках для возврата значения нужно явно вызвать return
};
console.log(calc(10, 20));


//----------TASKS

function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask(
	"Вы согласны?",
	() => alert("Вы согласились."),
	() => alert("Вы отменили выполнение.");