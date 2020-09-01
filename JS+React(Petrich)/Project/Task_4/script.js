"use strict";

let money,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};


function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = prompt("Во сколько обойдется?", "");

		if ((typeof (a)) === "string" && (typeof (a)) != null &&
			typeof (b) != null && a != "" && b != "" && a.length <= 50) {
			appData.expenses[a] = b;
			console.log("DONE");
		} else {
			i = i - 1;
		}
	}
}
chooseExpenses();

console.log(appData);
//округление до 1 знака после запятой
appData.moneyPerDay = ((appData.budget / 30)).toFixed(1);

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

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой %?", "");

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();