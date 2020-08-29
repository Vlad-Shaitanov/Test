"use strict";

//? Добавление и удаление элементов
let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.pop();//удалили последний элемент массива
console.log(arr);
arr.push("5");//добавили в конец массива строку "5"
console.log(arr);
arr.shift();//удалили первый элемент массива
console.log(arr);
arr.unshift("1");//добавили в начало массива строку "1"

//? Перебор элементов
//1 способ
let arr1 = [10, 20, 30, 40, 50];
for (let i = 0; i < arr1.length; i++) {
	console.log(arr1[i]);
}

//2 способ (предпочтительнее)
let arr3 = ["first", 20, "milk", 100, 250];
arr3.forEach(function (value, i, mass) {
	console.log(i + " : " + value + ` (Массив: ${mass} )`);
});
for (let key of arr3) {//так можно получить значения массива
	console.log(key);
}

//?Превращение строки в массив
let ans = prompt("Введите список покупок", "");
let arr4 = [];

arr4 = ans.split(",");//в скобках указан разделитель
console.log(arr4);

//? Превращение массива в строку
let arr5 = ["Профитроли", "Борщ", "Компот"];
let str = arr5.join(", ");
console.log(arr5);

//? Сортировка для строчных данных
let arr6 = ["Яблоко", "Томат", "Абрикос"];
let res = arr6.sort();
console.log(arr6);

//? Сортировка для числовых данных
let arr7 = [3, 10, 7, 1];
let res1 = arr7.sort(sortNum);
function sortNum(a, b) {
	return a - b;
}
console.log(arr7);