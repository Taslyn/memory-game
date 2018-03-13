// create random distribution for the cards:
// initial distribution:
let cardDistribution = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let firstCard = undefined;
const numberOfPairs = cardDistribution.length/2;
let pairsFound = 0;

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
  for (let i = 1; i <= cardDistribution.length; i++) {
    let card = document.querySelector('#card' + i); //respective card
    card.innerHTML = '<span>' + cardDistribution[i-1] + '</span>';
  }
}

placeCards(cardDistribution);
console.log('cards placed on grid');
// attach eventListener to every card:
for (let i = 1; i <= cardDistribution.length; i++) {
  let card = document.querySelector('#card' + i); //respective card
  // what happens when card is clicked:
  card.addEventListener('click', function(event) {
    event.preventDefault();
    //console.log(event);
    //console.log(card);
    // reveal card
    if (card.querySelector('span').style.visibility != 'visible') {
      card.querySelector('span').style.visibility = 'visible';
      if (firstCard === undefined) {   // if first card
        return firstCard = card;
      } else {   //if second card
        console.log('1st card: ' + firstCard.textContent);
        console.log('actual card: ' + card.textContent);
        if (firstCard.textContent === card.textContent) { //cards match
          pairsFound++;
          console.log('A pair was found!' + pairsFound);
          if (numberOfPairs === pairsFound) {
            alert('You win!');
          }
        } else { //cards do not match
          firstCard.querySelector('span').style.visibility = 'hidden';
          card.querySelector('span').style.visibility = 'hidden';
        }
        firstCard = undefined; 
      }
      
    }
   console.log('attached eventListener to every card');
    // 2nd card -> compare cards (increase turn)
    // agree -> leave revealed -> check if game ended
    // disagree -> cover both 
  });  
}




/*document.getElementByID('#card1').addEventListener('click', clickCard());

function clickCard() {
  event.preventDefault();
} */
/*  event.preventDefault();
  // Select size input and Grid
  let row = document.querySelector('#inputHeight').value; //number of rows
  let column = document.querySelector('#inputWeight').value; //numbers of columns
  let table = document.querySelector('#pixelCanvas'); //table element
  table.innerHTML = ''; //reset the grid
  let tableContent = '';
  for (var r = 0; r < row; r++) {  //loop for rows/height
    console.log("Printing out row = " + r);
    tableContent += '<tr>';
    for (var c = 0; c < column; c++) { //loop for columns/width
      console.log("Printing out column = " + c);
      tableContent += '<td></td>';
    }
    tableContent+= '</tr>';
  }
  table.innerHTML = tableContent;
  //console.log(table.innerHTML);
}); */
