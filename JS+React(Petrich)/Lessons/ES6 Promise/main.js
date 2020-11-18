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
// let loot = 0;
// function castSpell(spell) {
// 	console.log("Вы нанесли удар магией!");

// 	let promise = new Promise(function (resolve, reject) {//Создание промиса
// 		setTimeout(function () {
// 			Math.random() > 0.5 ? resolve({}) : reject("Противник смог увернуться!")
// 		}, 3000);
// 	});
// 	return promise;
// }
// function seeLoot() {
// 	console.log("Самое время забрать трофеи!");
// }
// function restoreMana() {
// 	console.log("Нужно восстановить ману!");
// }
// function win() {
// 	console.log("Вы победили!");
// 	(loot == 1) ? seeLoot() : restoreMana();
// }
// function loose() {
// 	console.log("Вы проиграли!");
// }
// castSpell({})
// 	.then(() => console.log("Вы попали в цель!"))//При состоянии resolve
// 	.then(win)//При состоянии resolve
// 	.catch(loose);//При состоянии reject


//Next exercises:
//1)
console.log("Request data...");
const prom = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log("Preparing data...");
		let backendData = {
			server: "server.php",
			port: 5000,
			status: "working",
		};
		resolve(backendData);//Мы сообщили промису, что он завершил свое исполнение
	}, 2000);
});

prom
	.then(data => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				data.modified = true;
				resolve(data);
			}, 3000);
		});
	})
	.then(clientData => {
		console.log("Data received", clientData);
		clientData.fromPromise = true;
		return clientData;
	})
	.then(data => {
		console.log("Data was modified", data);
	})
	.catch(err => {
		console.log(`Error: ${err}`);
	})
	.finally(() => {
		//Этот метод будет вызван независимо от того, обработается ли промис удачно или с ошибкой
		console.log("FINALLY");
	});

//2)
const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms);
	});
};
sleep(3000).then(() => console.log("After 3 seconds"));
sleep(4000).then(() => console.log("After 4 seconds"));
sleep(5000).then(() => console.log("After 5 seconds"));
sleep(6000).then(() => console.log("After 6 seconds"));
sleep(7000).then(() => console.log("After 7 seconds"));

//3)
Promise.all([sleep(10000), sleep(20000)])
	//Промис будет завершен, когда будут выполнены все промисы в массиве
	.then(() => console.log("All promises is done"));

//4)
Promise.race([sleep(10000), sleep(20000)])
	//Промис будет завершен, когда отработает самый быстрый промис в массиве
	.then(() => console.log("All promises is done"));