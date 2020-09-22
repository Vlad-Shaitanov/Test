"use strict";

//получение последних элементов в списках
let lists = document.querySelectorAll("ul>li:last-child");
console.log(lists);

//поиск совпадений через метод matches
for (let elem of document.body.children) {
	if (elem.matches("a[href$= 'file.zip']")) {
		console.log(`Ссылка на архив: ${elem.href}`);
	}
}

//Поиск ближайщего родителя
let chapter = document.querySelector('.chapter'); // LI

console.log(chapter.closest('.book')); // UL
console.log(chapter.closest('.contents')); // DIV

console.log(chapter.closest('h1')); // null (потому что h1 - не предок)

//Поиск по тегу
let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
	console.log(input.value + ': ' + input.checked);
}


//----------TASKS
//1)
let ageTable = document.getElementById("age-table");
console.log(ageTable);

//2)
let tableElems = ageTable.getElementsByTagName("label");

document.querySelectorAll('#age-table label');

//3)
let td = ageTable.getElementsByTagName("td")[0];

td.rows[0].cells[0];

//4)
let form = document.getElementsByName("search")[0];

document.querySelector('form[name="search"]')

//5)
let firstInput = form.getElementsByTagName("input")[0];
console.log(firstInput);

//6)
let input = form.querySelectorAll('input'); // найти все input
inputs[inputs.length - 1]; // взять последний