"use strict";

let arr = [10, 1, 5, 6, 3, 15];
arr.sort(compareNum);
function compareNum(a, b) {
	return a - b;
}
console.log(arr);
arr.reverse();
console.log(arr);


//Объектоно-ориентированное программирование
let soldier = {
	health: 400,
	armor: 100
};
let john = {
	health: 100
};
john.__proto__ = soldier;//указали, что john это потомок soldier
console.log(john);
console.log(john.armor);//теперь можно использовать св-во от прототипа
