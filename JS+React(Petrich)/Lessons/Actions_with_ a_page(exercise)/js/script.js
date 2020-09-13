"use strict";

let menuItems = document.querySelectorAll(".menu-item"),
	menu = document.querySelector(".menu"),
	menuItem = document.createElement('li'),
	title = document.querySelector(".title"),
	column = document.querySelectorAll(".column"),
	adv = document.querySelector(".adv"),
	question = document.querySelector(".prompt");

menu.insertBefore(menuItems[2], menuItems[1]);//поменяли элементы местами
menu.appendChild(menuItem);//добавили дочерний элемент
menuItem.innerHTML = "Пятый пункт";//вставили текст в этот элемент
menuItem.classList.add("menu-item");//присвоили элементу класс

console.log(menuItems);

document.body.style.background = "url(./img/apple_true.jpg)";//поменяли фон

title.innerHTML = "Мы продаем только подлинную технику Apple";//изменили title

column[1].removeChild(adv);//удалили дочерний элемент
//либо adv.remove()

let answer = prompt("Как  Вы относитесь к технике Apple?", "");
question.innerHTML = answer;