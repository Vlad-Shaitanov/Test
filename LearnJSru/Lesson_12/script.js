"use strict";

let sum = 2 + 3 + 3;
switch (sum) {
	case 3: console.log("Маловато!");
		break;

	case 8: console.log("В яблочко!");
		break;

	case 9: console.log("Многовато!");
		break;
	default: console.log("Совсем мимо!");
}


let a = "1",
	b = 0;
switch (+a) {
	case b: console.log("Не угадал!");
		break;

	case b + 1: console.log("Верно!");
		break;
}

//группировка case
let c = 2 + 2;
switch (c) {
	case 3:
	case 5:
		console.log("А вот и нет!");
		console.log("Пора вспомнить школьную программу!");
		break;
	case 4: console.log("Верно!");
		break;
}

//Switch - проверяет на строгое равенство. Следим за типом данных

// let answer = prompt("Введите число", "");
// switch (answer) {
// 	case 1: alert("Единица");//не выполнится, разный тип данных
// 		break;
// 	case "1": alert(`Вы ввели число ${answer}!`);
// 		break;

// }


//----------TASKS

//1)

// let browser = prompt("Choose your browser", "IE");
// if (browser == 'Edge') {
// 	alert("You've got the Edge!");
// } else if (browser == 'Chrome'
// 	|| browser == 'Firefox'
// 	|| browser == 'Safari'
// 	|| browser == 'Opera') {
// 	alert('Okay we support these browsers too');
// } else {
// 	alert('We hope that this page looks ok!');
// }

//2)
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
	case 0: alert('Вы ввели число 0');
		break;
	case 1: alert('Вы ввели число 1');
		break;
	case 2:
	case 3:
		alert('Вы ввели число 2, а может и 3');

}
