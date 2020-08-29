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