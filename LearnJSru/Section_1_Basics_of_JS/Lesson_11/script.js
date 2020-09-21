"use strict";

//while
// let count = 5;
// while (count) {
// 	console.log(count);
// 	count--;
// }

//do...while
// let num = 3;
// do {
// 	console.log(num);
// 	num--;
// } while (num);

//for
// for (let e = 0; e < 5; e++) {
// 	console.log(e);
// }

//прерывание цикла break
// let sum = 0;
// while (true) {
// 	let summary = +prompt("Введите число", "");
// 	if (!summary || summary == null) {
// 		break;
// 	}
// 	sum += summary;
// }
// alert(sum);

//переход к следующей итерации continue
// for (let counter = 0; counter < 10; counter++) {
// 	if (counter % 2 == 0) {
// 		continue;
// 	}
// 	console.log(counter);
// }


//----------TASKS

//1)
// let i = 3;
// while (i) {
// 	console.log(i--);
// }

//2)
//2.1
// let q = 0;
// while (++q < 5) {
// 	console.log(q);//1, 2, 3, 4
// }
//2.2
// let r = 0;
// while (r++ < 5) {
// 	console.log(r);//1, 2, 3, 4, 5
// }
/*Первое значение: i = 1. Остановимся на нём подробнее.
Оператор i++ увеличивает i, возвращая старое значение, так что в сравнении i++ < 5
будет участвовать старое i = 0.
Но последующий вызов alert уже не относится к этому выражению,
так что получит новый i = 1.*/

//3)
//3.1
// for (let i = 0; i < 5; i++) {
// 	alert(i);//0, 1, 2, 3, 4
// }
//3.2
// for (let i = 0; i < 5; ++i) {
// 	alert(i);//0, 1, 2, 3, 4
// }
//4)
// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i);
// 	}
// }
//5)
// let m = 0;
// while (m < 3) {
// 	console.log(`number ${m}!`);
// 	m++;
// }

//6)
// let numeric = prompt("Введите число, большее 100", "");
// while (numeric < 100 && numeric) {
// 	numeric = prompt("Введите другое число, большее 100", "");
// }
// alert(`Вы ввели число ${numeric}!`);

// or that

// let num;
// do {
// 	num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

//7)
let n = 10;
outer:
for (let i = 2; i < n; i++) { //перебор цифр до n
	inner:
	for (let j = 2; j < i; j++) {
		//перебор делителей для i. 
		//Смотрим, делится ли i на что-то, кроме равного себе
		if (i % j == 0) {
			continue outer;
		}
	}
	console.log(i);
}