"use strict";

const inputRub = document.querySelector("#rub"),
	inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
	let request = new XMLHttpRequest();//Главный объект для работы с AJAX-запросами

	request.open("GET", "db.json");//Инициализация запроса
	request.setRequestHeader("Content-type", "application/json; charset=utf-8");//Устанавливает значение заголовка HTTP-запроса
	request.send();//Отправляет запрос

	//Свойства объекта:
	//status - Статус ответа на запрос(код)
	//statusText - Строка статуса ответа.
	//responseText - Ответ на запрос в виде строки или null в случае если запрос не успешен или ответ еще не получен.
	//readyState - текущее состояние запроса

	request.addEventListener("readystatechange", function () {//Будем отслеживать текущее состояние запроса
		if (request.readyState === 4 && request.status == 200) {
			//Если операция завершена, все данные получены и код статуса равен 200("успешно")
			let data = JSON.parse(request.response);

			inputUsd.value = inputRub.value / data.usd;
		} else {
			inputUsd.value = "Что-то пошло не так";
		}
	});
});