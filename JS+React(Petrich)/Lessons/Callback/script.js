"use strict";

//Функции-колбэки

function first() {

	setTimeout(function () {
		console.log(1);
	}, 500);
}
function second() {
	console.log(2);
}

first();
second();
//первой выполнится функция second


function language(lang, callback) {
	console.log("Я учу" + lang);
	callback();
}
language("JavaScript",
	function () {
		console.log("Я изучил 3-й урок!");
	});