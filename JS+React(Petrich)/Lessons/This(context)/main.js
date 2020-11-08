

//=== Контекст вызова в функциях ===

//1) ПРосто вызов функции Window\undefined
function showThis(a, b) {

	/*Контекстом будет глобальный объект Window.
	В строгом режиме контекстом будет undefined*/
	console.log(this);

	function sum() {

		/*Функция внутри функции тоже будет иметь контекст Window.
		В строгом режиме контекстом будет undefined*/
		console.log(this);
		return a + b;
	}
	console.log(sum());

}
showThis(4, 5);
showThis(5, 5);


//2) У функции внутри объекта контекстом this будет сам объект
let obj = {
	a: 20,
	b: 15,
	sum() {
		//У функции внутри объекта контекстом вызова будет сам объект
		console.log(this);
		function total() {
			/*Контекстом будет глобальный объект Window, т.к. функция вызвана
			сама по себе, а не у объекта*/
			console.log(this);
		}
		total();
	}
};
obj.sum();


//3) У конструктора (new) контекстом будет новый созданный объект
function User(name, id) {//Конструктор объектов
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = () => {
		console.log(`Hello, ${this.name}!`);
	};
}

User.prototype.exit = function (name) {//Добавление нового св-ва в конструктор
	console.log(`Пользователь ${this.name} вышел`);
};

let alex = new User("Alex", 35),
	petr = new User("Petr", 23);
console.log(alex, petr);
alex.hello();
petr.hello();
alex.exit();


//4) Ручная привязка контекста при помощи call, apply,bind
let person = {
	name: "John",
};
function sayName(surname) {
	// Контекстом будет объект person
	console.log(this);
	console.log(this.name + ` ${surname}`);
}
// В call можно передать только обычную строку
console.log(sayName.call(person, "Maxwell"));
// В apply можно передать массив с различными параметрами
console.log(sayName.apply(person, ["Snow"]));

function count(number) {
	return this * number;
}
/*Мы привязали к функции count контекст вызова 2.
Иными словами, контекстом будет содержимое скобок у метода bind()*/
let double = count.bind(2);
console.log(double(3));
console.log(double(10));