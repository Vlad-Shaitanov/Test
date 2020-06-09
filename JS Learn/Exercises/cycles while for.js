"use strict";

// let num = 50;

// while (num < 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
// 	console.log(`Переменная равна: ${i}`);
// }

// for (num = 50; num < 55; num++) {
// 	if (num == 53) {
// 		continue
// 	}
// 	console.log(`Переменная равна ${num}`);
// }

/* Задачи */
let i = 3;
while (i) {
	console.log(i--);
}

let a = 0;
while (++a < 5) {
	console.log(a);
}

let b = 0;
while (b++ < 5) {
	console.log(b);
}

for (let c = 0; c < 5; c++) {
	console.log(c);
}
for (let d = 0; d < 5; ++d) {
	console.log(d);
}

for (let e = 1; e <= 10; e++) {
	if (e % 2 == 0) {
		console.log(e);
	}
}

// let number;
// do {
// 	number = prompt("Введите число, большее 100?", 0);
// } while (number <= 100 && number);
/*Цикл do..while повторяется, пока верны две проверки:

Проверка num <= 100 – то есть, введённое число всё ещё меньше 100.
Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''.
В этом случае цикл while тоже нужно прекратить.
Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима. */

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

	for (let j = 2; j < i; j++) { // проверить, делится ли число..
		if (i % j == 0) continue nextPrime; // не подходит, берём следующее
	}

	console.log(i); // простое число
}