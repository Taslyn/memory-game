// create random distribution for the cards:
// initial distribution:
//let cardDistribution = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let cardDistribution = ['&#9728','&#9728','&#9729','&#9729','&#9730','&#9730','&#9733','&#9733','&#9742','&#9742','&#9752','&#9752','&#9763','&#9763','&#9775','&#9775'];
let firstCard = undefined;
let secondCard = undefined;
const numberOfPairs = cardDistribution.length/2;
let pairsFound = 0;
let numberOfTurns = 1;

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

function increaseTurn() {
  numberOfTurns++;
  document.querySelector('span').textContent = 'Turn: ' + numberOfTurns;
}

placeCards(cardDistribution);
console.log('cards placed on grid');

// attach eventListener to every card:
for (let i = 0; i < cardDistribution.length; i++) {
  let card = document.querySelector('#card' + i); //respective card
  // what happens when card is clicked:
  console.log('Attach eventListener to card ' + i);

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
          console.log('1st card: ' + firstCard.textContent);
          console.log('actual card: ' + secondCard.textContent);
          if (firstCard.textContent === secondCard.textContent) { //cards match
            pairsFound++;
            console.log('Number of pairs found: ' + pairsFound);
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
          increaseTurn();
        }
        
      }
    }
  });  
}
console.log('attached eventListener to every card');