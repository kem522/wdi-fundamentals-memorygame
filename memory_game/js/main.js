
//Global variables
var score = 0;
var cardsInPlay = [];
var cards = [
{	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}, 
{	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//Shuffle cards using Fisher Yates shuffle
var shuffle = function(array) {
  var m = array.length, t, i;

  while (m) {
  	m--;
    i = Math.floor(Math.random() * m);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

//Reset the gameboard & empty cardsInPlay
var reset = function() {
	var imageList = document.getElementsByTagName('img'); 
		for (i = 0; i < imageList.length; i++) {
			button.style.visibility = 'hidden';
			imageList[i].setAttribute('src','images/back.png');
			cardsInPlay = [];
		}
}

//Reset Button
var button = document.querySelector('button');
button.addEventListener('click', reset);


//Check to see if two chosen cards match
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {

		//If cards match increase and display score, show reset button and shuffle cards
		score++;
		alert('You found a match!');
		shuffle(cards);
		button.style.visibility = 'visible';
		document.getElementById('score').innerHTML = score;
		} else {

		//If cards don't match turn all cards back over
		alert('Sorry, try again.');
		reset();
		}
	}
}

//Show face of card and call checkForMatch function 
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

//Create the gameboard showing the backs of all the cards
var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


createBoard();

