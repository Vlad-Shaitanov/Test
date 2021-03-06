"use strict";

//-----------

/*While making a game, your partner, Greg, decided to create a
function to check if the user is still alive called
checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors
while creating the function.
checkAlive/CheckAlive/check_alive should return true if the player's health
is greater than 0 or false if it is 0 or below.
The function receives one parameter health which will always be a
whole number between -10 and 10. */
function checkAlive(health) {
	if (health < 0) {
		return false;
	} else {
		return true;
	}
}
console.log(checkAlive(-3));


/*Make a function that will return a greeting
statement that uses an input; your program should return, "Hello, <name> how are you doing today?".*/
function greet(name) {
	return (
		`Hello, ${name} how are you doing today?`
	);
}
console.log(greet("Pete"));


/*The cockroach is one of the fastest insects. Write a function which takes its speed in
km per hour and returns it in cm per second, rounded down to the integer (= floored).
For example:
cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is language dependent) and is >= 0.
The result should be an Integer.*/
function cockroachSpeed(s) {
	s *= 27.777778;
	return Math.floor(s);
}
console.log(cockroachSpeed(1.08));



/*You are given the length and width of a 4-sided polygon. The polygon
can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16
Note: for the purposes of this kata you will assume that it is a
square if its length and width are equal, otherwise it is a rectangle.
*/
const areaOrPerimeter = function (l, w) {
	if (l == w) {
		let area = l * l;
		return area;
	} else {
		let perimetr = 2 * (l + w);
		return perimetr;
	}
	//return l == w ? l*w : 2*(l + w)
};
console.log(areaOrPerimeter(4, 4));
console.log(areaOrPerimeter(6, 10));


//Use variables to find the sum of the goals Messi scored in 3 competitions
//Information
//Messi goal scoring statistics:
//La Liga	43
//Champions League	10
//Copa del Rey	5
/*Define
Create three variables and store the appropriate values using the table above:
laLigaGoals
championsLeagueGoals
copaDelReyGoals
Create a fourth variable named totalGoals (javascript, C#, Java) or
total_goals (python, ruby). totalGoals/total_goals should store the sum of
all of Messi's goals for this year.*/
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
console.log(totalGoals);


/*Suppose that the falling speed of a petal is 5 centimeters per second
(5 cm/s), and it takes 80 seconds for the petal to reach the ground from a
certain branch.
Write a function that receives the speed (in cm/s) of a petal as input, and
returns the time it takes for that petal to reach the ground from the
same branch.

Notes:
The movement of the petal is quite complicated, so in this case we can see
the velocity as a constant during its falling.
Pay attention to the data types.
If the initial velocity is non-positive, the return value should be 0*/
function sakuraFall(v) {
	let t = 0;
	if (v <= 0) {
		return t;
	} else {
		return t = 400 / v;
	}
}
console.log(sakuraFall(5));


/*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of
water per hour of cycling.
You get given the time in hours and you need to return the number of litres
Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5*/
function litres(time) {
	if (time >= 0) {
		return (Math.floor(time * 0.5));
	} else {
		return 0;
	}
}
console.log(litres(3));


/*Description:
Make a simple function called greet that returns the most-famous "hello world!"
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create
the most creative hello world you can think of? What is a "hello world"
solution you would want to show your friends?*/
function greet() {
	let hi = "hello world!";
	return hi;
}
console.log(greet());



/*In this simple exercise, you will build a program that takes a value,
integer, and returns a list of its multiples up to another value, limit. If
limit is a multiple of integer, it should be included as well. There will
only ever be positive integers passed into the function, not consisting of 0.
The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return
[2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.*/
function findMultiples(integer, limit) {
	let arr = [];
	for (let i = integer; i <= limit; i++) {
		if (i % integer == 0) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(findMultiples(4, 27));



/*It's the academic year's end, fateful moment of your school report.
The averages must be calculated. All the students come to you and entreat you
to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.*/
let marks = [2, 2, 2, 2];
function getAverage(marks) {
	let total = marks.reduce(function (a, b) {
		return a + b;
	});
	let result = (Math.floor(total / marks.length));
	return result;
}
console.log(getAverage(marks));

//
let games = ["3:1", "2:2", "0:1"];
console.log(+games[0]);