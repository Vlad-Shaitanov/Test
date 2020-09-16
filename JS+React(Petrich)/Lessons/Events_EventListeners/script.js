"use strict";

let btn = document.getElementsByTagName("button");

// btn[0].onclick = function () {
// 	alert("Вы нажали первую кнопку!");
// };

btn[0].addEventListener("click", function () {
	alert("Вы нажали первую кнопку!");
});
btn[0].addEventListener("click", function () {
	alert("Вы снова нажали первую кнопку!");
});
btn[0].addEventListener("mouseenter", function () {
	alert("Курсок щекочет кнопку=)");
});