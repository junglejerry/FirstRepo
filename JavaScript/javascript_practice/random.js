/*
The Random Number Guessing Game Generates
a number between 1 and 6 and gives a 
player two attempts to guess the number.
*/

/*
var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);
var input = prompt("Please type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>';
document.write(message);
*/

/*
The code above is a simple way for the game to operate, 
while the code below adds much more detail to the game.  
The parseInt() command converts strings to numbers and 
turns decimal digits into integers.  Math.floor is a 
command that logs random numbers and rounds the numbers down.
*/


// assume the player didn't guess correctly
var correctGuess = false;

// generate random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt("I am thinking of a number between 1 and 6. What is it?");

/* test ti see if player is
1. correct
2. guessed too high
3. guessed too low
*/

if (parseInt(guess) === randomNumber) {
    correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
    var guessMore = pompt("Try again. The number I am thinking of is more than " + guess);
    if (parseInt(guessMOre) === randomNumber) {
        correctGuess = true;
    }
} else if (parseInt(guess) > randomNumber) {
    var guessLess = prompt("Try again.  The number I am thinking of is less than " + guess);
    if (parseInt(guessLess) === randomNumber) {
        correctGuess = true;
    }
}

// test if player is correct and output response

if (correctGuess) {
    document.write("<p>You guessed the number!</p>");
} else {
    document.write("<p>Sorry.  The number was " + randomNumber + ".</p>");
}

