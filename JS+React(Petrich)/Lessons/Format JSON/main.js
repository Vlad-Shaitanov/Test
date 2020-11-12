"use strict";

let options = {
	width: 1366,
	height: 768,
	background: "red",
	font: {
		size: "16px",
		color: "#fff",
	}
};

console.log(JSON.stringify(options));
//JSON.stringify() сконвертировал наш объект в строку для отправки на сервер
console.log(JSON.parse(JSON.stringify(options)));
//JSON.parse() сконвертировал строку обратно в объект
