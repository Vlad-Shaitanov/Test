"use strict";

//touchstart - событие возникает при возникновении касания к элементу

//touchmove - событие возникает при касаниb к элементу и перемещении
//пальца в другою точку

//touchend - событие возникает, когда палец перестает соприкасаться
//с поверхностью

//touchenter - событие возникает, когда палец заходит на какой-то элемент

//touchleave - событие возникает, когда палец покидает какой-то элемент

//touchcancel - событие возникает тогда, когда точка соприкосновения больше
//не регистрируется на поверхности

window.addEventListener("DOMContentLoaded", function () {
	let box = document.querySelector(".box");

	// box.addEventListener("touchstart", function (event) {
	// 	event.preventDefault();
	// 	console.log("Red box: touchstart");
	// 	console.log(event.target);
	// 	console.log(event.touches[0].target);
	// 	console.log(event.touches);//рега всех ппальцев, исп. в событии
	// 	console.log(event.changedTouches);//список пальцев, которые взаимодействовали
	// 	console.log(event.targetTouches);//рега пальцев, которые взаимодействовали с определенным эл-ом
	// });
	box.addEventListener("touchmove", function (event) {
		event.preventDefault();
		console.log("Red box: " + event.touches[0].pageX);
	});
	// box.addEventListener("touchend", function (event) {
	// 	event.preventDefault();
	// 	console.log("Red box: touchend");
	// });
});