import Deck from "./deck.js"


const listeCarte  = document.querySelector(".computer-card-slot")
const playerDeck = document.querySelector('.player-deck')
const texte = document.querySelector('.text') 

const deck = new Deck()

listeCarte.appendChild(deck.cards[0].getHTML())







