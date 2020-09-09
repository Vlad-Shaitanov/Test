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
	chooseExpenses: function () {
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
	},
	detectDayBudget: function () {
		appData.moneyPerDay = ((appData.budget / 30)).toFixed(1);
		//округление до 1 знака после запятой
		alert(`Бюджет за один день равен: ${appData.moneyPerDay} рублей(-я)`);
	},
	detectLevel: function () {
		if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
			console.log("Похоже, что Вы бедный студент)");
		} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
			console.log("Уже неплохо)");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Ого, да Вы боярин)");
		} else {
			console.log("Что-то тут не так!");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", ""),
				percent = +prompt("Под какой %?", "");

			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpense: function () {
		for (let i = 0; i < 3; i++) {
			let optExpenses = prompt("Статья необязательных расходов?", "");
			if ((typeof (optExpenses)) === "string" && optExpenses != null &&
				optExpenses != "" && optExpenses.length <= 40) {
				appData.optionalExpenses[i] = optExpenses;
			}
		}
	},
	chooseIncome: function () {
		let items = prompt(
			"Что принесет дополнительный доход? (Перечислите через запятую)", "");
		if ((typeof (items)) == "string" && (typeof (items)) != null &&
			items != "") {
			appData.income = items.split(", ");
			appData.income.push(prompt("Может что-то еще?", ""));
			appData.income.sort();
			appData.income.forEach(function (itemmassive, i) {
				alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
			});
		}
	}
};
for (let key in appData) {
	console.log("Наша программа включает в себя данные: " +
		key + " - " + appData[key]);