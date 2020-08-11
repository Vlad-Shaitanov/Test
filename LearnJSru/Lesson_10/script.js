"use strict";

let hour = 9,
	isWeekend = true;
if (hour < 10 || hour > 19 || isWeekend) {
	console.log("Офис закрыт. Пожалуйста, уточните часы приема");
}


let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert(name); // выбирается "John" – первое истинное значение


let x;
true || (x = 1);
/*т.к.первое значение true, расчет второго значения не выполняется
и х будет undefined*/
console.log(x);
false || (x = 1);
console.log(x);


// Если первый операнд истинный,
// И возвращает второй:
alert(1 && 0); // 0
alert(1 && 5); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert(null && 5); // null
alert(0 && "no matter what"); // 0


alert(!true); // false
alert(!0); // true



//----------TASKS

//1)
console.log(null || 2 || undefined);        //2

//2)
console.log(alert(1) || 2 || alert(3));     //сначала 1, затем 2
/*Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.
Первый оператор ИЛИ || выполнит первый alert(1).
Получит undefined и пойдёт дальше, ко второму операнду в
поисках истинного значения.
Так как второй операнд 2 является истинным, то вычисления завершатся, 
результатом undefined || 2 будет 2, 
которое будет выведено внешним alert( .... ).
Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, 
поэтому 3 выведено не будет.*/

//3)
console.log(1 && null && 2);                //null

//4)
console.log(alert(1) && alert(2));          //1, а затем undefined
/*Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

Поэтому до правого alertдело не дойдёт, вычисления закончатся на левом.*/

//5)
console.log(null || 2 && 3 || 4);           //3

//6)
// let age = 15;
// if (age >= 14 && age <= 90) {
// 	console.log("Возраст в заданном диапазоне");
// }

//7)
let age = 10;
if (age <= 14 && age >= 90) {
	console.log("Возраст вне диапазона");
}
/*второй вариант*/if (!(age >= 14 && age <= 90));

//8)
if (-1 || 0) alert('first');              //выполнится
if (-1 && 0) alert('second');             //не выполнится
if (null || -1 && 1) alert('third');      //выполнится

//9
let login = prompt("Кто здесь?", "");
if (login == "Админ") {
	let password = prompt("Введите пароль", "");
	if (password == "Я главный") {
		alert("Здравствуйте!");
	} else if (password == null || password == "") {
		alert("Отменено!");
	} else {
		alert("Неверный пароль");
	}
} else if (login == null || login == "") {
	alert("Отменено!");
} else {
	alert("Я Вас не знаю!");
}