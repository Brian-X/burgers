
	console.log("hello world");

//select word to be guessed
var words = ["matamata", "hawksbill", "wood turtle", "eastern box turtle", "leatherback", "green sea turtle", "leapard tortoise", "star tortoise", "river cooter", "red eared slider", "snapping turtle", ];

// array math.random[word1 word2 ...]
var word = words[Math.floor(Math.random()*words.length)];
console.log(word);
// console.log result of random word to check

// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];

var guess ;             // Geuss
var geusses = [ ];      // Stored geusses
var guessCounter ;           // Guessed letters
var missCounter ;         // miss counter
// turn word into hashes before it apears on screen

// var answer = word[Math.floor(Math.random() * word.length)];
//     answer = answer.replace(/\s/g, "-");
//     console.log(answer);

var answer = prompt("make your guess");
    var userGuessLower = answer.toLowerCase();

//If this is true, then guess is in the array
    if(answer.indexOf(userGuessLower) >= 0){
//if the guess IS in our list!
    alert("Heck yes!")
    } else {
      alert("Well.. everyone has their own opinon!");
    }

    if(userGuessLower == answer[0]){}

    document.write()

// display the default screen

// user presses a key and capture that (use input validation - is user entering a letter)

// user inputs letter - check to see if its correct

// can't guess the same letter twice

// if its correct it goes on the word. and replaces the hash.

// 	if correct, must replace multiple hashes
// 	number of guesses goes down from 12

// 	if win, win count goes up
// 		game is reset from the array
// 		guessed letters gets reset
// 		number of guesses is reset


		

// 	if it's incorrect it goes in the other container
// 	number of guesses goes down from 12

// 		condition: if guesses = 0 then game over

// 		guess counter reset
// 		missed letters reset
// 		another word chosen


