"use strict";

//Пример без использования промисов
// let drink = 0;
// function shoot(arrow, headshot, miss) {
// 	console.log("Вы сделали выстрел...");
// 	setTimeout(function () {
// 		Math.random() > 0.5 ? headshot({}) : miss("Вы промахнулись!")
// 	}, 3000);
// }
// function buyBeer() {
// 	console.log("Вам купили кружку пенного!");
// }
// function giveMoney() {
// 	console.log("Вам подкинули деньжат!");
// }
// function win() {
// 	console.log("Вы победили!");
// 	(drink == 1) ? buyBeer() : giveMoney();
// }
// function loose() {
// 	console.log("Вы проиграли!");
// }
// shoot({},
// 	function (mark) {
// 		console.log("Вы попали в цель!");
// 		win(mark, buyBeer, giveMoney);
// 	},
// 	function (miss) {
// 		console.error(miss);
// 		loose();
// 	}
// );


// С применением промисов
let loot = 0;
function castSpell(spell) {
	console.log("Вы нанесли удар магией!");

	let promise = new Promise(function (resolve, reject) {//Создание промиса
		setTimeout(function () {
			Math.random() > 0.5 ? resolve({}) : reject("Противник смог увернуться!")
		}, 3000);
	});
	return promise;
}
function seeLoot() {
	console.log("Самое время забрать трофеи!");
}
function restoreMana() {
	console.log("Нужно восстановить ману!");
}
function win() {
	console.log("Вы победили!");
	(loot == 1) ? seeLoot() : restoreMana();
}
function loose() {
	console.log("Вы проиграли!");
}
castSpell({})
	.then(() => console.log("Вы попали в цель!"))//При состоянии resolve
	.then(win)//При состоянии resolve
	.catch(loose);//При состоянии reject