function* guessingGame() {

	var complete = false;
	var answer = null;
	var numRandom = Math.floor(Math.random() * 100);

	yield game.say("Welcome to a game for babies!");

		var myName = yield game.ask("What's your name?");

	yield game.say("Let's begin, "+myName)+"!";

	console.log(numRandom);

	do {
		answer = yield game.ask("Pick a number. Now.");
		var numAnswer = parseInt(answer, 10);
		console.log(answer);
		if (numAnswer === numRandom) {
			complete = true;
		}
		else if (numAnswer > numRandom) {
			yield game.say("You're way too high. You should probably quit. I'll give you another chance.");
		}
		else {
			yield game.say("Your guess was way too low. Shame on you.");
		}
	} while(!complete)
	
	if (numAnswer === numRandom) {
		yield game.say("You must be a cyborg alien computer genius -- you're right!");
	}
}