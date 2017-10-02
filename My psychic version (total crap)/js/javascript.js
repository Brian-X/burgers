
	console.log("hello world");
//There must be an alphabet for the computer and user to choose from
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//the computer must initiate the game by guessing a letter.
	

//Variables to show up in the game screen
	var wins = 0;
	var losses = 0;
	var guessRemain = 10;
	var guessCount = 0;
	var gSoFar = [];
	var compNumber = null;

	var newCompNumber = function() {
	this.compNumber = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
	console.log(compNumber);
}

	var reset = function() {
		guessRemain = 10;
		gSoFar = [];
		secret = null;

		newCompNumber();
		guessRemain();
		// prGSoFar();

	}

	newCompNumber();
	// guessRemain();

//When a key is depressed
	document.onkeydown = function(event) {

		guessRemain--;
		var userLetter = String.fromCharCode(event.keyCode).toLowerCase();


		var compNumber = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(compNumber);
		gSoFar.push(userLetter);
		// guessCount();
		// prGSoFar();

		var userGuess = event.key;

		if (userGuess > 0) {
			if (userLetter == compNumber){
				wins++;
				reset();
			}
			
			
		} else if (guessRemain == 0){
			//The guessRemain needs to go down 1 unit, and the secret needs to reset
			losses++;
			reset();
			
		}

		// if (guessRemain = 0) {
		// 	//The losses need to advance and the guesses remaining needs to be reset
		// 	losses++;

		// 	guessRemain = 10;
	}


		console.log(wins);
		console.log(losses);
		console.log(guessRemain);
		console.log(guessCount);

	

	// var html =
	// 	"<p>Wins: " + wins + "</p>" +
	// 	"<p>Losses: " + losses + "</p>" +
	// 	"<p>Guesses Remaining: " + guessRemain + "</p>" +
	// 	"<p>Your Guesses so far: " + guessCount + "</p>";

	// Set the inner HTML contents of the #game div to our html string
	// document.getElementById("#game").innerHTML = html;
	



// document.querySelector("#game").innerHTML = html;


var wins = function() {
	document.getElementById("wins").innerHTML = "Wins: " + wins;
}
var losses = function() {
    document.getElementById("losses").innerHTML = "Losses:  " + losses;
}
var guessRemain = function() {
    document.getElementById("guessRemain").innerHTML = "Guesses Remaining: " + guessRemain;
}
var guessCount = function() {
    document.getElementById("guessCount").innerHTML = "Your guesses so far: " + guesses;
}