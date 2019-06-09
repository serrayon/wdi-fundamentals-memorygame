var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
 }
];
var cardsInPlay = [];

//steps to check for match
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
		console.log('You found a match!');
	}	else 
	{
		console.log('Sorry, try again.');
	}
};

//getAttribute retrieves the data-id of card flipped
//console.log statement declaraing what card was flipped over
//push adds the card flipped to the cardsInPlay array
//2nd and 3rd console.log lets you see the image and suit
//setAttribute displays the front of the card
function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log(`User flipped ${cards[cardId].rank}`);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
		if (cardsInPlay[0] === cardsInPlay[1])
			alert('You found a match!');
		else{
			alert('Sorry, try again.');
		}
	}
};

//for loop runs through cards array
//img created and stored in cardElement
//setAttribute src to see back of card
//setAttribute data-id to track which card it is
//eventListener when card is clicked flipCard runs
//appendchild adds cardElement to game-board
function createBoard() {
	for (var i= 0; i< cards.length; i ++) {
		var cardElement =document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function myButton() {
	location.reload();
};


 

 

checkForMatch();
createBoard();
