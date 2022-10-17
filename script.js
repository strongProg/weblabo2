import Deck from "./deck.js"


const listeCarte  = document.querySelector(".player-card-slot")
const playerDeck = document.querySelector(".player-deck")
const texte = document.querySelector(".text") 

const deck = new Deck()
deck.brassage
for(var i = 0; i < 52; i++)
    listeCarte.appendChild(deck.cards[i].getHTML())  

