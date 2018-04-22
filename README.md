# Memory Game

This project contains everything you need to play a memory game in your browser. Memory is a card game where you have to find cards with matching symbols. Since all cards are turned face down and you can only reveal two at a time, you will have to rely on your short-term memory to win!

## Project Information

*Author:* Tabea Brodhagen

*Version:* 22.04.2018

## Table of Contents

[1. Explanation of the Project](#1-explanation-of-the-project)

[2. HTML File](#2-html-file)

[3. CSS File](#3-css-file)

[4. JavaScript File](#4-javascript-file)

[5. Browser Compatibility](#5-browser-compatibility)

## 1. Explanation of the Project
The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!
Each turn the following happens:
* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

## 2. HTML File
The HTML File *index.html* contains the general content of the page, i.e. a headline and a line containing the statistics of the current game like the star rating, the turns that have passed and the timer. Furthermore, a button to restart the game is available. Beneath, the game board is located where each card is represented by a `<div>`. Their content is added using JavaScript. 
Everything that is needed to display the game board and statistics is contained in the `<div id="gameArea">`. 
An additional `<div>` for the content that pops up when the game is won is placed seperately: `<div id="popup">`. The content for this `<div>` is added interactively using [JavaScript](#4-javascript-file).

## 3. CSS File
Most of the styling is done in the CSS File *css/styles.css*. Here, the visibility of each card's symbol and of the popup is initialized with *invisible*. The changing of these values according to the game's progress is handled in the [JavaScript File](#4-javascript-file). 
Furthermore, the CSS File adjusts the display of the game board according to the viewport orientation. 

## 4. JavaScript File
The JavaScript File *js/action.js* is responsible for implementing the game's logic and all interactive behaviour.
Since all displayed text changes regularly, JavaScript is resposible for updating the text content. 
Actions that are executed repeatedly were stored in functions:
* `shuffle(array)` to create a random distribution for the cards
* `placeCards(cardDistribution)` allocates a symbol to every card
* `hideCards(cardOne, cardTwo)` is used at the end of a turn when the revealed cards did not match
* `hideAllCards()` is used when a new game is started to turn all cards face down again
* `updateTurn()` updates the displayed turn number and adjusts the star rating if necessary by using `updateStarRating(numberOfTurns)`
* `updateStarRating(numberOfTurns)` adjusts the displayed star rating depending on the current number of turns
* `startNewGame()` calls several other functions to initialize a new game

The game's logic is implemented by attaching an `eventListener` to every card. It handles all decisions and actions that are needed whenever a card is clicked by using the functions described above.     

## 5. Browser Compatibility

This project was designed to work on Google Chrome and was not tested on any other browsers.
The layout was tested to work on iPad and mobile phones.