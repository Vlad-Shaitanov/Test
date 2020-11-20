"use strict";

try {
	/*При отсутствии ошибок в этом блоке, скрипт продолжает выполняться,
	"перепрыгивая" через блок catch*/
	console.log("Начинаем выполнение скрипта");
	console.log(age);
	console.log("Промежуточный результат");
} catch (error) {
	//Выполняется при наличии ошибок в блоке try
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);

	console.log(`Мы получили ошибку: ${error.name}`);
}
console.log("Итоговый результат");

let json = '{"id": 2}';
try {
	let user = JSON.parse(json);
	console.log(user);

	if (!user.name) {
		throw new Error("В этих данных нет имени!");
	}
} catch (error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
} finally {
	//Этот необязательный блок будет выполнен в любом случае
	console.log("А я выполнюсь всегда!");
}

let button = document.querySelector(".btn");
function testingInput() {
	let message = document.querySelector("#bottomText"),
		x = document.querySelector("#testField").value;
	message.innerHTML = "";
	try {
		if (x == "") {
			throw "empty";
		}
		if (isNaN(x)) {
			throw "not a number";
		}

		x = Number(x);
		if (x < 5) {
			throw "too low";
		}
		if (x > 10) {
			throw "too much";
		}

	} catch (error) {
		console.log(error);
		message.innerHTML = `Input is: ${error}`;
	}
}
button.addEventListener("click", testingInput);