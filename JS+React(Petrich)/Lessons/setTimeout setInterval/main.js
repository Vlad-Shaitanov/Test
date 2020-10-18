"use strict";

/*setTimeout() - установка задержки для выполнения переданной функции,
задержка записывается в милисекундах (1с = 1000мс)*/
// let timeId = setTimeout(() => {
// 	alert("Hello, friend!");
// }, 5000);
// clearTimeout(timeId);

/*setInterval() - установка временного промежутка для цикличного выполнения
переданной функции, задержка записывается в милисекундах (1с = 1000мс)*/
// let timerId = setInterval(() => {
// 	alert("Hello, friend!");
// }, 5000);
// clearTimeout(timerId);

//Рекурсивный вызов setTimeout()
let timer = setTimeout(function log() {
	console.log("Hello");
	setTimeout(log, 2000);
}, 2000);
clearTimeout(timer);

//---//

let button = document.querySelector(".btn"),
	box = document.querySelector(".box");

function animate() {
	let position = 0;//Первоначальная позиция куба

	let id = setInterval(frame, 10);
	function frame() {
		if (position == 300) {
			clearInterval(id);
		} else {
			position++;
			box.style.top = position + "px";
			box.style.left = position + "px";

		}
	}
}
button.addEventListener("click", animate);

let btnBlock = document.querySelector(".btn-block"),
	btns = document.getElementsByTagName("button");

btnBlock.addEventListener("click", function (event) {
	if (event.target && event.target.classList.contains("first")) {
		//2вариант условия:(event.target && event.target.matches("button.first"))
		console.log("Done");
	}
});