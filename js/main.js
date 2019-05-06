var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay [1]) {
	console.log("You found a match!");
} 
	else {
	console.log("Sorry, try again.");
 }

}

function flipCard(cardId) {
	
	console.log(`User flipped ${cards[cardId]}`);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2 && cardsInPlay [0] === cardsInPlay [1]) {
	alert('You found a match!');
	checkForMatch();
} 

	else {
	alert('Sorry, you lost.');

 }
		
};

flipCard(0);
flipCard(2);
checkForMatch(0,3);