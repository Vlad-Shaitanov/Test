"use strict";

let box = document.getElementById("box"),
	btn = document.getElementsByTagName("button"),
	cirlce = document.getElementsByClassName("circle"),
	heart = document.querySelectorAll(".heart"),
	oneHeart = document.querySelector(".heart");

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(cirlce[2]);
// console.log(heart);
// console.log(heart[1]);
// console.log(oneHeart);

//Теперь применим новые стили к эелементам, полученным со страницы
box.onclick = function boxClick() {
	box.style.backgroundColor = "blue";
	box.style.transition = "0.5";
};
btn[1].style.borderRadius = "100%";

cirlce[0].style.backgroundColor = "green";
cirlce[1].style.backgroundColor = "yellow";
cirlce[2].style.backgroundColor = "red";

// for (let i = 0; i < heart.length; i++) {
// 	heart[i].style.backgroundColor = ("orange");
// }

heart.forEach(function (item, i, hearts) {
	item.style.backgroundColor = ("orange");
});