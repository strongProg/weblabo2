import Deck from "./deck.js"


const listeCarte  = document.querySelector(".player-card-slot")
const playerDeck = document.querySelector(".player-deck")
const texte = document.querySelector(".text") 

const deck = new Deck()

deck.brassage()
for (var i = 0; i < 13; i++)
    listeCarte.appendChild(deck.cards[i].getHTML())  
for (var i = 13; i < 26; i++)    
    listeCarte.appendChild(deck.cards[i].getHTML()) 
for (var i = 26; i < 39; i++)
    listeCarte.appendChild(deck.cards[i].getHTML())
for (var i = 39; i < 52; i++) 
    listeCarte.appendChild(deck.cards[i].getHTML())  
    