"use strict";

window.addEventListener("DOMContentLoaded", () => {

	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContent = document.querySelectorAll(".info-tabcontent");

	function hideTabContent(a) {
		// агрумент а позволит выбрать с какого элемента начать скрывать содержимое
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	}
	hideTabContent(1);
	/*Позволит нам скрыть табы, начиная с 1 элемента. Нулевой элемент останется
	на странице*/

	function showTabContent(b) {//Показывает тот контент, который необходим
		if (tabContent[b].classList.contains('hide')) {
			//ПРоверяем скрыт ли таб
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	}

	info.addEventListener("click", (event) => {
		let target = event.target;

		if (target && event.target.classList.contains("info-header-tab")) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);//скрыли все табы
					showTabContent(i);//показали нужный таб
					break;
				}
			}
		}
	});
});