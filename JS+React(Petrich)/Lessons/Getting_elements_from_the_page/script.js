"use strict";

let box = document.getElementById("box"),
	btn = document.getElementsByTagName("button"),
	circle = document.getElementsByClassName("circle"),
	heart = document.querySelectorAll(".heart"),
	oneHeart = document.querySelector(".heart"),
	wrapper = document.querySelector(".wrapper");

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

circle[0].style.backgroundColor = "green";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "red";

// for (let i = 0; i < heart.length; i++) {
// 	heart[i].style.backgroundColor = ("orange");
// }

// heart.forEach(function (item, i, hearts) {
// 	item.style.backgroundColor = "orange";
// });

//?СОЗДАНИЕ НОВОГО ЭЛЕМЕНТА НА СТРАНИЦЕ
let div = document.createElement("div"),
	text = document.createTextNode("Hello!");//создание текстового узла

div.classList.add("black");

// document.body.appendChild(div);//Добавили наш div  в конец тела HTML

wrapper.appendChild(div);//Добавили наш div в конец класса wrapper

div.innerHTML = "Hello, world!";//Вставили текст в наш div
box.innerHTML = "<h1>Hello world!</h1>";//В элемент box добавлен заголовок h1
//Если в элемент нужно добавить именно текст, то лучше использовать textContent:
div.textContent = "AAA";

document.body.insertBefore(div, circle[1]);//Добавили наш div перед вторым элементом circle
//ЕСЛИ В insertBefore() не указать второй параметр,
//то функция сработает, как appendChild()

//Удаление элемента
document.body.removeChild(circle[2]);//document.body т.к. общий родитель
wrapper.removeChild(heart[1]);//здесь уже другой род.элемент

//Замена элемента
document.body.replaceChild(btn[1], circle[1]);//circle убирается со страницы и
//на его место встает btn

console.log(div);
console.log(text);