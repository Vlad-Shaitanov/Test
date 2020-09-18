"use strict";

//?Варианты записи регулярного выражения:

//1) New RegExp("pattern", "flags");
//2) /pattern/flags


// let answer = prompt("Введите Ваше имя", "");

// let reg = /n/ig;
// // console.log(answer.search(reg));
// console.log(answer.match(reg));
// // console.log(reg.test(answer));

//? Пример замены символов в пароле:
// let pass = prompt("Введите пароль!", "");

// console.log(pass.replace(/./g, "*"));
// console.log(pass);
// alert("12-34-57".replace(/-/g, ":"));//заменили все дефисы на двоеточие


//? Примеры работы с классами символов

let answer = prompt("Введите число", "");
let reg = /\d/g;

console.log(answer.match(reg));


//? Пример поиска комбинации цифр и букв:
let str = "My name is R2D2";
console.log(str.match(/\w\d\w\d/i));//получили R2D2