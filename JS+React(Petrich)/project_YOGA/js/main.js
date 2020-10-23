"use strict";

window.addEventListener("DOMContentLoaded", () => {

	//===TABs===
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

	//===Timer===
	let deadline = "2020-10-24";//Когда истекает таймер

	function getTimeRemaining(endtime) {
		//Разница между дедлайном и текущим временем
		let time = Date.parse(deadline) - Date.parse(new Date());
		let seconds = Math.floor((time / 1000) % 60),
			minutes = Math.floor((time / 1000 / 60) % 60),
			hours = Math.floor((time / (1000 * 60 * 60)));
		return {
			"total": time,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds
		};
	}

	function setClock(id, endtime) {//Передали id элемента и дедлайн
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds");
		let timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);

			function addZero(num) {
				if (num <= 9) {
					return "0" + num;
				} else {
					return num;
				}
			}
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}
	setClock("timer", deadline);
});