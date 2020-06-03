"use strict";

// let num = 20;
// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 10;
// 	console.log(num);
// }

// showFirstMessage("Hello World");
// console.log(num);



// function calc(a, b) {
// 	return (a + b);
// }
// let calc = function (a, b) {
// 	return (a + b);
// };
// let calc = (a, b) => a + b;

// console.log(calc(8, 10));
// console.log(calc(5, 5));

// function retValue() {
// 	let num = 50;
// 	return num;
// }
// let anotherNum = retValue();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));


// let n = 10;

// function showPrimes(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (!isPrime(i)) {
// 			continue;
// 		}
// 		alert(i);
// 	}
// }

// function isPrime(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (n % i == 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(showPrimes(n));

/* ЗАДАЧИ*/

// let age = +prompt("Insert your age");
// function checkAge(age) {
// 	return (age > 18) ? true : age = confirm('Родители разрешили?');
// }
// console.log(checkAge(age));

// let age = prompt("Insert your age");
// function checkAge(age) {
// 	return (age > 18) || confirm('Родители разрешили?');
// }
// console.log(checkAge(age));


// function min(a, b) {
// 	return (a < b) ? a : b;
// }
// console.log(min(2, 3));
// console.log(min(5, 3));

let x = prompt("Чему равен x?", "");
let n = prompt("Чему равен n?", "");

function pow(x, n) {
	let result = x;
	for (let i = 1; i < n; i++) {
		result *= x;
	}
	return result;
}
if (n < 1) {
	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
	alert(pow(x, n));
}
