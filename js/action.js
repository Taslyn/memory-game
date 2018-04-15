// create random distribution for the cards:
// initial distribution:
let cardDistribution = ['&#9728','&#9728','&#9729','&#9729','&#9730','&#9730','&#9733','&#9733','&#9742','&#9742','&#9752','&#9752','&#9829','&#9829','&#9775','&#9775'];
let firstCard = undefined;
let secondCard = undefined;
const numberOfPairs = cardDistribution.length/2;
let pairsFound = 0;
let numberOfTurns = 1;

newGameButton = document.querySelector('#reloadButton');

// use Fisher-Yates algorithm to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

function placeCards(cardDistribution) {
  // shuffle cards:
  cardDistribution = shuffle(cardDistribution);
  // put a symbol to every card on the field:
  for (let i = 0; i < cardDistribution.length; i++) {
    let card = document.querySelector('#card' + i); //respective card
    card.innerHTML = '<p>' + cardDistribution[i] + '</p>';
  }
}

function hideCards(cardOne, cardTwo) {
  cardOne.querySelector('p').style.visibility = 'hidden';
  cardOne.style.background = '#555';
  cardTwo.querySelector('p').style.visibility = 'hidden';
  cardTwo.style.background = '#555';
}

function hideAllCards() {
  for (let i = 0; i < cardDistribution.length; i++) {
    let card = document.querySelector('#card' + i); //respective card
    card.style.background = '#555';
    card.querySelector('p').style.visibility = 'hidden';
  }
}

function updateTurn() {
  numberOfTurns++;
  document.querySelector('#turnDisplay').textContent = 'Turn: ' + numberOfTurns;
  updateStarRating(numberOfTurns);
}

function updateStarRating(numberOfTurns) {
  if (numberOfTurns > 24) {
        document.querySelector('#starRating').innerHTML = '&#9734 &#9734 &#9734';
      } else {
        if (numberOfTurns > 18) {
          document.querySelector('#starRating').innerHTML = '&#9733 &#9734 &#9734';
        } else {
          if (numberOfTurns > 12) {
            document.querySelector('#starRating').innerHTML = '&#9733 &#9733 &#9734';
          } else {
            document.querySelector('#starRating').innerHTML = '&#9733 &#9733 &#9733';
          }
        }
      }
}

placeCards(cardDistribution);
updateStarRating(numberOfTurns);

// attach eventListener to every card:
for (let i = 0; i < cardDistribution.length; i++) {
  let card = document.querySelector('#card' + i); //respective card
  // what happens when card is clicked:
  card.addEventListener('click', function(event) {
    event.preventDefault();
    if (secondCard === undefined) {
      if (card.querySelector('p').style.visibility != 'visible') {
        // if clicked card is hidden reveal it
        card.querySelector('p').style.visibility = 'visible';
        //card.querySelector('span').style.opacity = '1';
        card.style.backgroundColor = '#eee';
        if (firstCard === undefined) {   // if first card
          firstCard = card;
        } else {   //if second card
          secondCard = card;
          if (firstCard.textContent === secondCard.textContent) { //cards match
            pairsFound++;
            firstCard = undefined; 
            secondCard = undefined;
            if (numberOfPairs === pairsFound) { //check if game is won
              alert('You win! You only needed ' + numberOfTurns + ' turns!');
            }
          } else { //cards do not match --> hide both
            setTimeout(function() {
              hideCards(firstCard,secondCard);
              firstCard = undefined; 
              secondCard = undefined;
            },1500);
          }
          updateTurn();
        }
        
      }
    }
  });  
}

newGameButton.onclick = function() {
  hideAllCards();
  placeCards(cardDistribution);
  numberOfTurns = 1;
  pairsFound = 0;
 updateStarRating(numberOfTurns);
  document.querySelector('#turnDisplay').textContent = 'Turn: 1';
};