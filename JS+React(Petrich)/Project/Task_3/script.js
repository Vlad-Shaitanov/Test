"use strict";

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};


for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if ((typeof (a)) === "string" && (typeof (a)) != null &&
		typeof (b) != null && a != "" && b != "" && a.length <= 50) {
		appData.expenses[a] = b;
		console.log("DONE");
	}
}

// Переписываем цикл при помощи WHILE
// let count = 0;
// while (count < 2) {
// 	let c = prompt("Введите обязательную статью расходов в этом месяце", ""),
// 		d = prompt("Во сколько обойдется?", "");

// 	if ((typeof (c)) === "string" && (typeof (c)) != null &&
// 		typeof (d) != null && c != "" && d != "" && c.length <= 50) {
// 		appData.expenses[c] = d;
// 		console.log("DONE");
// 	}
// 	count++;
// }


//Переписываем цикл при помощи DO...WHILE
// let i = 0;
// do {
// 	let e = prompt("Введите обязательную статью расходов в этом месяце", ""),
// 		f = prompt("Во сколько обойдется?", "");

// 	if ((typeof (e)) === "string" && (typeof (e)) != null &&
// 		typeof (f) != null && e != "" && f != "" && e.length <= 50) {
// 		appData.expenses[e] = f;
// 		console.log("DONE");
// 	}
// 	i++;
// } while (i < 2);


console.log(appData);
appData.moneyPerDay = Math.round(appData.budget / 30);

if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
	console.log("Похоже, что Вы бедный студент)");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
	console.log("Уже неплохо)");
} else if (appData.moneyPerDay > 2000) {
	console.log("Ого, да Вы боярин)");
} else {
	console.log("Что-то тут не так!");
}
alert(`Бюджет за один день равен: ${appData.moneyPerDay} рублей(-я)`);