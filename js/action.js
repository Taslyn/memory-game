// create random distribution for the cards:
// initial distribution:
let cardDistribution = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
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
cardDistribution = shuffle(cardDistribution); //shuffle cards

// put a value (or symbol) to every card:
for (let i = 1; i <= cardDistribution.length; i++) {
  let card = document.querySelector('#card' + i); //respective card
  card.innerHTML = cardDistribution[i-1];
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
