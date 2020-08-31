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
console.log(appData.expenses);
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