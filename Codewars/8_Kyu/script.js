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