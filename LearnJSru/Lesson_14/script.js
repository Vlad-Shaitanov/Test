"use strict";


function sayHello() { //Function Declaration
	console.log("Приветики");
}

let sayHi = sayHello; //Function Expression
sayHello();
sayHi();

//функции-колбэки
//Function Declaration
// function ask(question, yes, no) {
// 	if (confirm(question)) {
// 		yes();
// 	} else {
// 		no();
// 	}
// }
// function showOk() {
// 	alert("Welcome");
// }
// function showCancel() {
// 	alert("Aborted");
// }
// ask("Are you 18+?", showOk, showCancel);

//Function Expression
function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}
ask("Are you 18+?", function () { alert("Welcome"); },
	function () { alert("Aborted"); }
);